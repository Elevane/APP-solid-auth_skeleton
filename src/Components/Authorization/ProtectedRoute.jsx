import Login from "../Authentification/Login";

export default function ProtectedRoute({ children }) {
  const localDb = localStorage.getItem(import.meta.env.VITE_USERCOOKIE);
  console.log(localDb);
  if (localDb) return children;
  else return <Login />;
}
