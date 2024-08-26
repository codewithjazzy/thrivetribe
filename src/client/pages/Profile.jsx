import {
    Box,
    Container,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
    VStack,
    Link,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
import { useLocation } from "react-router-dom"


export default function Profile() {
    const { state } = useLocation();
    const therapist = state.therapist

    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        mb={8}
      >
        {/* Profile Image */}
        <Box mr={{ md: 8 }}>
          <Image
            borderRadius="full"
            boxSize="250px"
            src={therapist.image.replace('/upload/', '/upload/w_200,h_200,c_fill/')}
            alt={`${therapist.firstName} ${therapist.lastName}`}
          />
        </Box>

        {/* Basic Information */}
        <VStack align={{ base: "center", md: "start" }} ml={{ md: 24 }} mt={{ base: 4, md: 12 }} spacing={4}>
          <Heading fontSize="2xl">
            {therapist.firstName} {therapist.lastName}, {therapist.title}
          </Heading>
          <Text color="gray.500">{therapist.location.state}</Text>
          <VStack align="start" spacing={1} ml={{ base: 0, md: 0 }}>
            {therapist.phone && <Text>Phone: {therapist.phone}</Text>}
            {therapist.email && (
              <Text>
                Email: <Link href={`mailto:${therapist.email}`} color="blue.500">{therapist.email}</Link>
              </Text>
            )}
            {therapist.website && (
              <Text>
                Website: <Link href={therapist.website} isExternal color="blue.500">{therapist.website}</Link>
              </Text>
            )}
          </VStack>
        </VStack>
      </Flex>

      {/* Yellow Divider */}
      <Divider borderColor="#f7c687" mb={8} />

      {/* Bio and Additional Information */}
      <Box>
        <Heading fontSize="xl" mb={4}>Professional Bio</Heading>
        <Text mb={8}>{therapist.bio}</Text>

        <Heading fontSize="xl" mb={4}>Personal Journey</Heading>
        <Text mb={8}>{therapist.journey}</Text>

        <Heading fontSize="xl" mb={4}>Cultural Heritage</Heading>
        <Text mb={8}>{therapist.heritage}</Text>

        {/* Accordion Sections for Arrays */}
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Specialties and Expertise
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {therapist.expertise.length ? (
                <ul>
                  {therapist.expertise.map(skill => (
                    <li key={skill._id}>{skill.expertise}</li>
                  ))}
                </ul>
              ) : (
                <Text>No expertise listed.</Text>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Treatment Approaches
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {therapist.treatments.length ? (
                <ul>
                  {therapist.treatments.map(treat => (
                    <li key={treat._id}>{treat.treatment}</li>
                  ))}
                </ul>
              ) : (
                <Text>No treatments listed.</Text>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Spoken Languages
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {therapist.languages.length ? (
                <ul>
                  {therapist.languages.map(language => (
                    <li key={language._id}>{language.language}</li>
                  ))}
                </ul>
              ) : (
                <Text>No languages listed.</Text>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Spoken Dialects
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {therapist.dialects.length ? (
                <ul>
                  {therapist.dialects.map(dialect => (
                    <li key={dialect._id}>{dialect.dialect}</li>
                  ))}
                </ul>
              ) : (
                <Text>No dialects listed.</Text>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
    )
}