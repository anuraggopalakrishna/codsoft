import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from "../../main";
import { useContext } from "react";

const HowItWorks = () => {
  const { user } = useContext(Context);
  const renderWorks = () => {
    if (user && user.role === "Employer") {
      return (
        <>
          <div className="howitworks">
            <div className="container">
              <h3>How JobZee for Employers work</h3>
              <div className="banner">
                <div className="card">
                  <FaUserPlus />
                  <p>Create Account</p>
                  <p>
                    Sign up and create your free account with JobZee. It only
                    takes a few minutes to get started.
                  </p>
                </div>
                <div className="card">
                  <MdFindInPage />
                  <p>Post a Job</p>
                  <p>
                    Post your job openings on JobZee to reach a wider audience
                    of job seekers. Start attracting top talent to your company.
                  </p>
                </div>
                <div className="card">
                  <IoMdSend />
                  <p>Recruit Suitable Candidates</p>
                  <p>
                    Take the next step in your hiring process by recruiting
                    suitable candidates on JobZee. Find your next team member
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="howitworks">
            <div className="container">
              <h3>How JobZee for Job Seekers work</h3>
              <div className="banner">
                <div className="card">
                  <FaUserPlus />
                  <p>Create Account</p>
                  <p>
                    Sign up and create your free account with JobZee. Start your
                    journey towards finding your dream job today.
                  </p>
                </div>
                <div className="card">
                  <MdFindInPage />
                  <p>Find a Job</p>
                  <p>
                    Explore job openings from top companies or post your resume
                    on JobZee to attract potential employers. Take control of
                    your job search journey.
                  </p>
                </div>
                <div className="card">
                  <IoMdSend />
                  <p>Apply For Job</p>
                  <p>
                    Submit job applications effortlessly on JobZee and stand out
                    to employers. Let your qualifications shine and secure your
                    next job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <section className="homepage-intro">
      <div className="container">{renderWorks()}</div>
    </section>
  );
};

export default HowItWorks;
