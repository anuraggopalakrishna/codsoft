import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";
import { Context } from "../../main";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const endpoint =
          user && user.role === "Employer"
            ? "employer/getall"
            : "jobseeker/getall";

        const { data } = await axios.get(
          `http://localhost:4000/api/v1/application/${endpoint}`,
          {
            withCredentials: true,
          }
        );

        // Filter out rejected applications if user is an employer
        if (user && user.role === "Employer") {
          setApplications(
            data.applications.filter((app) => app.status === "Pending")
          );
        } else {
          setApplications(data.applications);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    if (isAuthorized) {
      fetchApplications();
    }
  }, [isAuthorized, user]);

  useEffect(() => {
    if (!isAuthorized) {
      navigateTo("/login");
    }
  }, [isAuthorized, navigateTo]);

  const deleteApplication = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/application/delete/${id}`,
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setApplications((prev) => prev.filter((app) => app._id !== id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const acceptApplication = async (id) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/application/accept/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setApplications((prev) =>
        prev.map((app) =>
          app._id === id ? { ...app, status: "Accepted" } : app
        )
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const rejectApplication = async (id) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/application/reject/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setApplications((prev) =>
        prev.map((app) =>
          app._id === id ? { ...app, status: "Rejected" } : app
        )
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="my_applications page">
      {user && user.role === "Job Seeker" ? (
        <div className="container">
          <h1>
            <center>MY APPLICATIONS</center>
          </h1>
          {applications.length === 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => (
              <JobSeekerCard
                element={element}
                key={element._id}
                deleteApplication={deleteApplication}
                openModal={openModal}
              />
            ))
          )}
        </div>
      ) : (
        <div className="container">
          <center>
            <h3>Applications From Job Seekers</h3>
          </center>
          {applications.length === 0 ? (
            <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => (
              <EmployerCard
                element={element}
                key={element._id}
                openModal={openModal}
                acceptApplication={acceptApplication}
                rejectApplication={rejectApplication}
              />
            ))
          )}
        </div>
      )}
      {modalOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  const statusStyle = {
    color:
      element.status === "Rejected"
        ? "red"
        : element.status === "Accepted"
        ? "green"
        : element.status === "Pending"
        ? "blue"
        : "black",
  };

  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element.name}
        </p>
        <p>
          <span>Email:</span> {element.email}
        </p>
        <p>
          <span>Phone:</span> {element.phone}
        </p>
        <p>
          <span>Address:</span> {element.address}
        </p>
        <p>
          <span>CoverLetter:</span> {element.coverLetter}
        </p>
        <p>
          <span>Status:</span> <span style={statusStyle}>{element.status}</span>
        </p>
      </div>
      <div className="resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
      <div className="btn_area">
        <button onClick={() => deleteApplication(element._id)}>
          Delete Application
        </button>
      </div>
    </div>
  );
};

const EmployerCard = ({
  element,
  openModal,
  acceptApplication,
  rejectApplication,
}) => {
  return (
    <div className="job_seeker_card">
      <div className="detail">
        <p>
          <span>Name:</span> {element.name}
        </p>
        <p>
          <span>Email:</span> {element.email}
        </p>
        <p>
          <span>Phone:</span> {element.phone}
        </p>
        <p>
          <span>Address:</span> {element.address}
        </p>
        <p>
          <span>CoverLetter:</span> {element.coverLetter}
        </p>
      </div>
      <div className="resume">
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
      <div className="btn_area">
        <button
          onClick={() => acceptApplication(element._id)}
          style={{ marginRight: "10px" }}
        >
          Accept
        </button>
        <button
          onClick={() => rejectApplication(element._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

