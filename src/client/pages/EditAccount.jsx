import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import { API_URL } from '../config/api';


export default function EditAccount() {
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${API_URL}/api/member/account`);
                const data = await response.json();
                console.log('Fetched member data', data.member)
                setInitialData(data.member);
            } catch (error) {
            console.error('Error fetching profile data', error)
            }
        };

        fetchProfile();
    }, []);


    const handleEditSubmit = async (formData) => {
        const response = await fetch(`${API_URL}/api/member/editAccount`, {
            method: "PUT",
            body: formData,
        });

        const result = await response.json();
        console.log(result)
    };

    return (
        <main>
            <h2>Edit Your Profile</h2>
            {initialData && <ProfileForm initialData={initialData} onSubmit={handleEditSubmit} />}
        </main>
    );
}