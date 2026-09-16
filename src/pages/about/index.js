import * as React from 'react'
import { ChakraProvider, Icon, Box, Flex, VStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, ListIcon, Link, Text, Heading, Image, Center, Divider, UnorderedList, ListItem, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import UnderlineLink from '../../components/underlinelink'
import { FaDev, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { BsFillGearFill, BsCalendar } from 'react-icons/bs' // BsCalendar for planned classes
import theme from "../../theme"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ImageModal from '../../components/ImageModal'
import { Helmet } from 'react-helmet'

export default function About() {
    const { isOpen: isBandOpen, onOpen: onBandOpen, onClose: onBandClose } = useDisclosure()

    return (<>
        <Helmet>
            <title>roland yang | about me</title>
        </Helmet>
        <ChakraProvider theme={theme}>

            <Navbar/>

            {/** ABOUT */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack>
                    <Heading>about me 😼</Heading>
                    <Flex justify="center" flexWrap="wrap" align="center">
                        <Center mx="20px" mb="20px" mt="10px" maxW="650px">
                            <Text fontSize="xl">
                                Hi, my name is Roland Yang! I'm a generalist software engineer who recently graduated from <UnderlineLink to="/about/coursework">UCLA</UnderlineLink> with a degree in Computer Science.
                                <br></br>
                                <br></br>
                                I'm driven by turning ideas into experiences that resonate with others. Whether through software, events, videos, or other creative work, I find fulfillment in bringing things to life that connect people, encourage growth, or simply give others something to enjoy.
                                <br></br>
                                <br></br>
                                I was born and raised in central New Jersey. Outside of work, I enjoy drumming, playing volleyball, hiking, skiing, playing video games, DJing, video editing, and chilling with my cats! 🥁🏐🥾⛷️🎮🎥👨‍💻🐱
                                <br></br>
                                <br></br>
                                Feel free to <UnderlineLink href="#socials" textDecoration="none">connect</UnderlineLink> with me on any platform! I'd love to chat!
                            </Text>
                        </Center>
                        <Box mx="20px" my="10px" justify="center" align="center">
                            <ImageModal mb="10px" alt='Roland Yang' src="wilderness-crop-2.jpg" maxW="325px" />
                            <Text as='i' fontSize="xs">film pic of me on a trip in alaska!</Text>
                        </Box>
                    </Flex>
                </VStack>
            </Center>

            <Center>
                <Divider borderColor="whiteAlpha.500" w="1300px"/>
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
                                <Text as='i'>2022 - 2026</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <UnderlineLink to="/about/coursework" textDecoration="none">Bachelors of Science in Computer Science</UnderlineLink>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mb="10px">(GPA: 3.842/4.0)</Text>
                            <Text fontSize="lg">LA Hacks (Executive Director), Marching Band (Quadline Captain), Assocation of Chinese Americans (Sponsorships Chair + Intern Coord), Theta Chi Fraternity (Historian), Chinese American Culture Night (Sponsorship Chair), Upsilon Pi Epsilon Computer Science Honor Society, DevX (Developer), MentorSEAS, Intramural Volleyball & Dodgeball</Text>
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
                    <Text pb="10px">career work</Text>
                    <Divider/>

                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Anduril</Text>
                                <Text as='i'>Aug. 2026 - Present</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Software Engineer</Text>
                                <Text>Costa Mesa, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Maritime Applications</Text>
                        </Box>
                    </Box>

                    <Divider m="20px"/>

                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Amazon 📦</Text>
                                <Text as='i'>Jun. 2025 - Sep. 2025</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Software Development Engineer Intern</Text>
                                <Text>Sunnyvale, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Ring Pioneer Cloud - Smart Video Descriptions Notifcation Titles Hero Classifications.</Text>
                            <Accordion border="transparent" allowToggle defaultIndex={[0]}>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                            click to see some zon flics...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    {/* <AccordionPanel p={2}>
                                        <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="10px" mb="10px" maxW="525px">
                                                <VStack>
                                                <UnorderedList fontSize="lg">
                                                    <ListItem>Improved Ring notification titles by integrating a multi-label AI hero guardrail model deployed on AWS EC2/ECR, enriching alerts for 500K+ premium users and reducing event misclassification by up to 60%</ListItem>
                                                    <ListItem>Redesigned API contracts across 5+ cross-team services using Python, Docker, Postman enabling downsteam propagation of new data with 100% backwards compatibility</ListItem>
                                                    <ListItem>Prototyped new “Notable Activity” notification type, extending Ring’s notifications to flag unusual safety events</ListItem>
                                                </UnorderedList>
                                                </VStack>
                                            </Center>
                                            <Center mx="10px" my="10px">
                                                <ImageModal alt='Amazon 2025' src="amazon2025.jpg" maxW="250px" />
                                            </Center>
                                        </Flex>
                                    </AccordionPanel> */}
                                    <AccordionPanel p={2}>
                                        <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Sunnyvale Office 2025' src="amazon2025.jpg" maxW="225px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Cubicle coloring' src="cubicle_markers.jpg" maxW="200px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='My poor water bottle' src="zonbottle.jpg" maxW="200px" />
                                            </Center>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>

                    <Divider m="20px"/>

                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Amazon 📦</Text>
                                <Text as='i'>Jun. 2024 - Sep. 2024</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Software Development Engineer Intern</Text>
                                <Text>Sunnyvale, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Ring Smart Replies - Migration of Ring Doorbell Auto Response Service's Database from AppConfig to DynamoDB.</Text>
                            <Accordion border="transparent" allowToggle defaultIndex={[0]}>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                         click to see some more zon flics...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Sunnyvale Office 2024' src="sunnyvale.png" maxW="225px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Spheres Office in Seattle' src="spheres.png" maxW="260px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='My mentor Bettie and I' src="mentor.jpg" maxW="200px" />
                                            </Center>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>

                    <Divider m="20px"/>

                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Golshani Lab 🧠</Text>
                                <Text as='i'>Mar. 2024 - Dec. 2024</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Undergraduate Research Assistant</Text>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Designed and implemented a user-friendly GUI using PyQt5 in Python for Voltage Image Processing. Enhanced the existing data pipeline process of neuron activation detection including registration, segementation, and extraction.</Text>
                        </Box>
                    </Box>

                    <Divider m="20px"/>

                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">UCLA Smart Grid Energy Research Center 🔬</Text>
                                <Text as='i'>Aug. 2023 - Nov. 2023</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Undergraduate Research Assistant</Text>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Part-time research assistant for lab, worked on performing literature review on prior papers to determine best reinforcement learning algorithm(s) to use to solve electric vehicle charging grid problems.</Text>
                        </Box>
                    </Box>

                    <Divider m="20px"/>

                    <Box justify="center" py="10px" fontSize="xl" w="90%">
                    <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">AdSkate Inc 📈</Text>
                                <Text as='i'>Jun. 2021 - Oct. 2021 & Apr. 2022 - Sep. 2022</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Software Engineer Intern</Text>
                                <Text>Remote</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">As a Slingshot Fellow, worked on a variety of projects helping out a CMU-based Startup. Primarily worked in Python on various data analysis, processing, R&D, and automation tasks.</Text>
                             <Accordion border="transparent" allowToggle>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                            click for more specific stuff of what I did at AdSkate...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="10px" mb="10px">
                                                <VStack>
                                                    <UnorderedList fontSize="lg" mb="10px">
                                                        <ListItem>Automated data collection and preprocessing in BERT model data pipeline reducing projected time by 5 months
and expanded amount of classifiable IAB categories by 3x by writing several Python scripts incorporating ScreamingFrog
SEO and Google's APIs</ListItem>
                                                        <ListItem>Used Selenium and BeautifulSoup to automatically scape and convert
content from HTML and VAST creative tags into downloadable files</ListItem>
                                                        <ListItem>Searched for potentially useful data sources by playing with several APIs including Twitter
API, Reddit API, Google Ads API, and Zyte API</ListItem>
                                                    </UnorderedList>
                                                    <Text fontSize="lg" as='i'>Actually ended up getting this internship junior year of high school after winning a hackathon and finding out about Slingshot. I applied for their fellowship and was matched with AdSkate!</Text>
                                                </VStack>
                                            </Center>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>
                </VStack>
            </Center>

            {/** ODD JOBS */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading pt="10px">odd jobs 👷</Heading>
                    <Text pb="10px">other experiences</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">LA Hacks 💻</Text>
                                <Text as='i'>Oct. 2023 - Jun. 2026</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Executive Director (Formerly Sponsorships Director & Sponsorships Member)</Text>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Lead organizing Southern California's Largest Collegiate Hackathon- 50+ organizers and 1300+ hackers. Secured $160,000 in corporate and in-kind sponsorships from Fortune 500 Companies and Startups in 2025.</Text>
                             <Accordion border="transparent" allowToggle defaultIndex={[0]}>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                            more...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Flex flexWrap="wrap" align="center">
                                            <Box pt="5px" width="100%">
                                                <Heading pt="5px" fontSize="xlg">2026: Executive Director</Heading>
                                                <Flex justify="center" flexWrap="wrap" align="center" pt="5px">
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Yapping at a workshop' src="lahackstalking.JPG" maxW="280px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Group Pic 2026' src="lahacksgroupzoomed.jpg" maxW="300px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Puppy corner' src="dog.jpg" maxW="190px" />
                                                    </Center>
                                                </Flex>
                                            </Box>
                                            <Divider/>
                                            <Box pt="5px" width="100%">
                                                <Heading pt="5px" fontSize="xlg">2025: Sponsorships Director</Heading>
                                                <Flex justify="center" flexWrap="wrap" align="center" pt="5px">
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='With Jason' src="spons_lahacks.jpg" maxW="280px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Group Pic 2025' src="lahacks_group1.JPG" maxW="300px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Lettuce Eating Competition' src="lettuceeating.jpeg" maxW="300px" />
                                                    </Center>
                                                </Flex>
                                            </Box>
                                            <Divider/>
                                            <Box pt="5px" width="100%">
                                                <Heading pt="5px" fontSize="xlg">2024: Sponsorships Member</Heading>
                                                <Flex justify="center" flexWrap="wrap" align="center" pt="5px">
                                                    <Center mx="7px" my="10px">
                                                                                                        <ImageModal alt='Group Pic 2024' src="teamlahacks2_2024.jpg" maxW="200px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Money squad' src="teamlahacks_2024.jpg" maxW="280px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Spons line 2024' src="spons2024.jpg" maxW="200px" />
                                                    </Center>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                        {/* <Flex justify="center" flexWrap="wrap" align="center">
                                            <Center mx="10px" mb="10px" maxW="525px">
                                                <VStack>
                                                <UnorderedList fontSize="lg">
                                                    <ListItem>Warmly greeted guests and escorted them to designated tables in a professional manner.</ListItem>
                                                    <ListItem>Managed the distribution of customers across the restaurant for waiters to have equal chances at tips and handled monetary transactions.</ListItem>
                                                    <ListItem>Provided excellent customer service with friendliness and efficiency in a fast‑paced changing environment.</ListItem>
                                                    <ListItem>Answered phone calls and listened to customer questions/concerns and directed them to the appropriate resources.</ListItem>
                                                </UnorderedList>
                                                <Text fontSize="lg" as='i'>fun fact: I got this job 30 minutes after watching the minions movie in a suit!</Text>
                                                </VStack>
                                            </Center>
                                            <Center mx="10px" my="10px">
                                                <Image alt='Flaming Grill' src="flaminggrill1.jpeg" borderRadius="lg" maxW="250px"/>
                                            </Center>
                                        </Flex> */}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                        <Divider m="20px"/>

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Association of Chinese Americans (ACA) 🇨🇳</Text>
                                <Text as='i'>May. 2025 - Jun. 2026</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Sponsorships Director + Intern Coordinator</Text>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">a very chinese time in my life</Text>
                             <Accordion border="transparent" allowToggle defaultIndex={[0]}>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='right'>
                                            more...
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel p={2}>
                                        <Flex flexWrap="wrap" align="center">
                                            <Box pt="5px" width="100%">
                                                <Flex justify="center" flexWrap="wrap" align="center" pt="5px">
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='Horse Staff 2025-2026' src="aca1.jpg" maxW="280px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='i luv my interns <3 baaaa baaaa' src="InternRetreat.jpg" maxW="300px" />
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <ImageModal alt='speech!!!' src="yap.JPG" maxW="270px" />
                                            </Center>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                        <Divider m="20px"/>

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">American Young Coder (AYC) Coding School 👨‍🏫</Text>
                                <Text as='i'>Jan. 2024 - Jun. 2024</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Coding Instructor</Text>
                                <Text>Remote</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Instructed classes and gave private tutoring to middle school students on Intro to Python, Object-Oriented Programming in Python, and Intro to Java.</Text>
                        </Box>

                        <Divider m="20px"/>

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Flaming Grill & Supreme Buffet 🍽️</Text>
                                <Text as='i'>Aug. 2022 - Jan. 2023 & Sep. 2023</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Host</Text>
                                <Text>Manville, NJ</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Greeted and seated guests at designated tables. Took beverage orders. Handled front-desk duties such as take-out, cashier transactions, and phone calls. (all with the goat manager jeff 🐐)</Text>
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
                                            {/* <Center mx="10px" mb="10px" maxW="525px">
                                                <UnorderedList fontSize="lg">
                                                    <ListItem>Warmly greeted guests and escorted them to designated tables in a professional manner.</ListItem>
                                                    <ListItem>Managed the distribution of customers across the restaurant for waiters to have equal chances at tips and handled monetary transactions.</ListItem>
                                                    <ListItem>Provided excellent customer service with friendliness and efficiency in a fast‑paced changing environment.</ListItem>
                                                    <ListItem>Answered phone calls and listened to customer questions/concerns and directed them to the appropriate resources.</ListItem>
                                                </UnorderedList>
                                            </Center> */}
                                            <Center mx="10px" my="10px">
                                                <VStack maxW="325px">
                                                    <ImageModal alt='Flaming Grill' src="flaminggrill1.jpeg" maxW="250px" />
                                                    <Text fontSize="lg" as='i' textAlign="center">fun fact: I got this job 30 minutes after watching the minions movie in a suit!</Text>
                                                </VStack>
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
                                            {/* <Center mx="10px" mb="10px" maxW="525px">
                                            <UnorderedList fontSize="lg">
                                                <ListItem>Assisted in cultivating safe, supportive, and enjoyable summer experiences for a group of a dozen elementary‑aged campers.</ListItem>
                                                <ListItem>Planned and executed camp programming while guiding campers through personal growth and acting as a positive role model.</ListItem>
                                                <ListItem>Identify and responded to camper conflicts and behavioral issues, reporting to the appropriate leadership and facilitating the resolution process.</ListItem>
                                                <ListItem>Applied weekly feedback acquired from counselor mentorship program to improve interpersonal skills and performance of camp duties.</ListItem>
                                            </UnorderedList>
                                            </Center> */}
                                            <Center mx="10px" my="10px">
                                                <ImageModal alt='Oak Crest LIT' src="oakcrestleadershipwilderness.jpeg" maxW="250px" />
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
            {/* <Center m={{base: "25px", md: "100px"}}>
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
            </Center> */}

            {/** ACHIEVEMENTS/AWARDS */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading py="10px">awards/achievements 🏆</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize={{base: "md", lg: "xl"}}>
                        <UnorderedList>
                            <ListItem>11x hackathon project wins</ListItem>
                            <UnorderedList>
                                <ListItem>3rd Place Best in Showcase (Virtual) @ Amazon Intern Emerging Innovators Challenge</ListItem>
                                <ListItem>Gode Chain Challenge @ LA Hacks 2023</ListItem>
                                <ListItem>1st Place Overall, Best Design & Best use of Google Cloud @ RevolutionUC 2021</ListItem>
                                <ListItem>Most Interactive Project & Top 12 Overall @ Vizathon 2021</ListItem>
                                <ListItem>3rd Place Overall @ LingHacks III</ListItem>
                                <ListItem>2nd Place Overall & Best Domain @ GunnHacks 7.0</ListItem>
                                <ListItem>Best Design Hack @ HackTJ 8.0</ListItem>
                                <ListItem>Best Social Good Hack @ Hack-2-Connect 3.0</ListItem>
                                <ListItem>Best Domain @ WinHacks 2021</ListItem>
                                <ListItem>1st Place Overall & Best Hardware @ MLH CorgiHacks</ListItem>
                                <ListItem>Prudential Alexa Prize @ hackMCST VI</ListItem>
                            </UnorderedList>
                            <ListItem>american computer science league intermediate division gold 2021 (perfect score)</ListItem>
                            <ListItem>voted best gamer by the brhs class of 2022 🎮</ListItem>
                        </UnorderedList>
                    </Box>
                </VStack>
            </Center>

            {/** HOBBIES */}
            <Center m={{base: "25px", md: "100px"}} id="misc">
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading pt="10px">fun facts 🎨</Heading>
                    <Text pb="10px">some more about me!</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize={{base: "md", lg: "xl"}} maxW="800px">
                        <UnorderedList>
                            <ListItem>ENTP</ListItem>
                            <ListItem>fav flavor of ice cream is mint chocolate chip 🍦</ListItem>
                            <ListItem>there is a viral <Link href="https://www.instagram.com/reel/DQ2pJIAkooE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" isExternal style={{ textDecoration: 'underline' }}>instagram reel</Link> of me out there squatting while expressing gratitude...</ListItem>
                            <ListItem>nj -> socal 📍</ListItem>
                            <ListItem>i can hit a mean fortnite wiggle emote</ListItem>
                            <ListItem>favorite snacks: nerd gummy clusters (partially trauma bonded to this), trufruit, mike and ikes, acai with a lot of granola and nutella 🍬</ListItem>
                            {/* <ListItem>some video games i used to play: fortnite, valorant, fall guys, roblox, slime rancher, minecraft, osu 🎮</ListItem> */}
                            <ListItem>random artists i have been listening to and enjoying recently: ninajirachi, malcolm todd, beabadoobee, joe hisaishi (studio ghibli = lock in music) 🎵</ListItem>
                            <ListItem>used to do a lot of <Text as="span" role="button" tabIndex={0} cursor="pointer" textDecoration="underline" _hover={{color: "whiteAlpha.700"}} _focusVisible={{color: "whiteAlpha.700"}} onClick={onBandOpen} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onBandOpen() } }}>marching band</Text> 🥁</ListItem>
                            <ListItem>i run a compilation <UnderlineLink href="https://www.tiktok.com/@crownedlist67">tiktok account</UnderlineLink> 👑</ListItem>
                        </UnorderedList>

                        {/** MARCHING BAND MODAL */}
                        <Modal isOpen={isBandOpen} onClose={onBandClose} isCentered scrollBehavior="inside">
                            <ModalOverlay bg="rgba(0, 0, 0, 0.8)"/>
                            <ModalContent bg="secondary" border="1px" borderColor="whiteAlpha.500" rounded={7} mx="20px" maxW={{base: "calc(100% - 40px)", md: "90vw", xl: "1100px"}}>
                                <ModalCloseButton/>
                                <ModalBody pt="45px" pb="20px">
                                    <Text fontSize={{base: "md", lg: "lg"}}>i used to do a lot of marching percussion stuff! some of my experiences include the <UnderlineLink href="https://www.instagram.com/uclaquads/reels/">ucla marching band</UnderlineLink>, pulse percussion, pow percussion, pacific crest drum and bugle corps, and élan percussion! 🥁</Text>
                                    <Text fontSize={{base: "md", lg: "lg"}} pt="10px">nowadays i will sometimes teach from time to time at high schools.</Text>
                                    <Text fontSize="md" fontStyle="italic" pt="30px">my sophomore year of college, i accidentally ended up on taiwanese news after giving some kids my drumsticks after performing in taiwan</Text>
                                    <SimpleGrid columns={{base: 2, md: 3}} spacing="10px" justifyItems="center" alignItems="center" pt="20px">
                                        <ImageModal alt='UCLA Quads' src="quadsphoto.jpeg" maxW="100%" maxH={{base: "150px", md: "240px"}} />
                                        {/* <ImageModal alt='BRHS Band' src="hsband.jpeg" maxW="100%" maxH={{base: "150px", md: "240px"}} /> */}
                                        <ImageModal alt='Pulse 2025' src="pulseshot.png" maxW="100%" maxH={{base: "150px", md: "240px"}} />
                                        <ImageModal alt='Pacific Crest 2023' src="bassbreakaftercropped.jpg" maxW="100%" maxH={{base: "150px", md: "240px"}} />
                                        <ImageModal alt='Elan 2023' src="elan.JPG" maxW="100%" maxH={{base: "150px", md: "240px"}} />
                                        <ImageModal alt='POW 2024' src="pow.jpg" maxW="100%" maxH={{base: "150px", md: "240px"}} />
                                        <ImageModal alt='Taiwan 2024' src="taiwan_drum.jpg" maxW="100%" maxH={{base: "150px", md: "240px"}} />
                                    </SimpleGrid>
                                </ModalBody>
                            </ModalContent>
                        </Modal>

                        {/* band photos now live in the marching band modal above */}
                        {/* <Accordion border="transparent" allowToggle defaultIndex={[0]}>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='right'>
                                        💂 click to see some band photos...
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel p={2}>
                                    <Flex justify="center" flexWrap="wrap" align="center">
                                        <Center mx="7px" my="10px">
                                            <ImageModal alt='UCLA Quads' src="quadsphoto.jpeg" maxW="225px" />
                                        </Center>
                                        <Center mx="7px" my="10px">
                                            <ImageModal alt='Pulse 2025' src="pulseshot.png" maxW="225px" />
                                        </Center>
                                        <Center mx="7px" my="10px">
                                            <ImageModal alt='Pacific Crest 2023' src="bassbreakaftercropped.jpg" maxW="250px" />
                                        </Center>
                                        <Center mx="7px" my="10px">
                                            <ImageModal alt='Elan 2023' src="elan.JPG" maxW="190px" />
                                        </Center>
                                        <Center mx="7px" my="10px">
                                            <ImageModal alt='POW 2024' src="pow.jpg" maxW="250px" />
                                        </Center>
                                        <Center mx="7px" my="10px">
                                            <ImageModal alt='Elan 2023' src="taiwan_drum.jpg" maxW="190px" />
                                        </Center>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion> */}
                    </Box>
                </VStack>
            </Center>

            {/** SOCIALS */}
            <Center m={{base: "25px", md: "100px"}} id="socials">
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
