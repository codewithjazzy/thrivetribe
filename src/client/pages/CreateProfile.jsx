import ProfileForm from '../components/ProfileForm';

export default function CreateProfile() {
  const handleRegistrationSubmit = async (formData) => {
    const response = await fetch("http://localhost:3000/api/member/register", {
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

