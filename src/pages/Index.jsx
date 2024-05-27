import { Box, Container, Flex, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">PhotoShare</Heading>
        <Flex>
          <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
          <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" color="white" />
          <IconButton aria-label="Upload" icon={<FaUpload />} variant="ghost" color="white" />
        </Flex>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading size="md">Feed</Heading>
            <VStack spacing={4} mt={4}>
              <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                <Image src="https://via.placeholder.com/600" alt="Sample Photo" borderRadius="md" />
                <Text mt={2}>Sample Photo Description</Text>
              </Box>
              <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                <Image src="https://via.placeholder.com/600" alt="Sample Photo" borderRadius="md" />
                <Text mt={2}>Sample Photo Description</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;