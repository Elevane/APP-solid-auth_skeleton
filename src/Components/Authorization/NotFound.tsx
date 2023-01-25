import { Link } from "@suid/material";
import { Component } from "solid-js";
import UseRoutes from "../../Hooks/UseRoutes";

const NotFound: Component = () => {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
      }}
    >
      <h1
        style={{
          "font-weight": "500",
          "font-size": "70px",
          margin: "0",
          padding: "0",
          color: "#000000",
        }}
      >
        Not Found
      </h1>
      <h4
        style={{
          "font-size": "12px",
          margin: "0",
          padding: "0",
          "font-style": "italic",
          opacity: 0.5,
          "padding-bottom": "12px",
        }}
      >
        The page you are looking for doesn"t exist....
      </h4>
      <Link
        style={{ cursor: "pointer" }}
        onClick={() => UseRoutes.move(UseRoutes.HOME)}
        variant="body2"
      >
        To Homepage
      </Link>
    </div>
  );
};

export default NotFound;
