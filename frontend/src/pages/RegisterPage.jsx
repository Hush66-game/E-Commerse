import React from "react";
import { Box, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });
      alert("Registered: " + res.data.name);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
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
        <Box w={"full"} p={6} rounded={"lg"} color={"black"}>
          <form onSubmit={register}>
            <VStack spacing={4}>
              <Input
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit" colorScheme="teal" width="100%">
                Register
              </Button>
              <Button as={Link} to="/login" colorScheme="teal" width="100%">
                Already have an account? Log In
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
