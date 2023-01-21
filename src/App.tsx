import { Routes, Route } from "@solidjs/router";
import NotFound from "./Components/Authorization/NotFound";
import ProtectedRoute from "./Components/Authorization/ProtectedRoute";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/*all" element={<NotFound />} />
    </Routes>
  );
}

export default App;
