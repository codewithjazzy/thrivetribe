import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  CheckboxGroup,
  SimpleGrid,
} from "@chakra-ui/react";

export default function ProfileForm({ initialData = {}, formFields = {}, onSubmit }) {
  const navigate = useNavigate();

  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedDialects, setSelectedDialects] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(initialData.location || '');

  useEffect(() => {
    if (initialData) {
      setSelectedExpertise(initialData.expertise?.map(item => item._id) || []);
      setSelectedTreatments(initialData.treatments?.map(item => item._id) || []);
      setSelectedLanguages(initialData.languages?.map(item => item._id) || []);
      setSelectedDialects(initialData.dialects?.map(item => item._id) || []);
      setSelectedLocation(initialData.location?._id || '');
    }
  }, [initialData]);

  const handleCheckbox = (setSelectedItems, selectedItems) => (value) => {
    console.log(value)
    setSelectedItems(value);
  };

  const handleLocationChange = (event) => {
    console.log(event.target.value)
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    selectedExpertise.forEach(id => formData.append('expertise', id));
    selectedTreatments.forEach(id => formData.append('treatments', id));
    selectedLanguages.forEach(id => formData.append('languages', id));
    selectedDialects.forEach(id => formData.append('dialects', id));

    await onSubmit(formData, {
      selectedExpertise,
      selectedTreatments,
      selectedLanguages,
      selectedDialects
    });
    navigate("/account");
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={6} align="stretch">
        <FormControl maxW="xs">
          <FormLabel htmlFor="imageUpload">Select Profile Photo</FormLabel>
          <Input type="file" id="imageUpload" name="file"  focusBorderColor="#f3af59" />
        </FormControl>

        <Flex>
          <FormControl mr={4}>
            <FormLabel htmlFor="firstName">First Name:</FormLabel>
            <Input type="text" id="firstName" name="firstName" defaultValue={initialData.firstName}  focusBorderColor="#f3af59" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="lastName">Last Name:</FormLabel>
            <Input type="text" id="lastName" name="lastName" defaultValue={initialData.lastName}  focusBorderColor="#f3af59" />
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel htmlFor="title">Professional Title(s):</FormLabel>
          <Input type="text" id="title" name="title" defaultValue={initialData.title} focusBorderColor="#f3af59" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Phone Number:</FormLabel>
          <Input type="tel" id="phone" name="phone" defaultValue={initialData.phone} focusBorderColor="#f3af59" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input type="email" id="email" name="email" defaultValue={initialData.email} focusBorderColor="#f3af59" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="website">Website:</FormLabel>
          <Input type="url" id="website" name="website" defaultValue={initialData.website} focusBorderColor="#f3af59" />
        </FormControl>

        <FormControl maxW="xs">
          <FormLabel htmlFor="location">Location</FormLabel>
          <Select id="location" name="location" value={selectedLocation} onChange={handleLocationChange} focusBorderColor="#f3af59">
            <option value="">Select your location</option>
            {formFields.locations?.map(location => (
              <option key={location._id} value={location._id}>
                {location.state}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="bio">Please enter your professional biography here:</FormLabel>
          <Textarea id="bio" name="bio" defaultValue={initialData.bio} focusBorderColor="#f3af59" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="journey">What inspired you to become a therapist, and how does your background influence your practice?</FormLabel>
          <Textarea id="journey" name="journey" defaultValue={initialData.journey} focusBorderColor="#f3af59" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="heritage">Describe your cultural heritage and how it influences your approach to therapy</FormLabel>
          <Textarea id="heritage" name="heritage" defaultValue={initialData.heritage} focusBorderColor="#f3af59" />
        </FormControl>

        <Box>
          <FormLabel>Areas of Expertise</FormLabel>
          <CheckboxGroup value={selectedExpertise} onChange={handleCheckbox(setSelectedExpertise, selectedExpertise)}>
            <SimpleGrid columns={[2, null, 3, 4]} spacing={2}>
              {formFields.expertise?.map(expert => (
                <Checkbox key={expert._id} value={expert._id} colorScheme="yellow" size="sm" isChecked={selectedExpertise.includes(expert._id)}>
                  {expert.expertise}
                </Checkbox>
              ))}
            </SimpleGrid>
          </CheckboxGroup>
          <Divider my={4} />
        </Box>

        <Box>
          <FormLabel>Treatment Approaches</FormLabel>
          <CheckboxGroup value={selectedTreatments} onChange={handleCheckbox(setSelectedTreatments, selectedTreatments)}>
            <SimpleGrid columns={[2, null, 3, 4]} spacing={2}>
              {formFields.treatments?.map(treatment => (
                <Checkbox key={treatment._id} value={treatment._id} colorScheme="yellow" size="sm">
                  {treatment.treatment}
                </Checkbox>
              ))}
            </SimpleGrid>
          </CheckboxGroup>
          <Divider my={4} />
        </Box>

        <Box>
          <FormLabel>Languages</FormLabel>
          <CheckboxGroup value={selectedLanguages} onChange={handleCheckbox(setSelectedLanguages, selectedLanguages)}>
            <SimpleGrid columns={[2, null, 3, 4]} spacing={2}>
              {formFields.languages?.map(language => (
                <Checkbox key={language._id} value={language._id} colorScheme="yellow" size="sm">
                  {language.language}
                </Checkbox>
              ))}
            </SimpleGrid>
          </CheckboxGroup>
          <Divider my={4} />
        </Box>

        <Box>
          <FormLabel>Dialects</FormLabel>
          <CheckboxGroup value={selectedDialects} onChange={handleCheckbox(setSelectedDialects, selectedDialects)}>
            <SimpleGrid columns={[2, null, 3, 4]} spacing={2}>
              {formFields.dialects?.map(dialect => (
                <Checkbox key={dialect._id} value={dialect._id} colorScheme="yellow" size="sm">
                  {dialect.dialect}
                </Checkbox>
              ))}
            </SimpleGrid>
          </CheckboxGroup>
        </Box>

        <Button
          type="submit"
          variant="outline"
          border="2px"
          borderColor="#f3af59"
          _hover={{ background: '#fff3dd' }}
          size="sm"
        >
          Save Profile
        </Button>
      </VStack>
    </Box>
  );
}