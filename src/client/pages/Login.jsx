import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.user.needsProfileCompletion) {
                navigate("/createAccount")
            } else {
                navigate("/account")
            }
        } else {
            console.log("Login failed");
        }
    };
    
    
    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    }
    
    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={10} mx={'auto'} w={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Welcome Back</Heading>
          <Text align={'center'} fontSize={'lg'} color={'gray.600'}>
            Sign in to view and edit your account
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
                    <Input type="email" name="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" />
                </FormControl>
                <Stack spacing={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
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
                    onClick={handleGoogleLogin}
                    w={'full'}
                    mb='4'
                    maxW={'md'}
                    variant={'outline'}
                    leftIcon={<FcGoogle />}>
                        <Text>Sign in with Google</Text>
                </Button>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                <Text>Don't have an account yet? <Link href='/signup' color={'blue.400'}>Sign Up</Link></Text>
                </Stack>
            </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}