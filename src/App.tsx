import { Routes, Route, Router } from "@solidjs/router"
import CreateAccount from "./Components/Authentification/CreateAccount"
import Login from "./Components/Authentification/Login"
import NotFound from "./Components/Authorization/NotFound"
import ProtectedRoute from "./Components/Authorization/ProtectedRoute"
import Home from "./Components/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/*all" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
