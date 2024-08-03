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
    
    useEffect(() => {
        const fetchMember = async () => {
           try {
                const response = await fetch(`${API_URL}/api/member/account`);
                const data = await response.json();
                console.log(data.member)
                setMember(data.member);
           } catch (error) {
                console.error('error', error)
           } 
        };
        
        fetchMember();
    }, []);

    console.log('Treatments', member.treatments)

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
                <h2>{member.firstName} {member.lastName}, {member.title}</h2>
                <span>{member.location.state}</span>
            </section>
            <section>
                <h4>Contact</h4>
                <span>Phone: {member.phone}</span>
                <span>Email: {member.email}</span>
                <span>Website: {member.website}</span>
            </section>
            <section>
                <h3>Professional Bio</h3>
                <p>{member.bio}</p>
            </section>
            <section>
                <h3>Personal Journey</h3>
                <p>{member.journey}</p>
            </section>
            <section>
                <h3>Cultural Heritage</h3>
                <p>{member.heritage}</p>
            </section>
            <section>
                <h3>Specialties and Expertise</h3>
                {member.expertise.map(skill => (
                    <li key={skill._id}>{skill.expertise}</li>
                ))}
            </section>
            <section>
                <h3>Treatment Approaches</h3>
                {member.treatments.map(treat => (
                    <li key={treat._id}>{treat.treatment}</li>
                ))}
            </section>
            <section>
                <h3>Spoken Languages</h3>
                {member.languages.map(language => (
                    <li key={language._id}>{language.language}</li>
                ))}
            </section>
            <section>
                <h3>Spoken Dialects</h3>
                {member.dialects.map(dialect => (
                    <li key={dialect._id}>{dialect.dialect}</li>
                ))}
            </section>
        </main>
    )
}