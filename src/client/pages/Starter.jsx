import {
    Box,
    chakra,
    Container,
    Divider,
    Flex,
    Heading,
    Icon,
    List,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
 } from "@chakra-ui/react"
 import { GiProgression, GiOppositeHearts, GiLotus, GiRoad, GiHeartBottle, GiMagnifyingGlass, GiConversation, GiTalk, GiBookPile, GiCalendar, GiStairsGoal, GiFiles, GiScrollQuill, GiHeartBattery, GiNotebook, GiOpenPalm, GiHealthDecrease, GiWisdom } from 'react-icons/gi';

export default function Starter(){
    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
            <chakra.h1 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">Therapy 101: Your Guide to Getting Started</chakra.h1>
            <Text fontSize="lg" mb={16} textAlign="center">
                Embarking on a therapeutic journey can be both exciting and daunting. This guide aims to demystify the process, providing you with essential information to take those first steps towards mental wellness and personal growth.
                Whether you're considering therapy for the first time, returning after a break, or simply curious about the process, you'll find valuable insights here. We'll explore who can benefit from therapy, how to find the right therapist, and what to expect in your initial sessions.
                Remember, seeking therapy is a courageous act of self-care. It's an investment in your mental health, relationships, and overall well-being.
                    Let's begin this journey together, one step at a time.
            </Text>

            <Container maxW="3xl" mb={16}>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" my={2}>Who Should See a Therapist & Why</chakra.h3>
                <Text fontSize="md" mb={4}>
                    Therapy is a valuable resource for anyone seeking to improve their mental health and overall well-being. It's not limited to those experiencing severe mental health issues or major life crises. Here are some reasons why someone might consider therapy:
                </Text>
                <List fontSize="sm">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiProgression} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Personal growth:</chakra.span> Therapy can help you gain self-awareness, develop better coping skills, and work towards your personal goals.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiOppositeHearts} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Relationship issues:</chakra.span> Whether it's family, romantic, or professional relationships, therapy can help improve communication and resolve conflicts.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiLotus} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Stress management:</chakra.span> Learn effective techniques to handle everyday stressors and prevent burnout.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiHealthDecrease} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Mental health concerns:</chakra.span> Address symptoms of anxiety, depression, or other mental health conditions.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiRoad} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Life transitions:</chakra.span> Navigate major changes such as career shifts, divorce, or loss of a loved one.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiHeartBottle} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Trauma processing:</chakra.span> Work through past traumatic experiences in a safe, supportive environment.
                            </Box>
                        </ListItem>
                    </SimpleGrid>
                </List>
                <Text fontSize="md" mb={4}>
                    Remember, seeking therapy is a sign of strength, not weakness. It shows a commitment to self-improvement and a willingness to face challenges head-on.
                </Text>
            </Container>

            <Container maxW="3xl" mb={16}>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" my={2}>Finding the Right Therapist: Interviewing Your Therapist</chakra.h3>
                <Text fontSize="md" mb={4}>
                    Finding a therapist who's a good fit is crucial for effective therapy. Here's how to approach the process:
                </Text>
                <List fontSize="sm">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                            <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                                <Icon as={GiMagnifyingGlass} w={8} h={8} color="#f7c687" />
                                <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                                <Box>
                                    <chakra.span fontWeight="semibold">Research:</chakra.span> Look for therapists specializing in your areas of concern. Check their credentials and read reviews if available.
                                </Box>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                                <Icon as={GiConversation} w={8} h={8} color="#f7c687" />
                                <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                                <Box>
                                    <chakra.span fontWeight="semibold">Initial consultation:</chakra.span> Many therapists offer a brief initial consultation. Use this time to ask questions and gauge your comfort level.
                                </Box>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                                <Icon as={GiTalk} w={8} h={8} color="#f7c687" />
                                <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                                <Box>
                                    <chakra.span fontWeight="semibold">Ask about their approach:</chakra.span> Inquire about their therapeutic methods and how they might apply to your situation.
                                </Box>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                                <Icon as={GiBookPile} w={8} h={8} color="#f7c687" />
                                <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                                <Box>
                                    <chakra.span fontWeight="semibold">Discuss experience:</chakra.span> Ask about their experience with issues similar to yours.
                                </Box>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                                <Icon as={GiWisdom} w={8} h={8} color="#f7c687" />
                                <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                                <Box>
                                    <chakra.span fontWeight="semibold">Trust your instincts:</chakra.span> Pay attention to how you feel during the conversation. Do you feel heard and respected?
                                </Box>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                                <Icon as={GiCalendar} w={8} h={8} color="#f7c687" />
                                <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                                <Box>
                                    <chakra.span fontWeight="semibold">Logistics:</chakra.span> Discuss practical matters like session frequency, duration, and fees.
                                </Box>
                            </ListItem>
                    </SimpleGrid>
                </List>
                <Text fontSize="md" mb={4}>
                    Remember, it's okay to meet with several therapists before making a decision. The right therapeutic relationship is key to successful therapy.
                </Text>
            </Container>

            <Container maxW="3xl" mb={16}>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" my={2}>Preparing for Your First Therapy Session</chakra.h3>
                <Text fontSize="md" mb={4}>
                    Your first therapy session sets the foundation for your therapeutic journey. Here's how to prepare:
                </Text>
                <List fontSize="sm">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiStairsGoal} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Reflect on your goals:</chakra.span> Consider what you hope to achieve through therapy. Are there specific issues you want to address or general areas of life you want to improve?
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiFiles} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Gather relevant information:</chakra.span> If you have any medical history or past therapy experiences that might be relevant, make note of them.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiScrollQuill} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Prepare for paperwork:</chakra.span> You may need to fill out forms about your history and current situation. Arrive early if this needs to be done in-office.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiHeartBattery} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Consider your feelings:</chakra.span> It's normal to feel nervous. Remember that your therapist is there to help, not judge.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiOpenPalm} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Be open to the process:</chakra.span> Therapy can sometimes be challenging, but approach it with an open mind and a willingness to engage in self-reflection.
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
                            <Icon as={GiNotebook} w={8} h={8} color="#f7c687" />
                            <Divider orientation="vertical" mx={2} borderColor="gray.300" />
                            <Box>
                                <chakra.span fontWeight="semibold">Bring questions:</chakra.span> If you have any concerns or queries about the therapy process, write them down to ask during your session.
                            </Box>
                        </ListItem>
                    </SimpleGrid>
                </List>
                <Text>
                    By preparing for your first session, you can help ensure a productive start to your therapeutic journey. Remember, therapy is a collaborative process, and your active participation will contribute significantly to its success.
                </Text>
            </Container>
        </Container>
    )
}