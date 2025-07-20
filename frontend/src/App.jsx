import { Routes, Route } from "react-router-dom"
import { Box } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

function App() {
  return (
   <Box minH={"100vh"} bg={"#fef6f5"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;