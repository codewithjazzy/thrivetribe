import {
    Box,
    Button,
    chakra,
    Container,
    Flex,
    Heading,
    Image,
    Text,
    useColorModeValue,
    VStack
 } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { API_URL } from '../config/api';



const PagButton = ({ onClick, children, disabled, active }) => {
    return (
      <chakra.button
        mx={1}
        px={3}
        py={1}
        rounded="3xl"
        backgroundColor={active ? "#f3af59" : "#fcddb4"}
        color= {active ? "white" : "black"}
        cursor= {disabled ? "not-allowed" : "pointer"}
        opacity= {disabled && 0.6}
        onClick={() => {
          console.log("Button clicked");
          if (!disabled) {
            onClick();
          }
        }}
      >
        {children}
      </chakra.button>
    );
  };


export default function Providers(){
   const [allProfiles, setAllProfiles] = useState([]);
   const [currentPage, setCurrentPage] = useState(1); 
   const profilesPerPage = 6;

   useEffect(() => {
    const fetchProfiles = async () => {
        try {
            const response = await fetch(`${API_URL}/api/providers`);
            const data = await response.json();
            setAllProfiles(data.profiles);
        } catch (error) {
            console.error('error', error);
        }
    };

    fetchProfiles();
   }, []);


   // Calculate the total number of pages
   const totalPages = Math.ceil(allProfiles.length / profilesPerPage);


   // Calculate the current set of profiles to display
    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const displayedProfiles = allProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
    

    // Handle page change
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
   

    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
            <chakra.h1 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">
                Welcome to our "Find a Therapist" page!
            </chakra.h1>
            <Text fontSize="lg" mb={16} textAlign="center">
                We are thrilled to offer a diverse and rich database of compassionate therapists dedicated to supporting your mental health journey. Here, you have the freedom to search for a therapist who not only meets your specific therapeutic needs but also resonates with your personal experiences and cultural background.
                Whether you're seeking expertise in particular treatment types, looking for support in a language or dialect that feels like home, or aiming to find a therapist in your local area, our platform is designed to connect you with professionals who can provide the care you deserve.
                Our goal is to make this search as smooth and reassuring as possible, ensuring that you find a therapist who truly understands you and can guide you towards healing and growth. We're here to support you every step of the way in finding the right therapist to walk alongside you on your path to wellbeing.
            </Text>


            <Flex wrap="wrap" spacing={4} justifyContent="center">
                    {displayedProfiles.map(profile => (
                        <Box
                            key={profile._id}
                            maxW="270px"
                            w="full"
                            boxShadow="2xl"
                            rounded="md"
                            overflow="hidden"
                            m={4}
                            display="flex"
                            flexDirection="column"
                        >
                        <Box bg="#f3af59" h="100px" w="full" />
                        <Flex justify={"center"} mt={-14}>
                            <Image
                                borderRadius="full"
                                boxSize="150px"
                                src={profile.image.replace(
                                    "/upload/",
                                    "/upload/w_200,h_200,c_fill/"
                                )}
                                alt={`${profile.firstName} ${profile.lastName}`}
                            />
                        </Flex>
                            
                        <Box p={6} flex="1" display="flex" flexDirection="column">
                            <VStack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"md"} fontWeight="semibold">
                                    {profile.firstName} {profile.lastName}, {profile.title}
                                </Heading>
                                <Text fontSize="xs" mt={1} color={"gray.500"}>{profile.location.state}</Text>
                            </VStack>
                            
                            <Text fontSize={"sm"} mb={4}>
                                {profile.bio}
                            </Text>

                            <Box mt="auto">
                                <Button
                                    w={"full"}
                                    mt="auto"
                                    variant="outline"
                                    border= "2px"
                                    borderColor="#f3af59"
                                    _hover={{ background: '#fff3dd' }}
                                    as={Link}
                                    to={`/profile/${profile._id}`}
                                    state={{ therapist: profile }}
                                >
                                            View Full Profile
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Flex>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <Flex justifyContent="center" mt={8}>
                    <PagButton disabled={currentPage === 1} onClick={handlePrevious}>
                        Previous
                    </PagButton>
                    {[...Array(totalPages)].map((_, i) => (
                        <PagButton
                            key={i}
                            active={currentPage === i + 1}
                            onClick={() => handlePageClick(i + 1)}
                        >
                            {i + 1}
                        </PagButton>
                    ))}
                    <PagButton disabled={currentPage === totalPages} onClick={handleNext}>
                        Next
                    </PagButton>
                </Flex>
            )}
        </Container>
    );
}