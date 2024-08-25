import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
} from '@chakra-ui/react';

export default function About(){
    const Content = ({ children, ...props }) => {
        return (
          <Text
            fontSize="md"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
            {...props}
          >
            {children}
          </Text>
        );
      };


  return (
    <Container maxW="5xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction="column" justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" mb={4}>
            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="center">
                    Welcome to ThriveTribe
            </chakra.h1>
            <Content textAlign="center">
                    At ThriveTribe, we believe that mental wellness is a journey, not a destination. We are dedicated to creating a supportive community that empowers Black women, immigrants, and the children of immigrants to embrace their mental health with courage, understanding, and grace. Our mission is to connect you with therapists who not only share your racial identity but also understand the nuances of your cultural heritage, ensuring a therapy experience that truly resonates with your individual story.
            </Content>
        </Stack>
        <Box mx={{ lg: 8 }} pos="relative">
          <Image
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem' }}
            maxH="20rem"
            objectFit="cover"
            src={`/src/client/assets/ttHero.png`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <Box>
            <chakra.h3 fontSize="lg" lineHeight={1} fontWeight="bold" textAlign="left" mt={4}>
            Our Story
            </chakra.h3>
            <Content mt={2} style={{ textIndent: 16 }}>
                ThriveTribe was born from a desire to bridge the gap between Black women and mental health resources that affirm their identity and experiences. Recognizing the unique challenges faced by Black women, immigrants, and their children, we set out to create a platform where finding a therapist who truly understands feels seamless. Our therapists are not just professionals in their field; they are empathetic individuals who respect and honor your cultural background, language, and heritage.
            </Content>
            </Box>
        </Stack>
        <Stack direction="column" spacing={6} justifyContent="center">
            <Box>
                <chakra.h3 fontSize="lg" lineHeight={1} fontWeight="bold" textAlign="left" mt={4}>
                    Why Thrive Tribe?
                </chakra.h3>
                <Content mt={2} style={{ textIndent: 16 }}>
                    We know that the path to mental wellness is deeply personal and can be influenced by a myriad of factors including culture, language, and familial experiences. ThriveTribe is more than just a directory; it's a place where you can find therapists who are attuned to the intricacies of your identity. Whether it's navigating the complexities of immigration, dealing with the nuances of cultural identity, or simply finding a space where you feel seen and heard, ThriveTribe is here for you.
                </Content>
                <chakra.h3 fontSize="lg" lineHeight={1} fontWeight="bold" textAlign="left" mt={4}>
                    Our Commitment
                </chakra.h3>
                <Content mt={2} style={{ textIndent: 16 }}>
                    ThriveTribe is committed to inclusivity, understanding, and respect. We continually strive to expand our network of therapists to include a wide range of languages, dialects, and specialized cultural competencies. From Amharic to Zulu, from addressing generational trauma to fostering personal growth, our goal is to ensure that every member of our community has access to mental health support that is as diverse and vibrant as they are.
                </Content>
                <chakra.h3 fontSize="lg" lineHeight={1} fontWeight="bold" textAlign="left" mt={4}>
                    Join Our Tribe
                </chakra.h3>
                <Content mt={2} style={{ textIndent: 16 }}>
                    Whether you're taking your first step towards therapy or looking to deepen your existing mental wellness practices, ThriveTribe welcomes you with open arms. Explore our platform, connect with a therapist who gets you, and start your journey towards thriving. Because here at ThriveTribe, your mental wellness journey is a shared adventure, and you're never alone.
                </Content>
            </Box>
        </Stack>
          <Link href="/portal" fontSize="sm" color="blue.400">
            Provider? Add yourself to our Therapist Database →
          </Link>
      </Stack>
    </Container>
  );
};

