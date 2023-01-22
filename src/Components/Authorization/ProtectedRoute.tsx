import { Navigate } from "@solidjs/router";
import UseLocalStorage from "../../Hooks/UseLocalStorage";

export default function ProtectedRoute({ children }) {
  const token = UseLocalStorage.getToken();
  if (token == null) return <Navigate href={"/login"}></Navigate>;
  return children;
}
