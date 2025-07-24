import React from "react";
import { useState } from "react";
import { Route, useNavigate, Routes, Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Input,
  InputGroup,
  Button,
  HStack,
  VStack,
  Field,
  defineStyle,
  Flex,
} from "@chakra-ui/react";
import { LuUser, LuLock } from "react-icons/lu";
import Register from "./register";

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
      navigate("/");
    } catch {
      alert("Login failed");
    }
  };

  <Routes>
    <Route path="/register" element={<Register />} />
  </Routes>;
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
        <Field.Root>
          <Box position="relative" mb={4} width="100%">
            <Input className="peer" placeholder="" />
            <Field.Label css={floatingStyles}>Email</Field.Label>
          </Box>

          <Box position="relative" mb={6} width="100%">
            <Input type="password" className="peer" placeholder="" />
            <Field.Label css={floatingStyles}>Password</Field.Label>
          </Box>

          <Button colorScheme="teal" width="100%">
            Log In
          </Button>
          <Button as={Link} to="/register" colorScheme="teal" width="100%">
            Register
          </Button>
        </Field.Root>
      </Box>
    </Box>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "none",
  px: ".5",
  insetStart: "2",
  top: "0.5rem",
  left: "0.75rem",
  fontSize: "0.875rem",
  fontWeight: "normal",
  pointerEvents: "none",
  color: "black",
  transition: "all 0.2s ease",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "black",
    top: "-3",
    insetStart: "2",
  },
});

export default LoginPage;
