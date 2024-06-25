import { useState } from "react"


export default function Profile() {
    const [therapist] = useState()

    return (
        <main>
            <section>
                <img
                    src="therapist.image.replace('/upload/', '/upload/w_300,h_300,c_fill/')" alt={`${therapist.firstName}'s profile picture`}
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
                    <li>{skill.expertise}</li>
                ))}
            </section>
            <section>
                <h3>Treatment Approaches</h3>
                {therapist.treatments.map(treat => (
                    <li>{treat.treatment}</li>
                ))}
            </section>
            <section>
                <h3>Spoken Languages</h3>
                {therapist.languages.map(language => (
                    <li>{language.language}</li>
                ))}
            </section>
            <section>
                <h3>Spoken Dialects</h3>
                {therapist.dialects.map(dialect => (
                    <li>{dialect.dialect}</li>
                ))}
            </section>
        </main>
    )
}