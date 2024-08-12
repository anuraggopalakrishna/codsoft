import React from "react";
import "../../App.css";

export default function Courses() {
  function addToCart() {
    alert("Coming Soon!");
  }
  return (
    <div className="categories">
      <div className="course-card-container">
        <div className="course-card">
          <img className="course_img" src="/web_course.jpg" alt="Course" />
          <h6>
            <b>Master Complete Front-End development</b>
          </h6>
          <p className="course-tutor">
            <b>Tutor: Gagan M</b>
          </p>
          <p className="course-cost">
            Cost: <s className="course-no-discount">₹4,999</s>
            &nbsp;&nbsp;₹2,999
          </p>
          <button className="course_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
          <button className="course_buy" onClick={() => addToCart()}>
            Buy Now!
          </button>
        </div>
        {/* 2 */}
        <div className="course-card">
          <img className="course_img" src="/app_course.jpg" alt="Course" />
          <h6>
            <b>Complete Android 14 & Kotlin Development Masterclass</b>
          </h6>
          <p className="course-tutor">
            <b>Tutor: Manoj Kumar</b>
          </p>
          <p className="course-cost">
            Cost: <s className="course-no-discount">₹5,999</s>
            &nbsp;&nbsp;₹3,599
          </p>
          <button className="course_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
          <button className="course_buy" onClick={() => addToCart()}>
            Buy Now!
          </button>
        </div>
        {/* 3 */}
        <div className="course-card">
          <img className="course_img" src="/dsa_course.png" alt="Course" />
          <h6>
            <b>Master the Coding Interview: Data Structures + Algorithms</b>
          </h6>
          <p className="course-tutor">
            <b>Tutor: Abhishek A C</b>
          </p>
          <p className="course-cost">
            Cost: <s className="course-no-discount">₹3,099</s>
            &nbsp;&nbsp;₹1,999
          </p>
          <button className="course_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
          <button className="course_buy" onClick={() => addToCart()}>
            Buy Now!
          </button>
        </div>
        {/* 4 */}
        <div className="course-card">
          <img className="course_img" src="/python_course.png" alt="Course" />
          <h6>
            <b>Python for Finance: Investment Fundamentals & Data Analytics</b>
          </h6>
          <p className="course-tutor">
            <b>Tutor: Swaroop S V</b>
          </p>
          <p className="course-cost">
            Cost: <s className="course-no-discount">₹5,499</s>
            &nbsp;&nbsp;₹3,399
          </p>
          <button className="course_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
          <button className="course_buy" onClick={() => addToCart()}>
            Buy Now!
          </button>
        </div>
        {/* 5 */}
        <div className="course-card">
          <img className="course_img" src="/ios_course.png" alt="Course" />
          <h6>
            <b>iOS & Swift - The Complete iOS App Development Bootcamp</b>
          </h6>
          <p className="course-tutor">
            <b>Tutor: Gagan M</b>
          </p>
          <p className="course-cost">
            Cost: <s className="course-no-discount">₹4,499</s>
            &nbsp;&nbsp;₹2,799
          </p>
          <button className="course_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
          <button className="course_buy" onClick={() => addToCart()}>
            Buy Now!
          </button>
        </div>
        {/* 6 */}
        <div className="course-card">
          <img className="course_img" src="/manage_course.jpg" alt="Course" />
          <h6>
            <b> Management Skills Training for New & Experienced Managers</b>
          </h6>
          <p className="course-tutor">
            <b>Tutor: Abhishek A C</b>
          </p>
          <p className="course-cost">
            Cost: <s className="course-no-discount">₹3,699</s>
            &nbsp;&nbsp;₹2,999
          </p>
          <button className="course_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
          <button className="course_buy" onClick={() => addToCart()}>
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}
