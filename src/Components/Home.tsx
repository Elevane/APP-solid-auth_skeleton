import { Component } from "solid-js";
import UseAuth from "../Hooks/UseAuth";
import UseLocalStorage from "../Hooks/UseLocalStorage";

const Home: Component = () => {
  const token = UseLocalStorage.getToken();
  return (
    <div>
      <p>Home</p>
      <a href="" onClick={UseAuth.logout}>
        click here to logout
      </a>
    </div>
  );
};

export default Home;
