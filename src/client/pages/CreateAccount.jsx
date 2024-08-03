import ProfileForm from '../components/ProfileForm';
import { API_URL } from '../config/api';


export default function CreateAccount() {
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
      <ProfileForm onSubmit={handleRegistrationSubmit} />
    </main>
  );
};

