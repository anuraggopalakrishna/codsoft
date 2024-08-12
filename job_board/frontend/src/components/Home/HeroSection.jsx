import React, { useContext, useState, useEffect } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";
import { Context } from "../../main";

//
const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setCurrentText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <h2 className="typewriter">{currentText}</h2>;
};

const HeroSection = () => {
  const { user } = useContext(Context);

  const details = [
    {
      id: 1,
      title: "15,000+",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "2,500+",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "1,00,000+",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "50,000+",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  const renderIntro = () => {
    if (user && user.role === "Employer") {
      return (
        <>
          <>
            <div className="heroSection">
              <div className="container">
                <div className="title">
                  <Typewriter text="Find the right candidate. Fast." />
                  <br />
                  <p>
                    Welcome, Employer! With our platform, you can streamline
                    your hiring process and find the perfect candidate for your
                    company quickly and efficiently.
                  </p>
                  <p>
                    Post your job openings, browse through a pool of qualified
                    candidates, and connect with the talent that best fits your
                    company's needs. Say goodbye to long hiring cycles and hello
                    to your next top performer.
                  </p>
                </div>
                <div className="image">
                  <img src="/employer.png" alt="hero" />
                </div>
              </div>
              <div className="details">
                {details.map((element) => {
                  return (
                    <div className="card" key={element.id}>
                      <div className="icon">{element.icon}</div>
                      <div className="content">
                        <p>{element.title}</p>
                        <p>{element.subTitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </>
      );
    } else {
      return (
        <>
          <div className="heroSection">
            <div className="container">
              <div className="title">
                <Typewriter text="Find your Dream Job and Boost Your Career 2x with our platform!" />
                <p>
                  Welcome to{" "}
                  <b>
                    <u>JobZee</u>
                  </b>
                  , where opportunities meet talent. Whether you're searching
                  for your dream job or looking to take your career to the next
                  level, we've got you covered. Our platform offers a wide range
                  of job listings, resources, and tools to help you succeed.
                </p>
              </div>
              <div className="image">
                <img src="/employee.png" alt="hero" />
              </div>
            </div>
            <div className="details">
              {details.map((element) => {
                return (
                  <div className="card" key={element.id}>
                    <div className="icon">{element.icon}</div>
                    <div className="content">
                      <p>{element.title}</p>
                      <p>{element.subTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <section className="homepage-intro">
      <div className="container">{renderIntro()}</div>
    </section>
  );
};

export default HeroSection;
