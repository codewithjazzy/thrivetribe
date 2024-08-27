import { useEffect, useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import { API_URL } from '../config/api';
import {
  Box, 
  Container,
  Heading,
} from '@chakra-ui/react'


export default function CreateAccount() {
  const [formFields, setFormFields] = useState({
    expertise: [],
    treatments: [],
    languages: [],
    dialects: [],
    locations: [],
  });

  useEffect(() => {
    const fetchFormFields = async () => {
      try {
        const response = await fetch(`${API_URL}/api/member/createAccount`);
        const data = await response.json();
        setFormFields(data.response);
      } catch (error) {
        console.error('Error fetching form fields', error);
      }
    };

    fetchFormFields();
  }, []);


  const handleRegistrationSubmit = async (formData) => {
    const response = await fetch(`${API_URL}/api/member/createAccount`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">Create Your Profile</Heading>
      <Box borderWidth={1} borderRadius="lg" p={8} borderColor="#f3af59">
        <ProfileForm formFields={formFields} onSubmit={handleRegistrationSubmit} />
      </Box>
    </Container>
  );
};

