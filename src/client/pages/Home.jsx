import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <Box
            w="full"
            minH="100vh"
            bgImage="url('/assets/homeLogo.png')"
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
        >
            <Flex
                align="center"
                justify="center"
                w="full"
                minH="100vh"
                bg="blackAlpha.700"
                px={4}
                py={8}
            >
                <Container maxW="5xl">
                    <VStack spacing={8} align="stretch">
                        <VStack spacing={2}>
                            <Heading
                                as="h1"
                                size={{ base: "2xl", md: "3xl" }}
                                fontWeight="semibold"
                                color="white"
                                textTransform="uppercase"
                                textAlign="center"
                            >
                                ThriveTribe
                            </Heading>
                            <Heading
                                as="h3"
                                color="white"
                                size={{ base: "lg", md: "xl" }}
                                fontWeight="semibold"
                                textAlign="center"
                            >
                                Your Path to Culturally Attuned Therapy
                            </Heading>
                        </VStack>
                        <Text color="white" fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
                            ThriveTribe is your compass in the quest for mental wellness, specially designed for Black women, including immigrants and children of immigrants. Here, you'll find a community that values your unique journey, connecting you with therapists who not only understand your cultural background but also speak your language, literally and metaphorically. Begin with our personalized quiz, tailored to guide you to therapy options that resonate with your story.
                        </Text>
                        <Text color="white" fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
                            At ThriveTribe, your cultural identity is not just acknowledged—it's celebrated as a cornerstone of your healing journey.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
                            <Link to="/quiz">
                                <Button
                                    border="2px"
                                    borderColor="#f3af59"
                                    _hover={{ background: '#fff3dd' }}
                                    textTransform="uppercase"
                                    w="full"
                                >
                                    Take Quiz
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    border="2px"
                                    borderColor="#f3af59"
                                    _hover={{ background: '#fff3dd' }}
                                    textTransform="uppercase"
                                    w="full"
                                >
                                    About Us
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                </Container>
            </Flex>
        </Box>
    )
}