import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  Button,
  Group
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { LuSearch } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/shopeelogo.png";

const Navbar = () => {
  return (
    <Box w="100%" bg="#fef6f5">
      {/* Top Links Bar */}
      <Box bg="#ee4d2d" fontSize="12px" color="white">
        <Container maxW="1000px">
          <Flex justify="space-between" py={1} flexWrap="wrap">
            <HStack spacing={4}>
              <Link to="/">Seller Center</Link>
              <Link to="/create">Start Selling</Link>
              <Link to="/">Download</Link>
              <Link to="/">Follow us on</Link>
            </HStack>
            <HStack spacing={4}>
              <Link to="/">Help</Link>
              <Link to="/">English</Link>
              <Link to="/">Account Name</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Logo, Search, Cart */}
      <Box bg="#ee4d2d" py={2} px={0} paddingBottom={0}>
        <Container maxW="1000px">
          <Flex align="center" justify="space-between" flexWrap="wrap" gap={4}>
            {/* Logo */}
            <HStack spacing={2}>
              <Image src={logo} alt="Shopee Logo" w="60px" />
              <Text fontSize="28px" fontWeight="400" color="white">
                <Link to="/">Shopee</Link>
              </Text>
            </HStack>

            {/* Search Bar */}
            <VStack flex={1} p={0} margin={0}>
              <Group size="md" w="full" attached maxW="xxl" py={2} pb={0} margin={0}>
                <Input
                  placeholder="Search for products, brands and more"
                  bg="white"
                  color="black"
                  borderRadius="md"
                  _placeholder={{ color: "gray.500" }}
                  flex={1}
          
                />
              
                  <Button
                    bg="#ee4d2d"
                    p={0}
                    w={"60px"}
                    color={"#ee4d2d"}
                    border={"2px solid #FFFFFFFF"}
                  >
                    <LuSearch size={18}  color="#FFFFFFFF" />
                  </Button>
              
              </Group>
              <Text fontSize="xs" color="white" > 
                Popular Searches: Shoes, Bags, Accessories
              </Text>
            </VStack>

            {/* Cart Icon */}
            <Link to="/cart">
              <FaShoppingCart size={26} color="#FFFFFF" />
            </Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
