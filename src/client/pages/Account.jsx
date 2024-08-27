import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api"

export default function Account(){
    const navigate = useNavigate();
    const [member, setMember] = useState({
        image: '',
        firstName: '',
        lastName: '',
        title: '',
        location: { state: '' },
        phone: '',
        email: '',
        website: '',
        bio: '',
        journey: '',
        heritage: '',
        expertise: [],
        treatments: [],
        languages: [],
        dialects: []
    });
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMember = async () => {
           try {
                const response = await fetch(`${API_URL}/api/member/account`);
                const data = await response.json();
                setMember(data.member);
                setIsLoading(false);
           } catch (error) {
                console.error('error', error)
                setIsLoading(false);
           }
        };
        
        fetchMember();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <section>
                <p>Welcome to your account page. If you'd like to update your information, click the edit button below.</p>
                <button onClick={() => navigate("/editAccount")}>Edit Account</button>
            </section>
            <section>
                {member.image && (
                    <img
                        src={member.image.replace('/upload/', '/upload/w_200,h_200,c_fill/')}
                        alt="Profile"
                    />
                )}
                <h2>{member.firstName} {member.lastName}{member.title && `, ${member.title}`}</h2>
                {member.location && <span>{member.location.state}</span>}
            </section>
            <section>
                <h4>Contact</h4>
                {member.phone && <span>Phone: {member.phone}</span>}
                {member.email && <span>Email: {member.email}</span>}
                {member.website && <span>Website: {member.website}</span>}
            </section>
            {member.bio && (
                <section>
                    <h3>Professional Bio</h3>
                    <p>{member.bio}</p>
                </section>
            )}
            {member.journey && (
                <section>
                    <h3>Personal Journey</h3>
                    <p>{member.journey}</p>
                </section>
            )}
            {member.heritage && (
                <section>
                    <h3>Cultural Heritage</h3>
                    <p>{member.heritage}</p>
                </section>
            )}
            {member.expertise && member.expertise.length > 0 && (
                <section>
                    <h3>Specialties and Expertise</h3>
                    <ul>
                        {member.expertise.map(skill => (
                            <li key={skill._id}>{skill.expertise}</li>
                        ))}
                    </ul>
                </section>
            )}
            {member.treatments && member.treatments.length > 0 && (
                <section>
                    <h3>Treatment Approaches</h3>
                    <ul>
                        {member.treatments.map(treat => (
                            <li key={treat._id}>{treat.treatment}</li>
                        ))}
                    </ul>
                </section>
            )}
            {member.languages && member.languages.length > 0 && (
                <section>
                    <h3>Spoken Languages</h3>
                    <ul>
                        {member.languages.map(language => (
                            <li key={language._id}>{language.language}</li>
                        ))}
                    </ul>
                </section>
            )}
            {member.dialects && member.dialects.length > 0 && (
                <section>
                    <h3>Spoken Dialects</h3>
                    <ul>
                        {member.dialects.map(dialect => (
                            <li key={dialect._id}>{dialect.dialect}</li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    )
}