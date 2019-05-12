import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "white" }}
      className="jumbotron"
    >
      <img src="./GoogleBooks.png" alt="google-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;