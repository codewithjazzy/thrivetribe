import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Providers(){
   const [allProfiles, setAllProfiles] = useState([])

   useEffect(() => {
    const fetchProfiles = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/providers");
            const data = await res.json();
            setAllProfiles(data.profiles);
        } catch (error) {
            console.error('error', error);
        }
    };

    fetchProfiles();
   }, []);
   

    return (
        <main>
            <section>
                <h2 className="">Welcome to our "Find a Therapist" page!</h2>
                <p className="">We are thrilled to offer a diverse and rich database of compassionate therapists dedicated to supporting your mental health journey. Here, you have the freedom to search for a therapist who not only meets your specific therapeutic needs but also resonates with your personal experiences and cultural background.</p>
                <p className="">Whether you're seeking expertise in particular treatment types, looking for support in a language or dialect that feels like home, or aiming to find a therapist in your local area, our platform is designed to connect you with professionals who can provide the care you deserve.</p>
                <p className="">Our goal is to make this search as smooth and reassuring as possible, ensuring that you find a therapist who truly understands you and can guide you towards healing and growth. We're here to support you every step of the way in finding the right therapist to walk alongside you on your path to wellbeing.</p>
            </section>

            <section>
                <h2>Therapists</h2>
                <div>
                    {allProfiles.map(profile => (
                        <div key={profile._id}>
                            <section>
                                <img 
                                    src={profile.image.replace('/upload/', '/upload/w_200,h_200,c_fill/')}
                                    alt={`${profile.firstName} ${profile.lastName}`}
                                />
                                <div>
                                    <h3>{profile.firstName} {profile.lastName}, {profile.title}</h3>
                                    <span>{profile.location.state}</span>
                                </div>
                                <div>
                                    <p>{profile.bio}</p>
                                </div>
                                <div>
                                    <Link 
                                        to={`/profile/${profile._id}`}
                                        state={{ therapist: profile }}
                                    >
                                        View Full Profile
                                    </Link>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}