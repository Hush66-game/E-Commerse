import { Routes, Route } from "react-router-dom"
import { Box } from "@chakra-ui/react";
import Navbar from "./components/ui/navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";


function App() {
  return (
   <Box minH={"100vh"} bg={"#fef6f5"}>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Box>
  );
}

export default App;