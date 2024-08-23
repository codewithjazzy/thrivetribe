import {
    AbsoluteCenter,
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import { FcGoogle } from 'react-icons/fc'
  import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



export default function SignUp(){
    const navigate = useNavigate();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    const handleGoogleSignup = () => {
        window.location.href = "/auth/google";
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, confirmPassword })
        });

        if (response.ok) {
            navigate("/createAccount")
        } else {
            console.log("Signup failed");
        }
    };


    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={10} mx={'auto'} w={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Join The Tribe</Heading>
          <Text align={'center'} fontSize={'lg'} color={'gray.600'}>
            Start creating your account
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            <Stack spacing={4}>
            <form onSubmit={handleSubmit}>           
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input 
                        type="email" 
                        name="email"
                        placeholder='Enter email'
                    />
                </FormControl>
                <FormControl id="password" isRequired pt={2}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            name="password"
                        />
                        <InputRightElement width='3rem'>
                            <Button h='2rem' size='sm' onClick={handleClick}>
                            {show ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl id="confirmPassword" isRequired pt={2}>
                    <FormLabel> Confirm Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirm password'
                            name="confirmPassword"
                        />
                        <InputRightElement width='3rem'>
                            <Button h='2rem' size='sm' onClick={handleClick}>
                            {show ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Stack spacing={8}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                    </Stack>
                    <Button 
                        type="submit"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                    >
                        Sign in
                    </Button>
                </Stack>
                </form>
                <Box position='relative' padding='4'>
                    <Divider />
                    <AbsoluteCenter bg='white' px='4'>
                    OR
                    </AbsoluteCenter>
                </Box>
                <Button
                    onClick={handleGoogleSignup}
                    w={'full'}
                    mb='4'
                    maxW={'md'}
                    variant={'outline'}
                    leftIcon={<FcGoogle />}>
                        <Text>Signup with Google</Text>
                </Button>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                <Text>Already a member? <Link href='/login' color={'blue.400'}>Login</Link></Text>
                </Stack>
            </Stack>
        </Box>
      </Stack>
    </Flex>
    );
}
        // <div>
        //     <h2>Signup</h2>
        //     <form onSubmit={handleSubmit}>
        //         <FormInput type="email" id="emailInput" name="email" label="Email" required/>
        //         <FormInput type="password" id="passwordInput" name="password" label="Password" required/>
        //         <FormInput type="confirmPassword" id="confirmPassword" name="confirmPassword" label="Confirm Password" required/>
                
        //         <button type="submit">Create Account</button>
        //     </form>

        //     <button onClick={handleGoogleSignup}>Signup with Google</button>
        // </div>