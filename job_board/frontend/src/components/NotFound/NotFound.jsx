import React from "react";
import { Link } from "react-router-dom";
// import styles from './NotFound.module.css';
const NotFound = () => {
  return (
    <>
      <section className="page notfound">
        <div className="content">
          <img src="/notFound.png" alt="notfound" />
          <Link to={"/"}>RETURN TO HOME PAGE</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
