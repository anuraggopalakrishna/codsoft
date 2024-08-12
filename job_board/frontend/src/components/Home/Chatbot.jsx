import { useState, useEffect } from "react";
import axios from "axios";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function generateAnswer() {
    setAnswer("loading");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_REACT_APP_CHAT_API
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      let generatedText = response.data.candidates[0].content.parts[0].text;
      generatedText = generatedText.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );
      generatedText = generatedText.replace(/\*(.*?)\*/g, "<em>$1</em>"); // Replace *text* with <em>text</em>

      // Split the text into separate lines
      const lines = generatedText.split("\n");
      // Join the lines with <br> to render them in the HTML
      setAnswer(lines.join("<br>"));
    } catch (error) {
      setAnswer(
        "An error occurred while generating the answer. Please try again."
      );
      console.error("Error generating answer:", error);
    }
  }

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="container-chat">
          <div className="resize-handle-chat" />
          <div className="chat-header">
            <div className="heading-chat">
              <p>Hey I am PRAVI!! </p>
              <p>How can I help You?</p>
            </div>
            <button className="close-btn-chat" onClick={toggleChatbot}>
              Close
            </button>
          </div>
          <div className="chat-box-chat">
            <div
              className="message-chat"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
          <textarea
            className="textarea-chat"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
          />
          <button className="button-chat" onClick={generateAnswer}>
            Generate Answer
          </button>
        </div>
      )}
      {!isOpen && (
        <button className="open-btn-chat" onClick={toggleChatbot}>
          Chat with PRAVI!
        </button>
      )}
    </div>
  );
}

export default Chatbot;
