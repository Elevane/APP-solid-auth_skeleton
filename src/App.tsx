import { Routes, Route, Router } from "@solidjs/router"
import { Toaster } from "solid-toast"
import CreateAccount from "./Components/Authentification/CreateAccount"
import Login from "./Components/Authentification/Login"
import NotFound from "./Components/Authorization/NotFound"
import ProtectedRoute from "./Components/Authorization/ProtectedRoute"
import Home from "./Components/Home"

function App() {
  const width = window.innerWidth
  const height = window.innerHeight
  return (<div style={{
    "width" : `${width}px`,
    "height" : `${height}px`,
    'display' :"flex",
    "flex-direction" : "column",
    "align-items" :"center"
  }}> 
  <Toaster toastOptions={{ style : {"background" : "#A3B18A"}}} />
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
  </div>
   
  )
}

export default App
