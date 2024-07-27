import { useNavigate } from "react-router-dom"

export default function Portal(){
    const navigate = useNavigate();

    return (
        <main>
            <h2>Therapist Portal</h2>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Create an Account</button>

            <p>Welcome to the ThriveTribe therapist portal, where you can craft a profile that speaks directly to the hearts and needs of clients seeking culturally attuned therapists. This platform allows you to detail your professional qualifications and personal influences—like the cultural heritage and languages that shape your practice. From uploading your professional photo to selecting your specialties and treatment modalities, each step you take enriches our community. Whether you’re driven by a specific philosophy or inspired by your journey, here’s where you can share your story and expertise. Start by logging in or creating a new account and join a network dedicated to making therapy accessible and relatable.</p>

            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Create an Account</button>        
        </main>
    )
}
