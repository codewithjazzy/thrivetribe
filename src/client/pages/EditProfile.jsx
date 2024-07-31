import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";


export default function EditProfile() {
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch("http://localhost:3000/api/member/profile");
            const data = await response.json();
            setInitialData(data.member);
        };

        fetchProfile();
    }, []);

    const handleEditSubmit = async (formData) => {
        const response = await fetch("http://localhost:3000/api/member/editProfile", {
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