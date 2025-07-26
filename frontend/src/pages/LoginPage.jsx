import React from "react";
import { useState } from "react";
import { Route, useNavigate, Routes, Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Input,
  Button,

  VStack,

} from "@chakra-ui/react";
import { LuUser, LuLock } from "react-icons/lu";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/homepage");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Box
        bg="gray.100"
        p={8}
        borderRadius="lg"
        boxShadow="md"
        width="100%"
        maxW="sm"
      >
  
          <Box w={"full"} p={6} rounded={"lg"}>
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <Input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <Input
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" colorScheme="teal" width="100%">
                  Log In
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  colorScheme="teal"
                  width="100%"
                >
                  Register
                </Button>
              </VStack>
            </form>
          </Box>

      </Box>
    </Box>
  );
};

export default LoginPage;
