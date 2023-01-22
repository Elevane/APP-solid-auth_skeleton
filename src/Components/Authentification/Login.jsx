import { Navigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import UseLocalStorage from "../../Hooks/UseLocalStorage";

export default function Login() {
  const [userName, setrUserName] = createSignal("");
  const [password, setPassword] = createSignal("");
  return (
    <>
      <h1>login</h1>
      <div>
        <input onchange={setrUserName} type="text"></input>
        <input onchange={setPassword} type="password"></input>
        <input
          onClick={() => {
            UseLocalStorage.saveToken("qzdqzdqzdqzd46q8z4d86qz1dqz");
            return (window.location.href = "/");
          }}
          type="submit"
        ></input>
      </div>
    </>
  );
}
