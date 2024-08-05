import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput, FormTextarea } from "../components/Forms";


export default function ProfileForm({ initialData = {}, formFields = {}, onSubmit }) {
  const navigate = useNavigate();

  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedDialects, setSelectedDialects] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(initialData.location || '');


  useEffect(() => {
    if (initialData) {
      setSelectedExpertise(initialData.expertise.map(item => item._id) || []);
      setSelectedTreatments(initialData.treatments.map(item => item._id) || []);
      setSelectedLanguages(initialData.languages.map(item => item._id) || []);
      setSelectedDialects(initialData.dialects.map(item => item._id) || []);
      setSelectedLocation(initialData.location || '');
    }
  }, [initialData]);


  const handleCheckbox = (event, setSelectedItems, selectedItems) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== value));
    }
  };


  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

     // Append arrays directly
     selectedExpertise.forEach(id => formData.append('expertise', id));
     selectedTreatments.forEach(id => formData.append('treatments', id));
     selectedLanguages.forEach(id => formData.append('languages', id));
     selectedDialects.forEach(id => formData.append('dialects', id));


          // Log formData before sending
          for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
           }


    await onSubmit(formData, {
      selectedExpertise,
      selectedTreatments,
      selectedLanguages,
      selectedDialects
  });
    navigate("/account");
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
      <select id="location" name="location" value={initialData.location?._id} onChange={handleLocationChange}>
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
              checked={selectedExpertise.includes(expert._id)}
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
              checked={selectedTreatments.includes(treatment._id)}
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
              checked={selectedLanguages.includes(language._id)}
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
              checked={selectedDialects.includes(dialect._id)}
            />
            {dialect.dialect}
          </label>
        ))}
      </fieldset>
      <button type="submit">Save Profile</button>
    </form>
  );
}
