import * as React from 'react'
import { ChakraProvider, Icon, Flex, HStack, VStack, Stack, Box, Button, Link, Text, Heading, Image, Center, extendTheme, Spacer, Divider } from '@chakra-ui/react'
import { FaDev, FaGithub, FaEnvelope, FaLinkedin, FaFolderOpen } from 'react-icons/fa'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/projectcard'
import theme from '../theme'
import { Link as GatsbyLink } from 'gatsby'

const buttons = [
	[
		{
			icon: <FaEnvelope/>,
			link: "mailto:rolandyang@gmail.com",
			text: "Email"
		},
		{
			icon: <FaGithub/>,
			link: "https://github.com/rolandyangg",
			text: "GitHub"
		},
		{
			icon: <FaLinkedin/>,
			link: "https://www.linkedin.com/in/yangroland/",
			text: "LinkedIn"
		}
	],
	[
		{
			icon: <FaDev/>,
			link: "https://devpost.com/rolandyang",
			text: "DevPost"
		},
		{
			icon: <FaFolderOpen/>,
			link: "https://drive.google.com/file/d/1_IOzmp8a8JdewSncNE274h6pOH8LVXdL/view?usp=sharing",
			text: "Resume"
		}
	]
]

const featuredProjects = [
	{
		title: "Sorting Algorithm Visualizer",
		link: "https://github.com/rolandyangg/sorting-algorithm-visualizer",
		image: "projects/bubblesortsample.gif",
		tech: ["C++", "SFML"],
		award: null
	},
	{
		title: "Coding Interview CLI",
		link: "https://github.com/rolandyangg/interview-cli",
		image: "projects/codinginterviewsample.png",
		tech: ["Javascript", "Node.js", "Firebase"],
		award: null
	},
	{
		title: "vizAsianHate",
		link: "https://devpost.com/software/stop-aapi-hate-dashboard",
		image: "projects/vizasianhatesample.jpg",
		tech: ["React", "Next.js", "ChakraUI", "Vercel", "APIs"],
		award: "Most Interactive @ Vizathon '22"
	},
	{
		title: "NoMoAcne",
		link: "https://devpost.com/software/nomoacne",
		image: "projects/nomoacnesample.png",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Clarifai"],
		award: "2nd Overall @ GunnHacks 7.0"
	},
	{
		title: "SecureTheTag",
		link: "https://devpost.com/software/securethetag",
		image: "projects/securethetagsample.jpg",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Webscraping"],
		award: "1st Overall @ RevolutionUC '21"
	},
	{
		title: "Swing Tic Tac Toe",
		link: "https://github.com/rolandyangg/tic-tac-toe",
		image: "projects/tictactoegif.gif",
		tech: ["Java", "Swing"],
		award: null
	}
]

// https://chakra-ui.com/docs/components/flex
export default function Home() {
  return (
    <ChakraProvider theme={theme}>

		<Navbar/>

		<Center justify="center" p={{base: 0, md: "100px"}}>
			<VStack spacing={3}>
			<Flex direction={{ base: "column", md: "row"}} justify="center" align="center" flexWarp="wrap">
			<Center mx="30px" my="20px">
				<Image alt='Roland Yang' src="/hsgradpic.jpeg" borderRadius="lg" maxW="350px"/>
			</Center>
			<VStack mx="30px" align="left" maxW="600px">
				<Heading fontSize="5xl">hey 👋</Heading>
				<Heading fontSize="4xl">my name is <Text bgGradient='linear(to-l, #1ccbe2, #e96dff)'
	bgClip='text' as="span" >roland yang</Text></Heading>
				<Text fontSize="xl">welcome to my little website 💻</Text>
				<Text fontSize="xl">i’m an undergraduate student studying computer science at ucla 🐻👨‍💻. </Text>
				<Flex direction={{ base: "column", lg: "row"}} justify="center" align="center" flexWarp="wrap" fontSize="lg" py="10px">
					<Flex>
						{buttons[0].map((button, i) => {
							return <Link _hover={{ }} key={i} href={button.link}><Button _hover={{ backgroundColor: "blue.800", borderColor: "blue.300" }} variant='outline' mx="5px" my="5px" leftIcon={button.icon}>{button.text}</Button></Link>
						})}
					</Flex>
					<Flex>
						{buttons[1].map((button, i) => {
							return <Link _hover={{ }} key={i} href={button.link}><Button _hover={{ backgroundColor: "blue.800", borderColor: "blue.300" }} variant='outline' mx="5px" my="5px" leftIcon={button.icon}>{button.text}</Button></Link>
						})}
					</Flex>
				</Flex>
			</VStack>
				</Flex>
				<Text maxW="90%" justify="center" align="center" pt={5}>currently i am seeking internships in software engineering, however all opportunities are greatly appreciated!</Text>
				<Text maxW="90%" justify="center" align="center">feel free to reach out via any of my provided socials!</Text>
			</VStack>
		</Center>

		<Center>
			<Divider p="30px" borderColor="whiteAlpha.500" w="1300px"/>
		</Center>

		<Center justify="center" p={{base: "25px", md: "100px"}}>
		<VStack>
			<Heading mb="15px">featured projects</Heading>
			<Flex justify="center" align="center" flexWrap="wrap" maxW="1200px">
				{featuredProjects.map((project, i) => {
					return <ProjectCard title={project.title} link={project.link} image={project.image} tech={project.tech} award={project.award} key={i}/>
				})}
			</Flex>
			<GatsbyLink to="/projects"><Text fontSize="xl" color="whiteAlpha.700" _hover={{color: "white"}}>view all</Text></GatsbyLink>
		</VStack>
		</Center>

		<Center>
			<Divider p="30px" borderColor="whiteAlpha.500" w="1300px"/>
		</Center>

		<Center justify="center" p={{base: "50px", md: "100px"}}>
			<Flex direction={{ base: "column", md: "row"}} justify="space-between" align="center" flexWarp="wrap" w="100%" maxW="800px">
				<VStack my="10px">
					<Heading>contact</Heading>
					<Text>i promise i'm a nice person 🥺</Text>
				</VStack>
				<VStack align="start" fontSize="xl" my="10px" flexWrap="nowrap">
					<Link href="mailto:rolandyang@gmail.com"><Icon as={FaEnvelope} mx="5px"/>rolandyang@gmail.com</Link>
					<Link href="https://github.com/rolandyangg" isExternal><Icon as={FaGithub} mx="5px"/>github.com/rolandyangg</Link>
					<Link href="https://www.linkedin.com/in/yangroland/" isExternal isTruncated><Icon as={FaLinkedin} mx="5px"/>www.linkedin.com/in/yangroland</Link>
				</VStack>
			</Flex>
		</Center>

		<Footer/>
	
    </ChakraProvider>
  );
}
