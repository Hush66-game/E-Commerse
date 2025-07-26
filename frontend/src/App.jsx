import { Routes, Route } from "react-router-dom"
import { Box } from "@chakra-ui/react";
import Navbar from "./components/ui/navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
<Box minH={"100vh"} bg={"#fef6f5"}>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;