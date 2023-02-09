import * as React from 'react'
import { ChakraProvider, Icon, Box, Flex, VStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Link, Text, Heading, Image, Center, Divider, List, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaDev, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import theme from "../theme"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function About() {
    return (<>
        <ChakraProvider theme={theme}>

            <Navbar/>

            {/** ABOUT */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack>
                    <Heading>about me 😼</Heading>
                    <Flex justify="center" flexWrap="wrap" align="center">
                        <Center mx="20px" mb="20px" mt="10px" maxW="650px">
                            <Text fontSize="xl">
                                Hi, my name is Roland Yang! I’m a first-year (sophomore by credits 🤓) undergradate student studying computer science at UCLA.
                                I'm interested in leveraging computing to create a difference whether it be contributing to projects or expanding the field of knowledge.
                                <br></br>
                                <br></br>
                                I was born and raised in central New Jersey. In my free time, I enjoy drumming, playing volleyball, video editing, gaming, and just creating things in general. 🥁🏐🎥🎮👨‍💻
                            </Text>
                        </Center>
                        <Center mx="20px" my="10px">
                            <Image alt='Roland Yang' src="rolandpromcrop.jpg" borderRadius="lg" maxW="325px"/>
                        </Center>
                    </Flex>
                </VStack>
            </Center>

            <Center>
                <Divider borderColor="whiteAlpha.500" w="1300px"/>
            </Center>

            {/** RELEVANT COURSEWORK */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading py="10px">relevant coursework 📚</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl">
                        <Text fontWeight="bold" fontSize="2xl">computer science</Text>
                        <UnorderedList>
                            <ListItem>data structures in c++ (CS 32)</ListItem>
                            <ListItem>object-oriented programming in c++ (CS 31)</ListItem>
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">math</Text>
                        <UnorderedList>
                            <ListItem>introduction to discrete structures (MATH 61)</ListItem>
                            <ListItem>differential equations (MATH 33B)</ListItem>
                            <ListItem>multivariable calculus (MATH 32A/B)</ListItem>    
                        </UnorderedList>   
                        <br/>                
                        <Text fontWeight="bold" fontSize="2xl">miscellaneous</Text>
                        <UnorderedList>
                            <ListItem>introduction to architectural studies (ARCH&UD 30)</ListItem>
                            <ListItem>symphonic band (MUSC 185F)</ListItem>  
                        </UnorderedList>
                    </Box>
                </VStack>
            </Center>

            {/** EDUCATION */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading py="10px">education 🎓</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">University of California - Los Angeles (UCLA) 🐻</Text>
                                <Text as='i'>Expected Graduation 2026</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Bachelors of Science in Computer Science</Text>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mb="10px">(GPA: 4.0/4.0)</Text>
                            <Text fontSize="lg">DevX (onCampus Developer), Association for Computing Machinery (ACM), Centennial Hall Resident Government (Community Representative), Marching Band, Assocation of Chinese Americans (ACA)</Text>
                        </Box>
                        
                        <Divider m="20px"/>

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Bridgewater-Raritan High School 🐾</Text>
                                <Text as='i'>2018 - 2022</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>High School Diploma</Text>
                                <Text>Bridgewater, NJ</Text>
                            </Flex>
                            <Text mb="10px">(GPA: 4.7677)</Text>
                            <Text fontSize="lg">eSports Club (President), C.O.D.E. Club (Secretary), Tri-M Music Honor Society (President), Marching Band & Indoor Percussion (Drumline Captain), Varsity Boys Volleyball, Student Council, National Chinese Honor Society</Text>
                        </Box>
                    </Box>
                </VStack>
            </Center>

            {/** WORK EXPERIENCE */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading pt="10px">work experience 💼</Heading>
                    <Text pb="10px">the big boy stuff</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Center>
                            <Heading>WIP</Heading>
                        </Center>
                    </Box>
                </VStack>
            </Center>

            {/** ODD JOBS */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading pt="10px">odd jobs 👷</Heading>
                    <Text pb="10px">other "professional" experiences unrelated to cs</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Flaming Grill & Supreme Buffet 🍽️</Text>
                                <Text as='i'>Aug. 2022 - Jan. 2023</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Host</Text>
                                <Text>Manville, NJ</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Greeted and seated guests at designated tables. Took beverage orders. Handled front-desk duties such as take-out, cashier transactions, and phone calls.</Text>
                            {/**
                             * • Warmly greeted guests and escorted them to designated tables in a professional manner.
• Managed the distribution of customers across the restaurant for waiters to have equal chances at tips and handled monetary transactions.
• Provided excellent customer service with friendliness and efficiency in a fast‑paced changing environment.
• Answered phone calls and listened to customer questions/concerns and directed them to the appropriate resources.
                             */}
                             <Accordion border="transparent" allowToggle>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                            more...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="10px" mb="10px" maxW="525px">
                                            <UnorderedList fontSize="lg">
                                                <ListItem>Warmly greeted guests and escorted them to designated tables in a professional manner.</ListItem>
                                                <ListItem>Managed the distribution of customers across the restaurant for waiters to have equal chances at tips and handled monetary transactions.</ListItem>
                                                <ListItem>Provided excellent customer service with friendliness and efficiency in a fast‑paced changing environment.</ListItem>
                                                <ListItem>Answered phone calls and listened to customer questions/concerns and directed them to the appropriate resources.</ListItem>
                                            </UnorderedList>
                                            </Center>
                                            <Center mx="10px" my="10px">
                                                <Image alt='Roland Yang' src="flaminggrill1.jpeg" borderRadius="lg" maxW="250px"/>
                                            </Center>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                        
                        <Divider m="20px"/>

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Oak Crest Day Camp 🏕️</Text>
                                <Text as='i'>Jun. 2019 - Aug. 2019</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Camp Counselor (in Training)</Text>
                                <Text>Somerset, NJ</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Participated in Oak Crest Day Camp's Leaders in Training program (LIT), in which I assisted and worked a counselor with a different camp group, consisting of elementary-aged kids, about every week.</Text>
                            {/**
                             * • Assisted in cultivating safe, supportive, and enjoyable summer experiences for a group of a dozen elementary‑aged campers.
• Planned and executed camp programming while guiding campers through personal growth and acting as a positive role model.
• Identify and responded to camper conflicts and behavioral issues, reporting to the appropriate leadership and facilitating the resolution process.
• Applied weekly feedback acquired from counselor mentorship program to improve interpersonal skills and performance of camp duties.
                             */}
                             <Accordion border="transparent" allowToggle>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                            more...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="10px" mb="10px" maxW="525px">
                                            <UnorderedList fontSize="lg">
                                                <ListItem>Assisted in cultivating safe, supportive, and enjoyable summer experiences for a group of a dozen elementary‑aged campers.</ListItem>
                                                <ListItem>Planned and executed camp programming while guiding campers through personal growth and acting as a positive role model.</ListItem>
                                                <ListItem>Identify and responded to camper conflicts and behavioral issues, reporting to the appropriate leadership and facilitating the resolution process.</ListItem>
                                                <ListItem>Applied weekly feedback acquired from counselor mentorship program to improve interpersonal skills and performance of camp duties.</ListItem>
                                            </UnorderedList>
                                            </Center>
                                            <Center mx="10px" my="10px">
                                                <Image alt='Roland Yang' src="oakcrestleadershipwilderness.jpeg" borderRadius="lg" maxW="250px"/>
                                            </Center>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                    </Box>
                </VStack>
            </Center>

            {/** VOLUNTEERING */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading pt="10px">volunteering 🤝</Heading>
                    <Text pb="10px">unpaid initiatives and experiences</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Center>
                            <Heading>WIP</Heading>
                        </Center>
                    </Box>
                </VStack>
            </Center>

            {/** ACHIEVEMENTS/AWARDS */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading py="10px">awards/achievements 🏆</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize={{base: "md", lg: "xl"}}>
                        <UnorderedList>
                            <ListItem>8x hackathon project wins</ListItem>
                            <UnorderedList>
                                <ListItem>Most Interactive Project & Top 12 Overall @ Vizathon 2021</ListItem>
                                <ListItem>3rd Place Overall @ LinkHacks III</ListItem>
                                <ListItem>2nd Place Overall & Best Domain @ GunnHacks 7.0</ListItem>
                                <ListItem>Best Design Hack @ HackTJ 8.0</ListItem>
                                <ListItem>Best Social Good Hack @ Hack-2-Connect 3.0</ListItem>
                                <ListItem>Best Domain @ WinHacks 2021</ListItem>
                                <ListItem>1st Place Overall & Best Hardware @ MLH CorgiHacks</ListItem>
                                <ListItem>Prudential Alexa Prize @ hackMCST VI</ListItem>
                            </UnorderedList>
                            <ListItem>american computer science league intermediate division gold 2021</ListItem>
                            <ListItem>voted best gamer by the brhs class of 2022 🎮</ListItem>
                        </UnorderedList>
                    </Box>
                </VStack>
            </Center>

            {/** HOBBIES */}
            {/* <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="90%" maxW="1100px">
                    <Heading pt="10px">hobbies 🎨</Heading>
                    <Text pb="10px">bonus</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="80%">
                        <Center>
                            <Heading>WIP</Heading>
                        </Center>
                    </Box>
                </VStack>
            </Center> */}

            {/** SOCIALS */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading p="10px">socials 📱</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Center>
                        <VStack align="start" fontSize="xl" my="10px" flexWrap="nowrap">
                            <Link href="mailto:rolandyang@gmail.com"><Icon as={FaEnvelope} mx="5px"/>rolandyang@gmail.com</Link>
                            <Link href="https://github.com/rolandyangg" isExternal><Icon as={FaGithub} mx="5px"/>github.com/rolandyangg</Link>
                            <Link href="https://www.linkedin.com/in/yangroland/" isExternal isTruncated><Icon as={FaLinkedin} mx="5px"/>www.linkedin.com/in/yangroland</Link>
                            <Link href="https://devpost.com/rolandyang" isExternal isTruncated><Icon as={FaDev} mx="5px"/>https://devpost.com/rolandyang</Link>
				        </VStack>
                        </Center>
                    </Box>
                </VStack>
            </Center>

            <Footer/>

        </ChakraProvider>
        </>);
}
