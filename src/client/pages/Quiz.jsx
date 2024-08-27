import {
    Box,
    Button,
    chakra,
    Container,
    Flex,
    VStack,
    Text,
 } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from '../config/api';


export default function Quiz() {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch(`${API_URL}/api/quiz`);
                const data = await response.json();
                console.log(data)
                setQuizData(data);
            } catch (error) {
                console.error('error', error)
            }
        }
        fetchQuiz();
    }, []);

    const { stepData, isStartStep, isEndStep, aiResponse, currentStep } = quizData;

    const handleButtonClick = async (action, userInput) => {
        const url = action === "results" ? "api/quiz/results" : "api/quiz/progress"
        const body = userInput ? { userInput } : { action }
        console.log("Button Clicked", action, userInput)

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data Received", data)
                setQuizData(data)
            }
        } catch (error) {
            console.error('error', error)
        }
    };


    return (
        <Box>
            <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
                <VStack>
                    {!currentStep && !aiResponse && (
                        <Box>
                            <chakra.h1 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">Welcome to Your Personal Therapy Exploration Quiz!</chakra.h1>
                            <Text fontSize="lg" mb={8} textAlign="center">
                                Embarking on a journey toward mental wellness is a brave and transformative step. This quiz is designed to be your companion as you explore the therapeutic paths that might resonate with your unique experiences and emotional landscape. Our goal is to introduce you to various therapy styles through a series of thoughtful questions. By reflecting on your preferences, coping mechanisms, and emotional tendencies, we aim to provide you with insights that could guide you toward the most compatible therapeutic approaches.
                            </Text>
                            <Text fontSize="lg" mb={12} textAlign="center">
                                Ready to Begin? Dive in with an open heart and an open mind. Your journey to deeper self-understanding starts here. When you're ready, click the "Take Quiz" button, and let's explore the therapeutic possibilities together.
                            </Text>
                        </Box>
                    )}
                    <div>
                        {!currentStep && !aiResponse && (
                            <Button variant="outline" border= "2px" borderColor="#f3af59"  _hover={{ background: '#fff3dd' }} onClick={() => handleButtonClick("takeQuiz")}>Take The Quiz</Button>
                        )}
                    </div>
                </VStack>
            </Container>

            {(stepData || isStartStep || isEndStep || aiResponse) && (
                <Box p={{ base: 5, md: 10 }} my={8}>
                    <Box maxW="lg" mx="auto" px={{ base: 3 }} py={8} borderRadius="lg" boxShadow="lg" border="2px solid #ccc">
                        <VStack>
                            {/* InterMessage */}
                            {stepData && stepData.interMessage && (
                            <Flex justifyContent="flex-start" alignItems="flex-start" width="100%" >
                                <Box bg="#cedae0" p={2} borderRadius="2xl">
                                <Text fontSize="sm" wordBreak="break-word">{stepData.interMessage}</Text>
                                </Box>
                            </Flex>
                            )}

                            {/* Start Quiz Button */}
                            {isStartStep && (
                            <Flex justify="center" mb={4}>
                                <Button colorScheme="yellow" bg="#f7c687" onClick={() => handleButtonClick("start")}>
                                <Text fontSize="sm">Start Quiz</Text>
                                </Button>
                            </Flex>
                            )}

                            {/* Question and Answers */}
                            {stepData && stepData.question && (
                            <Box>
                                <Flex justify="flex-start" mb={8}>
                                <Box bg="#cedae0" p={2} borderRadius="3xl">
                                    <Text fontSize="sm" wordBreak="break-word">{stepData.question}</Text>
                                </Box>
                                </Flex>
                                <Flex direction="column" align="flex-end" gap={3} >
                                {stepData.answers.map(answer => (
                                    <Button
                                        key={answer.id}
                                        bg="#a8b596"
                                        size="sm"
                                        py={4}
                                        px={1}
                                        borderRadius={16}
                                        fontWeight="normal"
                                        _hover={{
                                            background: '#d7e0cd',
                                        }}
                                        style={{
                                            whiteSpace: "normal",
                                            wordWrap: "break-word",
                                        }} 
                                        onClick={() => handleButtonClick(null, answer.text)}
                                    >
                                        {answer.text}
                                    </Button>
                                ))}
                                </Flex>
                            </Box>
                            )}

                            {/* Results Button */}
                            {isEndStep && !aiResponse && (
                            <Flex justify="center" mt={4}>
                                <Button bg="#f7c687" _hover={{ background: '#fff3dd' }} borderRadius="lg" onClick={() => handleButtonClick("results")}>
                                <Text fontSize="sm" wordBreak="break-word">See Your Results</Text>
                                </Button>
                            </Flex>
                            )}

                            {/* AI Response */}
                            {aiResponse && (
                            <Flex direction="column" align="center" mt={4}>
                                <Text fontWeight="bold" fontSize="md" wordBreak="break-word">Here's your result:</Text>
                                <Text fontSize="sm">{aiResponse}</Text>
                                <Text fontSize="sm" pt={3}>
                                    You can read more about your results on the <Text as={Link} to="/types" color="blue.400" fontWeight="semibold">Types of Therapy</Text> page or you can retake this quiz by clicking restart below.</Text>
                            </Flex>
                            )}

                            {/* Restart Button */}
                            {((currentStep !== "start" && currentStep !== null) || aiResponse) && (
                            <Flex justify="center" mt={8}>
                                <Button
                                    bg="#ca644e"
                                    borderRadius="md"
                                    _hover={{
                                        background: '#f2c4c1',
                                    }}
                                    onClick={() => handleButtonClick("restart")}>
                                <Text fontSize="sm" wordBreak="break-word">Restart Quiz</Text>
                                </Button>
                            </Flex>
                            )}
                        </VStack>
                    </Box>
                </Box>
            )}
        </Box>
    )
}