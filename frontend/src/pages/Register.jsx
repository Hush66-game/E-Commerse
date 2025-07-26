import React from "react";
import { Box, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Route, useNavigate, Routes, Link } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert ("Password doesn't match!");
      return;
    }

    try{
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, username}),
      });
      const data = await res.json();

      if (res.ok) {
        alert('Registration successful!');
      } else {
        alert (data.message || 'Registration successful!');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };
  return (
 <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.100">
      <Box bg="gray.100" p={8} borderRadius="lg" boxShadow="md" width="100%" maxW="sm">
        <Box w={"full"} p={6} rounded={"lg"} color={"black"}>
          <form onSubmit={handleRegister}>
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
                onChange={(e) => setUsername(e.target.value)}
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
};

export default Register;
