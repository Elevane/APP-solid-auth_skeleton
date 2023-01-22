import UseAuth from "../Hooks/UseAuth";
import UseLocalStorage from "../Hooks/UseLocalStorage";

const Home = () => {
  const token = UseLocalStorage.getToken();
  return (
    <div>
      <p>
        Home <span style={{ color: "red" }}>{token}</span>
      </p>
      <a href="" onClick={UseAuth.logout}>
        click here to logout
      </a>
    </div>
  );
};

export default Home;
