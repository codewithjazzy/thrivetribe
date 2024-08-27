import BlogCard from "../components/BlogCard"
import { Divider, Flex, Heading, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"



export default function Blog(){
    return (
        <Flex 
            direction="column"
            align="center"
            mx={12}
            my={24}>

            <VStack spacing={12}>
            <Stack textAlign="center" align="center" spacing={6}  >
                    <Heading as="h1" size="2xl">Check out the latest blog posts</Heading>
                    <Heading as="h3" size="md">Our blog is a space for sharing stories, insights, and resources that resonate with the experiences of Black women.</Heading>
                    <Divider borderColor="#f7c687" width="50%" borderWidth={2} mb={12} />
            </Stack>
            <SimpleGrid columns={{sm: 1, md: 2}} spacing={12} justifyItems="center">
                    <BlogCard
                        title="A Guide to Cultural Competence in Therapy: Finding the Right Fit"
                        content={
                            <>
                                <Text mb="4" style={{ textIndent: 32 }}>
                                    Finding a therapist who is not just skilled but also culturally competent can make all the difference in the therapeutic journey of Black women. Cultural competence in therapy involves an understanding and appreciation of a client's cultural background and how it influences their experiences and worldview.
                                </Text>
                                <Text style={{ textIndent: 32 }}>
                                    This blog post will serve as a guide for Black women seeking therapy, outlining key qualities to look for in a therapist, such as cultural sensitivity, an understanding of the specific challenges faced by Black women and immigrants, and a respectful curiosity about the client's personal heritage. The goal is to empower readers to find a therapeutic partnership that feels respectful, understanding, and affirming of their identity.
                                </Text>
                            </>
                        }
                    />
                    <BlogCard
                        title="The Silent Struggle: Breaking the Stigma of Mental Health in Black Communities"
                        content={
                            <>
                                <Text mb="4" style={{ textIndent: 32 }}>
                                    Mental health is often a taboo topic in many Black communities, shrouded in silence and stigma. This silence can be even more profound among Black women, who may feel immense pressure to be strong and resilient, often at the expense of their mental well-being.
                                </Text>
                                <Text style={{ textIndent: 32 }}>
                                    This blog post aims to shed light on these silent struggles, offering stories of resilience and recovery that challenge the stigma. By bringing these conversations to the forefront, the post will encourage Black women to prioritize their mental health and seek the support they deserve, fostering a community where mental wellness is not just accepted but embraced.
                                </Text>
                            </>
                        }
                    />
                    <BlogCard
                        title="Navigating Two Worlds: Mental Health Challenges for Immigrants and Children of Immigrants"
                        content={
                            <>
                                <Text mb="4" style={{ textIndent: 32 }}>
                                    For many Black women who are immigrants or children of immigrants, life is often about navigating between two cultures. This delicate dance between the heritage of one's birthplace and the customs of a new homeland can create unique mental health challenges. The pressure to assimilate while preserving one's cultural identity can lead to feelings of isolation, identity confusion, and even anxiety.
                                </Text>
                                <Text style={{ textIndent: 32 }}>
                                    This blog post will delve into these complex experiences, offering insights into the internal struggles faced by many in this community. It will also highlight the importance of culturally sensitive therapy that understands these nuances, providing a beacon of hope and a pathway to mental wellness that respects and integrates the richness of diverse cultural backgrounds.
                                </Text>
                            </>
                        }
                    />
                    <BlogCard
                        title="Building Bridges: How Therapy Can Connect You to Your Roots"
                        content={
                            <>
                                <Text mb="4" style={{ textIndent: 32 }}>
                                    Therapy can be a powerful journey not just towards healing, but also in rediscovering and connecting with one's cultural roots. For Black women, especially those distanced from their ancestral lands, therapy can serve as a bridge to understanding and embracing their heritage.
                                </Text>
                                <Text style={{ textIndent: 32 }}>
                                    This post will explore how engaging with a therapist who respects and incorporates cultural heritage can help clients find strength in their roots. The process can lead to profound self-discovery, fostering a sense of pride and belonging that fortifies mental health. It's about more than just coping; it's about thriving through a deepened connection to one's history and identity.
                                </Text>
                            </>
                        }
                    />
            </SimpleGrid>
            </VStack>
        </Flex>
    )
}