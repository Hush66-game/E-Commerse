import {
  Container,
  Flex,
  Text,
  Link,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/shopeelogo.png";

const Navbar = () => {
  return (
    <Box maxH={"100%"} bg={"#fef6f5"}>
      <Container
        maxW={"1000px"}
        p={0}
        bg={"#ee4d2d"}
        gradientFrom={"#ee4d2d"}
        gradientTo={"#fef6f5"}
      >
        <Flex
          h={12}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", md: "row", sm: "row" }}
        >
          <Text fontSize={"12"} color={"white"}>
            <Link to="/">Seller Center</Link>
            <Link to="/create" ml={4}>
              Start Selling
            </Link>
            <Link to="/" ml={4}>
              Download
            </Link>
            <Link to="/" ml={4}>
              Follow us on{" "}
            </Link>
          </Text>
          <Text fontSize={"12"} color={"white"}>
            <Link to="/">Help</Link>
            <Link to="/" ml={4}>
              English
            </Link>
            <Link to="/" ml={4}>
              Account Name
            </Link>
          </Text>
        </Flex>

        <Flex
          h={20}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
          bg={"#ee4d2d"}
          flexDir={{ base: "row", md: "row", sm: "row" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", width: "40px" }}
          />
          <Text color={"white"} flex={1} display={"flex"} alignItems={"center"}>
            <Link
              to="/"
              fontSize={"32px"}
              margin={"0 10px"}
              padding={"0"}
              color={"white"}
              _hover={{ textDecoration: "none", color: "#fef6f5" }}
            >
              Shopee
            </Link>
            <VStack maxW={"1000px"} spacing={0}>
              <Input placeholder="Search..." bg={"white"} />
              <Text width={"600px"} color={"white"} fontSize={"10px"} p={0} m={0} textAlign={"center"}>
                Search for products, brands and more..
              </Text>
            </VStack>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
