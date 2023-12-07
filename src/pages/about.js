import * as React from 'react'
import { ChakraProvider, Icon, Box, Flex, VStack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, ListIcon, Link, Text, Heading, Image, Center, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaDev, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { BsFillGearFill, BsCalendar } from 'react-icons/bs' // BsCalendar for planned classes
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
                                Hi, my name is Roland Yang! I’m a Junior studying computer science at UCLA.
                                I'm interested in leveraging computing to create a difference.
                                <br></br>
                                <br></br>
                                I was born and raised in central New Jersey. In my free time, I enjoy drumming, playing volleyball, playing video games (no surprise, REAL unique for a CS major), video editing, and chilling with my cats! 🥁🏐🎮🎥👨‍💻🐱
                                <br></br>
                                <br></br>
                                Feel free to connect with me on any platform!
                            </Text>
                        </Center>
                        <Box mx="20px" my="10px" justify="center" align="center">
                            <Image mb="10px" alt='Roland Yang' src="film_camera_squarephoto.jpeg" borderRadius="lg" maxW="325px"/>
                            <Text as='i' fontSize="xs">this is a polaroid of me on a trip in taiwan!</Text>
                        </Box>
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
                            <ListItem><ListIcon as={BsFillGearFill}/>operating systems principles (CS 111)</ListItem>
                            <ListItem><ListIcon as={BsCalendar}/>intro to computer graphics (CS 174A)</ListItem>
                            <ListItem>software construction lab (CS 35)</ListItem>
                            <ListItem>intro to computer organization (CS 33)</ListItem>
                            <ListItem>data structures in c++ (CS 32)</ListItem>
                            <ListItem>object-oriented programming in c++ (CS 31)</ListItem>
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">math</Text>
                        <UnorderedList>
                            <ListItem>discrete structures (MATH 61)</ListItem>
                            <ListItem>linear algebra and applications (MATH 33A)</ListItem>
                            <ListItem>differential equations (MATH 33B)</ListItem>
                            <ListItem>multivariable calculus (MATH 32A/B)</ListItem>    
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">engineering</Text>
                        <UnorderedList>
                            <ListItem><ListIcon as={BsFillGearFill}/>intro to technology management and economics (ENGR 110)</ListItem>
                            <ListItem>intro machine learning (ENGR 96)</ListItem>
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">science</Text>
                        <UnorderedList>
                            <ListItem>mechanics physics lab (PHYSICS 4AL)</ListItem>
                        </UnorderedList>   
                        <br/>                
                        <Text fontWeight="bold" fontSize="2xl">miscellaneous</Text>
                        <UnorderedList>
                            <ListItem>introduction to architectural studies (ARCH&UD 30)</ListItem>
                            <ListItem><ListIcon as={BsCalendar}/>languages and cultures of asia (ASIA 30)</ListItem>
                            <ListItem><ListIcon as={BsCalendar}/>mathematics for life scientists (LIFSCI 30A)</ListItem>
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
                                <Text as='i'>Expected Graduation 2025</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Bachelors of Science in Computer Science</Text>
                                <Text>Los Angeles, CA</Text>
                            </Flex>
                            <Text mb="10px">(GPA: 3.935/4.0)</Text>
                            <Text fontSize="lg">DevX (Developer), Upsilon Pi Epsilon, LA Hacks (Sponsorships Team Organizer), Association for Computing Machinery (ACM), Marching Band, Assocation of Chinese Americans (ACA), Intramural Volleyball</Text>
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
                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">UCLA Smart Grid Energy Research Center 🔬</Text>
                                <Text as='i'>Aug. 2023 - Present</Text>
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
                            <Text mt="10px" fontSize="lg">As a Slingshot Fellow, worked on a variety of projects helping out a CMU-based Startup. Most of my work involved using Python to analyze & process data and/or automate numerous different tasks. Still informally help out on the side from time to time.</Text>
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
SEO and Google’s APIs</ListItem>
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
                    <Text pb="10px">other "professional" experiences unrelated to cs</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl" w="90%">

                        <Box>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text fontWeight="bold" fontSize="2xl">Kryos AI 👨‍🏫</Text>
                                <Text as='i'>Oct. 2023 - Present</Text>
                            </Flex>
                            <Flex justify="space-between" align="center" w="100%" flexWrap="wrap">
                                <Text>Educator</Text>
                                <Text>Remote</Text>
                            </Flex>
                            <Text mt="10px" fontSize="lg">Edited and peer-reviewed college admission essays. Helped present workshops on the college application process.</Text>
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
                            <ListItem>9x hackathon project wins</ListItem>
                            <UnorderedList>
                                <ListItem>Gode Chain Challenge @ LA Hacks 2023</ListItem>
                                <ListItem>Most Interactive Project & Top 12 Overall @ Vizathon 2021</ListItem>
                                <ListItem>3rd Place Overall @ LingHacks III</ListItem>
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
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading pt="10px">misc. stuff 🎨</Heading>
                    <Text pb="10px">diversity</Text>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize={{base: "md", lg: "xl"}} maxW="800px">
                        <UnorderedList>
                            <ListItem>some video games i play: fortnite, valorant, fall guys, roblox, slime rancher, minecraft, osu 🎮</ListItem>
                            <ListItem>random artists i have been listening to and enjoying recently: drake, laufey, sza, new jeans, rex orange county 🎵</ListItem>
                            <ListItem>favorite web games to play in class: sexaginta~quattuordle, bongo cat, 2048, shellshock.io, contexto, surviv.io 💻</ListItem>
                            {/** https://64ordle.au/ https://bongo.cat/ https://play2048.co/ https://shellshock.io/ https://contexto.me/*/}
                            <ListItem>sony vegas > premiere (because i'm too lazy to learn premiere) 🎥</ListItem>
                            <ListItem>the best flavor of ice cream is mint chocolate chip (this is a statement) 🍦</ListItem>
                            <ListItem>i enjoy doing marching percussion! some of my experiences include the ucla marching band, pow percussion, élan percussion, and pacific crest drum and bugle corps! 🥁</ListItem>
                        </UnorderedList>
                        <Accordion border="transparent" allowToggle>
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
                                                <Image alt='Roland Yang' src="quadsphoto.jpeg" borderRadius="lg" maxW="225px"/>
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <Image alt='Roland Yang' src="hsband.jpeg" borderRadius="lg" maxW="260px"/>
                                            </Center>
                                            <Center mx="7px" my="10px">
                                                <Image alt='Roland Yang' src="bassbreakaftercropped.jpg" borderRadius="lg" maxW="250px"/>
                                            </Center>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                    </Box>
                </VStack>
            </Center>

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
