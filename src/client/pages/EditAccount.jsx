import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import { API_URL } from '../config/api';


export default function EditAccount() {
    const [initialData, setInitialData] = useState(null);
    const [formFields, setFormFields] = useState({
        expertise: [],
        treatments: [],
        languages: [],
        dialects: [],
        locations: [],
      });
      

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileResponse = await fetch(`${API_URL}/api/member/account`);
                const profileData = await profileResponse.json();
                console.log(profileData.member)
                setInitialData(profileData.member);
        
                const fieldsResponse = await fetch(`${API_URL}/api/member/createAccount`);
                const fieldsData = await fieldsResponse.json();
                setFormFields(fieldsData.response);
              } catch (error) {
                console.error('Error fetching profile data', error);
              }
            };

        fetchProfile();
    }, []);


    const handleEditSubmit = async (formData, data) => {
        const { selectedExpertise, selectedTreatments, selectedLanguages, selectedDialects } = data;
 
                // Log filtered values
                    console.log("Filtered Expertise:", selectedExpertise);
                    console.log("Filtered Treatments:", selectedTreatments);
                    console.log("Filtered Languages:", selectedLanguages);
                    console.log("Filtered Dialects:", selectedDialects);
    
        const response = await fetch(`${API_URL}/api/member/editAccount`, {
            method: "PUT",
            body: formData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              }
        });
    
        const result = await response.json();
        console.log(result);
    };

    return (
        <main>
            <h2>Edit Your Profile</h2>
            {initialData && <ProfileForm initialData={initialData} formFields={formFields} onSubmit={handleEditSubmit} />}
        </main>
    );
}