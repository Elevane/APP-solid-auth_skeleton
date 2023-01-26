import { Navigate } from "@solidjs/router";
import { Component, JSXElement } from "solid-js";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
interface Props {
  children: JSXElement;
}

const ProtectedRoute: Component<Props> = ({ children }) => {
  const token = UseLocalStorage.getToken();
  if (token == null) return <Navigate href={"/login"}></Navigate>;
  return children;
};

export default ProtectedRoute;
