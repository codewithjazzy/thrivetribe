import { useState, useEffect } from "react";
import { FormInput, FormTextarea } from "../components/Forms";

export default function ProfileForm({ initialData = {}, onSubmit }) {
  const [formFields, setFormFields] = useState({
    expertise: [],
    treatments: [],
    languages: [],
    dialects: [],
    locations: [],
  });

  const [selectedExpertise, setSelectedExpertise] = useState(initialData.expertise || []);
  const [selectedTreatments, setSelectedTreatments] = useState(initialData.treatments || []);
  const [selectedLanguages, setSelectedLanguages] = useState(initialData.languages || []);
  const [selectedDialects, setSelectedDialects] = useState(initialData.dialects || []);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/member/register");
        const data = await res.json();
        setFormFields(data.response);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchRegistration();
  }, []);

  const handleCheckbox = (event, setSelectedItems, selectedItems) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Append arrays
    selectedExpertise.forEach(id => formData.append('expertise', id));
    selectedLanguages.forEach(id => formData.append('languages', id));
    selectedTreatments.forEach(id => formData.append('treatments', id));
    selectedDialects.forEach(id => formData.append('dialects', id));

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput type="file" id="imageUpload" name="file" label="Select Profile Photo" />
      <FormInput type="text" id="firstName" name="firstName" label="First Name:" defaultValue={initialData.firstName} />
      <FormInput type="text" id="lastName" name="lastName" label="Last Name:" defaultValue={initialData.lastName} />
      <FormInput type="text" id="title" name="title" label="Professional Title(s):" defaultValue={initialData.title} />
      <FormInput type="tel" id="phone" name="phone" label="Phone Number:" defaultValue={initialData.phone} />
      <FormInput type="email" id="email" name="email" label="Email:" defaultValue={initialData.email} />
      <FormInput type="url" id="website" name="website" label="Website:" defaultValue={initialData.website} />
      <label htmlFor="location">Location</label>
      <select id="location" name="location" defaultValue={initialData.location}>
        <option value="">Select your location</option>
        {formFields.locations.map(location => (
          <option key={location._id} value={location._id}>
            {location.state}
          </option>
        ))}
      </select>
      <FormTextarea id="bio" name="bio" label="Please enter your professional biography here:" defaultValue={initialData.bio} />
      <FormTextarea id="journey" name="journey" label="What inspired you to become a therapist, and how does your background influence your practice?" defaultValue={initialData.journey} />
      <FormTextarea id="heritage" name="heritage" label="Describe your cultural heritage and how it influences your approach to therapy" defaultValue={initialData.heritage} />
      <fieldset>
        <legend>Areas of Expertise</legend>
        {formFields.expertise.map(expert => (
          <label key={expert._id}>
            <input
              type="checkbox"
              name="expertise"
              value={expert._id}
              onChange={e => handleCheckbox(e, setSelectedExpertise, selectedExpertise)}
              defaultChecked={selectedExpertise.includes(expert._id)}
            />
            {expert.expertise}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Treatment Approaches</legend>
        {formFields.treatments.map(treatment => (
          <label key={treatment._id}>
            <input
              type="checkbox"
              name="treatments"
              value={treatment._id}
              onChange={e => handleCheckbox(e, setSelectedTreatments, selectedTreatments)}
              defaultChecked={selectedTreatments.includes(treatment._id)}
            />
            {treatment.treatment}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Languages</legend>
        {formFields.languages.map(language => (
          <label key={language._id}>
            <input
              type="checkbox"
              name="languages"
              value={language._id}
              onChange={e => handleCheckbox(e, setSelectedLanguages, selectedLanguages)}
              defaultChecked={selectedLanguages.includes(language._id)}
            />
            {language.language}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Dialects</legend>
        {formFields.dialects.map(dialect => (
          <label key={dialect._id}>
            <input
              type="checkbox"
              name="dialects"
              value={dialect._id}
              onChange={e => handleCheckbox(e, setSelectedDialects, selectedDialects)}
              defaultChecked={selectedDialects.includes(dialect._id)}
            />
            {dialect.dialect}
          </label>
        ))}
      </fieldset>
      <button type="submit">Save Profile</button>
    </form>
  );
}
