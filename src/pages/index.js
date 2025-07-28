import * as React from 'react'
import { ChakraProvider, Icon, Flex, VStack, Button, Link, Text, Heading, Image, Center, Divider } from '@chakra-ui/react'
import { FaDev, FaGithub, FaEnvelope, FaLinkedin, FaFolderOpen } from 'react-icons/fa'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/projectcard'
import theme from '../theme'
import { Link as GatsbyLink } from 'gatsby'
import { Helmet } from 'react-helmet'

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
		title: "Notate",
		link: "https://github.com/rolandyangg/notate",
		image: "projects/notate_example.jpg",
		tech: ["React", "Typescript", "Human-Computer Interaction", "UserResearch"],
		award: null,
		description: "A lightweight, minimalist text editor designed to make integrating annotations and visuals easier"
	},
	{
		title: "BruinShare",
		link: "https://github.com/rolandyangg/BruinShare",
		image: "projects/bruinsharepreview.png",
		tech: ["FERN", "Firebase", "Express.js", "React", "Node.js", "AWS", "MaterialUI", "Next.js"],
		description: "Full-stack centralized ridesharing platform designed for UCLA students"
	},
	{
		title: "Crossy Bruin",
		link: "https://github.com/rolandyangg/crossy-bruin",
		image: "projects/crossybruin.gif",
		tech: ["Three.js", "Javascript", "Computer Graphics"],
		award: null,
		description: "Endless-runner arcade game themed around UCLA student getting to class"
	},
	// {
	// 	title: "Coding Interview CLI",
	// 	link: "https://github.com/rolandyangg/interview-cli",
	// 	image: "projects/codinginterviewsample.png",
	// 	tech: ["Javascript", "Node.js", "Firebase"],
	// 	award: null,
	// 	description: "Command Line Interface designed for creating, designing, assigning, and taking live coding interviews"
	// },
	{
		title: "ACA Family Tree",
		link: "https://github.com/rolandyangg/aca-family-tree",
		image: "projects/aca_family.png",
		tech: ["React", "Javascript", "Graphs", "react-flow", "Data Structures"],
		award: null,
		description: "Interactive Family Tree visualizations for the Association of Chinese Americans at UCLA staff members, dating back to 2014"
	},
	{
		title: "vizAsianHate",
		link: "https://devpost.com/software/stop-aapi-hate-dashboard",
		image: "projects/vizasianhatesample.jpg",
		tech: ["React", "Next.js", "ChakraUI", "Vercel", "APIs"],
		award: "Most Interactive @ Vizathon '22",
		description: "Dynamic website containing interactive data visualizations displaying AAPI hate crime data"
	},
	{
		title: "SecureTheTag",
		link: "https://devpost.com/software/securethetag",
		image: "projects/securethetagsample.jpg",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Webscraping"],
		award: "1st Overall @ RevolutionUC '21",
		description: "Web application that provides trending Instagram hashtags directly based on user-uploaded images with webscraping and machine learning"
	},
	// {
	// 	title: "Swing Tic Tac Toe",
	// 	link: "https://github.com/rolandyangg/tic-tac-toe",
	// 	image: "projects/tictactoegif.gif",
	// 	tech: ["Java", "Swing"],
	// 	award: null
	// }
]

// https://chakra-ui.com/docs/components/flex
export default function Home() {
  return (
	<>
	<Helmet>
		<title>roland yang | personal website</title>
	</Helmet>
    <ChakraProvider theme={theme}>

		<Navbar/>

		<Center justify="center" p={{base: 0, mdd: "100px"}}>
			<VStack spacing={3}>
			<Flex direction={{ base: "column", mdd: "row"}} justify="center" align="center" flexWarp="wrap">
			<Center mx="30px" my="20px">
				<Image alt='Roland Yang' src="/hsgradpic.jpeg" borderRadius="lg" maxW="350px"/>
			</Center>
			<VStack mx="30px" align="left" maxW="600px">
				<Heading fontSize="5xl">hey 👋</Heading>
				<Heading fontSize="4xl">my name is <Text bgGradient='linear(to-l, #1ccbe2, #e96dff)'
	bgClip='text' as="span" >roland yang</Text></Heading>
				<Text fontSize="xl">welcome to my little website 💻</Text>
				<Text fontSize="xl">i’m an undergraduate student studying computer science at ucla 🐻 </Text>
				<Flex direction={{ base: "column", lgg: "row"}} justify="center" align="center" flexWarp="wrap" fontSize="lg" py="10px">
					<Flex>
						{buttons[0].map((button, i) => {
							return <Link _hover={{ }} key={i} href={button.link} isExternal><Button color="white" _hover={{ backgroundColor: "blue.800", borderColor: "blue.300" }} variant='outline' mx="5px" my="5px" leftIcon={button.icon}>{button.text}</Button></Link>
						})}
					</Flex>
					<Flex>
						{buttons[1].map((button, i) => {
							return <Link _hover={{ }} key={i} href={button.link} isExternal><Button color="white" _hover={{ backgroundColor: "blue.800", borderColor: "blue.300" }} variant='outline' mx="5px" my="5px" leftIcon={button.icon}>{button.text}</Button></Link>
						})}
					</Flex>
				</Flex>
			</VStack>
				</Flex>
				<Text maxW="90%" justify="center" align="center" pt={5}>i am seeking full-time roles related to software engineering, data engineering, or product management, however all opportunities are greatly appreciated!</Text>
				<Text maxW="90%" justify="center" align="center">feel free to reach out via any of my provided socials!</Text>
			</VStack>
		</Center>

		<Center>
			<Divider p="30px" borderColor="whiteAlpha.500" w="1300px"/>
		</Center>

		<Center justify="center" p={{base: "25px", mdd: "100px"}}>
		<VStack>
			<Heading mb="15px">featured projects</Heading>
			<Flex justify="center" align="center" flexWrap="wrap" maxW="1200px">
				{featuredProjects.map((project, i) => {
					return <ProjectCard title={project.title} link={project.link} image={project.image} tech={project.tech} award={project.award} description={project.description} key={i}/>
				})}
			</Flex>
			<GatsbyLink to="/projects"><Text fontSize="xl" color="whiteAlpha.700" _hover={{color: "white"}}>view all</Text></GatsbyLink>
		</VStack>
		</Center>

		<Center>
			<Divider p="30px" borderColor="whiteAlpha.500" w="1300px"/>
		</Center>

		<Center justify="center" p={{base: "50px", mdd: "100px"}}>
			<Flex direction={{ base: "column", md: "row"}} justify="space-between" align="center" flexWarp="wrap" w="100%" maxW="800px">
				<VStack my="10px">
					<Heading>contact</Heading>
					<Text>i promise i'm a nice person</Text>
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
	</>
  );
}
