import { Navigate } from "@solidjs/router";
import { Component } from "solid-js";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
interface Props {
  children: Element;
}
const ProtectedRoute: Component<Props> = ({ children }) => {
  const token = UseLocalStorage.getToken();
  if (token == null) return <Navigate href={"/login"}></Navigate>;
  return children;
};

export default ProtectedRoute;
