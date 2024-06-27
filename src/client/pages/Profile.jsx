import { useLocation } from "react-router-dom"


export default function Profile() {
    const { state } = useLocation();
    const therapist = state.therapist

    return (
        <main>
            <section>
                <img
                    src={therapist.image.replace('/upload/', '/upload/w_200,h_200,c_fill/')}
                />
                <h2>{therapist.firstName} {therapist.lastName}, {therapist.title}</h2>
                <span>{therapist.location.state}</span>
            </section>
            <section>
                <h4>Contact</h4>
                <span>Phone: {therapist.phone}</span>
                <span>Email: {therapist.email}</span>
                <span>Website: {therapist.website}</span>
            </section>
            <section>
                <h3>Professional Bio</h3>
                <p>{therapist.bio}</p>
            </section>
            <section>
                <h3>Personal Journey</h3>
                <p>{therapist.journey}</p>
            </section>
            <section>
                <h3>Cultural Heritage</h3>
                <p>{therapist.heritage}</p>
            </section>
            <section>
                <h3>Specialties and Expertise</h3>
                {therapist.expertise.map(skill => (
                    <li key={skill._id}>{skill.expertise}</li>
                ))}
            </section>
            <section>
                <h3>Treatment Approaches</h3>
                {therapist.treatments.map(treat => (
                    <li key={treat._id}>{treat.treatment}</li>
                ))}
            </section>
            <section>
                <h3>Spoken Languages</h3>
                {therapist.languages.map(language => (
                    <li key={language._id}>{language.language}</li>
                ))}
            </section>
            <section>
                <h3>Spoken Dialects</h3>
                {therapist.dialects.map(dialect => (
                    <li key={dialect._id}>{dialect.dialect}</li>
                ))}
            </section>
        </main>
    )
}