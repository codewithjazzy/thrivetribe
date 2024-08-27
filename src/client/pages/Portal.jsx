import { Container, chakra, Button, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Portal(){
    const navigate = useNavigate();

    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
      <VStack spacing={8} align="center">
        <chakra.h1 fontSize="4xl" fontWeight="bold" mb={6} textAlign="center">
          Therapist Portal
        </chakra.h1>

        <Text fontSize="lg" textAlign="center" mb={8}>
          Welcome to the ThriveTribe therapist portal, where you can craft a profile that speaks directly to the hearts and needs of clients seeking culturally attuned therapists. This platform allows you to detail your professional qualifications and personal influences—like the cultural heritage and languages that shape your practice. From uploading your professional photo to selecting your specialties and treatment modalities, each step you take enriches our community. Whether you’re driven by a specific philosophy or inspired by your journey, here’s where you can share your story and expertise. Start by logging in or creating a new account and join a network dedicated to making therapy accessible and relatable.
        </Text>

        <VStack spacing={4} align="center">
          <Button
            onClick={() => navigate("/login")}
            size="lg"
            colorScheme="teal"
            bg="#f7c687"
            color="#151f21"
            _hover={{ bg: "#e6b270" }}
            width="full"
            maxW="sm"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            size="lg"
            colorScheme="teal"
            bg="#f7c687"
            color="#151f21"
            _hover={{ bg: "#e6b270" }}
            width="full"
            maxW="sm"
          >
            Create an Account
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}
