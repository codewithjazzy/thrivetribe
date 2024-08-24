import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
 } from "@chakra-ui/react"


export default function Home(){
    return (
        <Box
            w="full"
            h="100vh"
            bgImage="url('/src/client/assets/ttHero.png')"
            bgPosition="center"
            bgSize="cover"
        >
            <Flex
            align="center"        
            justify="center"
            boxSize="full"
            bg="blackAlpha.700"
            >
            <Stack textAlign="center" alignItems="center" spacing={8}>
                <Box>
                    <Heading as="h1"
                        size="3xl"
                        fontWeight="semibold"
                        color="white"
                        textTransform="uppercase"
                    >
                        Welcome to ThriveTribe
                    </Heading>
                    <Heading as="h3"
                        color="white"
                        size="xl"
                        fontWeight="semibold"
                    >
                        Your Path to Culturally Attuned Therapy
                    </Heading>
                </Box>
                <Container color="white">
                    <Text fontSize='lg' >
                        ThriveTribe is your compass in the quest for mental wellness, specially designed for Black women, including immigrants and children of immigrants. Here, you'll find a community that values your unique journey, connecting you with therapists who not only understand your cultural background but also speak your language, literally and metaphorically. Begin with our personalized quiz, tailored to guide you to therapy options that resonate with your story.
                    </Text>
                    <Text fontSize='lg'>
                        At ThriveTribe, your cultural identity is not just acknowledged—it's celebrated as a cornerstone of your healing journey.
                    </Text>
                </Container>
                <Stack direction={['column', 'row']}>
                <Button
                    textTransform="uppercase"
                    w={28}
                    >
                Take Quiz
                </Button>
                <Button
                    textTransform="uppercase"
                    w={28}
                    >
                About Us
                </Button>
                    </Stack>
            </Stack>
            </Flex>
        </Box>
    )
}

{/* <main>
    <div>
        <h1>Welcome to ThriveTribe, Your Path to Culturally Attuned Therapy</h1>
        <p>ThriveTribe is your compass in the quest for mental wellness, specially designed for Black women, including immigrants and children of immigrants. Here, you'll find a community that values your unique journey, connecting you with therapists who not only understand your cultural background but also speak your language, literally and metaphorically. Begin with our personalized quiz, tailored to guide you to therapy options that resonate with your story.</p>
        <p>At ThriveTribe, your cultural identity is not just acknowledged—it's celebrated as a cornerstone of your healing journey.</p>
    </div>
</main> */}
