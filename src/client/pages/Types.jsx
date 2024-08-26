import { Container, Box, chakra, Text, Icon, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, List, ListIcon, ListItem } from '@chakra-ui/react';
import { GiThink, GiPuzzle, GiHeartInside, GiHeartKey, GiMeditation, GiThreeFriends } from 'react-icons/gi';

const therapies = [
  {
    heading: 'Cognitive Behavioral Therapy (CBT)',
    description: 'Cognitive Behavioral Therapy (CBT) is a structured, evidence-based approach that focuses on identifying and modifying negative thought patterns and maladaptive behaviors. Grounded in the principle that thoughts, emotions, and behaviors are interconnected, CBT equips individuals with practical strategies to address and manage emotional distress and psychological issues.',
    approaches: [
      'Exposure and Response Prevention: Often used for treating OCD, this approach involves gradual exposure to feared situations or objects and teaching individuals to refrain from responding with compulsive behaviors.',
      'Cognitive Processing Therapy: Applied in PTSD treatment, this technique helps individuals process trauma-related thoughts and feelings.',
      'Rational Emotive Behavior Therapy: Focuses on identifying irrational beliefs, challenging these beliefs, and developing more rational and adaptive thought patterns.',
    ],
    benefits: 'CBT is effective for a broad range of disorders, including anxiety, depression, PTSD, and eating disorders, offering individuals skills to apply in everyday situations and improve their emotional well-being.',
    icon: GiThink
  },
  {
    heading: 'Psychodynamic Therapy',
    description: 'Psychodynamic Therapy delves into the influence of unconscious processes and early life experiences on current behaviors and emotional states. It emphasizes self-exploration and insight, encouraging individuals to examine unresolved issues and the underlying causes of their psychological distress.',
    approaches: [
      'Free Association: Encourages individuals to express whatever comes to mind, revealing unconscious thoughts and feelings.',
      'Dream Analysis: Interprets the symbolic meaning of dreams to uncover unconscious conflicts and desires.',
      'Jungian Therapy: Focuses on the collective unconscious and archetypes, exploring deep psychological aspects.',
      'Adlerian Therapy: Emphasizes understanding the individual\'s lifestyle, family dynamics, and social context.',
    ],
    benefits: 'This therapy is particularly beneficial for those seeking deeper personal insights and understanding complex emotional patterns.',
    icon:  GiPuzzle
  },
  {
    heading: 'Humanistic Therapy',
    description: 'Humanistic Therapy emphasizes self-discovery, personal growth, and the inherent worth of the individual. It prioritizes creating a supportive and empathetic therapeutic environment, facilitating an authentic exploration of the self and fostering personal development.',
    approaches: [
      'Person-Centered Therapy: Provides a non-judgmental, empathetic environment where clients can explore their feelings and thoughts.',
      'Existential Therapy: Addresses existential concerns, focusing on issues of meaning, choice, and personal responsibility.',
      'Gestalt Therapy: Aims to enhance self-awareness and present moment consciousness, encouraging individuals to experience their emotions and thoughts fully.',
    ],
    benefits: 'Humanistic Therapy is particularly suited for individuals seeking to improve self-awareness, navigate life transitions, and explore personal identity and relationships.',
    icon: GiHeartInside
  },
  {
    heading: 'Dialectical Behavior Therapy (DBT)',
    description: 'Dialectical Behavior Therapy (DBT) is a cognitive-behavioral approach that combines traditional cognitive-behavioral techniques with mindfulness practices. Initially developed for treating borderline personality disorder, DBT focuses on enhancing emotional and interpersonal regulation through a skills-based approach.',
    approaches: [
      'Mindfulness: Teaches being present and fully engaged in the current moment without judgment.',
      'Distress Tolerance: Focuses on developing skills to tolerate and survive crisis situations without resorting to self-destructive behavior.',
      'Emotion Regulation: Helps individuals understand and manage intense emotions more effectively.',
      'Interpersonal Effectiveness: Aims to improve communication and relationship-building skills, balancing needs and demands in interactions with others.',
    ],
    benefits: 'DBT is effective for individuals dealing with emotional dysregulation, interpersonal conflicts, self-harm behaviors, and certain mood disorders, offering a pathway to more balanced and fulfilling life experiences.',
    icon: GiMeditation
  },
  {
    heading: 'Family Therapy',
    description: 'Family Therapy is a form of psychotherapy designed to enhance communication, resolve conflicts, and foster a healthier family dynamic. Recognizing problems as systemic patterns rather than blaming individual members, this approach engages families and couples in a collaborative process to nurture change and development.',
    approaches: [
      'Structural Family Therapy: Focuses on adjusting and reinforcing the family\'s structure to foster more supportive interactions and clearly define roles and boundaries.',
      'Systemic Therapy: Explores the complex web of relationships and communication patterns within the family, aiming to understand and transform negative dynamics.',
      'Attachment-Based Family Therapy: Targets attachment issues, working to repair ruptures and build stronger, more secure emotional bonds among family members.',
    ],
    benefits: 'By considering the unique needs and dynamics of each family, Family Therapy offers tailored interventions that promote understanding, empathy, and cooperation, leading to lasting solutions that benefit the entire family unit.',
    icon: GiThreeFriends
  }
];

export default function Types(){
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }} my={8}>
      <chakra.h1 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">
        Understanding the Five Core Approaches to Therapy
      </chakra.h1>
      <Text fontSize="lg" mb={16} textAlign="center">
        In the diverse field of psychotherapy, five primary approaches have emerged as foundational methods for promoting mental health and personal growth. Each of these therapeutic modalities offers unique perspectives and techniques, catering to different needs and preferences. While there are many specialized forms of therapy, these five core approaches—Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, Humanistic Therapy, Dialectical Behavior Therapy (DBT), and Family Therapy—represent the main schools of thought in modern psychotherapy. Understanding these approaches can help you make an informed decision about which type of therapy might be most beneficial for your specific situation and goals.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
        {therapies.slice(0,4).map((therapy, index) => (
          <Box key={index} textAlign="center">
            <Icon as={therapy.icon} w={14} h={14} color="#f3af59" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={2}>
              {therapy.heading}
            </chakra.h3>
            <Text fontSize="md" mb={4}>
              {therapy.description}
            </Text>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Key Approaches
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <List textAlign="left">
                    {therapy.approaches.map((approach, idx) => (
                      <ListItem key={idx}>
                        <ListIcon as={GiHeartKey} color='#e4a39b' />
                        {approach}
                      </ListItem>
                    ))}
                  </List>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Who Can Benefit 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text textAlign="left">{therapy.benefits}</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        ))}

        <Box gridColumn="1 / -1" display="flex" justifyContent="center" width={{ base: "100%", md: "50%" }} >
            <Box textAlign="center">
            <Icon as={therapies[4].icon} w={12} h={12} color="#f3af59" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={2}>
              {therapies[4].heading}
            </chakra.h3>
            <Text fontSize="md" mb={4}>
              {therapies[4].description}
            </Text>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Key Approaches
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <List textAlign="left">
                    {therapies[4].approaches.map((approach, idx) => (
                      <ListItem key={idx}>
                        <ListIcon as={GiHeartKey} color='#e4a39b' />
                        {approach}
                      </ListItem>
                    ))}
                  </List>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Who Can Benefit 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text textAlign="left">{therapies[4].benefits}</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};