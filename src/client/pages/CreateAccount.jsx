import { useEffect, useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import { API_URL } from '../config/api';


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
    <main>
      <h2>Create Your Profile</h2>
      <ProfileForm formFields={formFields} onSubmit={handleRegistrationSubmit} />
    </main>
  );
};

