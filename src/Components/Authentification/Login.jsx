import { createSignal } from "solid-js"
import UseLocalStorage from "../../Hooks/UseLocalStorage"
import UseRoutes from "../../Hooks/UseRoutes"

export default function Login() {
  const [userName, setrUserName] = createSignal("")
  const [password, setPassword] = createSignal("")
  return (
    <>
      <h1>login</h1>
      <div>
        <input onchange={() => setrUserName(e.target.value)} type="text"></input>
        <input onchange={() => setPassword(e.target.value)} type="password"></input>
        <input
          onClick={() => {
            UseLocalStorage.saveToken("qzdqzdqzdqzd46q8z4d86qz1dqz")
            UseRoutes.move(UseRoutes.HOME)
          }}
          type="submit"
        ></input>
      </div>
    </>
  )
}
