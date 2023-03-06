import * as React from 'react'
import { ChakraProvider, Center, Link, VStack, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaDev, FaGithub } from 'react-icons/fa'
import theme from "../theme"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/projectcard'

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

let projects = [
    {
		title: "Sorting Algorithm Visualizer",
		link: "https://github.com/rolandyangg/sorting-algorithm-visualizer",
		image: "bubblesortsample.gif",
		tech: ["C++", "SFML"],
		award: null
	},
	{
		title: "Coding Interview CLI",
		link: "https://github.com/rolandyangg/interview-cli",
		image: "codinginterviewsample.png",
		tech: ["Javascript", "Node.js", "Firebase"],
		award: null
	},
	{
		title: "vizAsianHate",
		link: "https://devpost.com/software/stop-aapi-hate-dashboard",
		image: "vizasianhatesample.jpg",
		tech: ["React", "Next.js", "ChakraUI", "Vercel", "APIs"],
		award: "Most Interactive @ Vizathon '22"
	},
	{
		title: "NoMoAcne",
		link: "https://devpost.com/software/nomoacne",
		image: "nomoacnesample.png",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Clarifai"],
		award: "2nd Overall @ GunnHacks 7.0"
	},
	{
		title: "SecureTheTag",
		link: "https://devpost.com/software/securethetag",
		image: "securethetagsample.jpg",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Webscraping"],
		award: "1st Overall @ RevolutionUC '21"
	},
	// {
	// 	title: "Swing Tic Tac Toe",
	// 	link: "https://github.com/rolandyangg/tic-tac-toe",
	// 	image: "tictactoegif.gif",
	// 	tech: ["Java", "Swing"],
	// 	award: null
	// },
    // {
	// 	title: "Trie CLI",
	// 	link: "https://github.com/rolandyangg/trie-system",
	// 	image: "trie_example.png",
	// 	tech: ["Javascript", "Node.js", "Express"],
	// 	award: null
	// },
    {
		title: "ProfessorAI",
		link: "https://devpost.com/software/name-xazq3o",
		image: "professoraisample.png",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "APIs", "NLP"],
		award: "3rd Overall @ LingHacks III"
	},
    {
		title: "CorgiCuisine",
		link: "https://devpost.com/software/corgifeeds",
		image: "corgicuisinesample.png",
		tech: ["Arduino", "C++"],
		award: "1st Overall @ MLH CorgiHacks"
	},
    {
		title: "Personal Website",
		link: "https://github.com/rolandyangg/rolandyang-website",
		image: "personalwebsitesample.png",
		tech: ["React", "Gatsby", "ChakraUI", "Netlify"],
		award: null
	},
    {
		title: "PDF Anonymizer",
		link: "https://github.com/rolandyangg/pdf-anonymize",
		image: "pdfanonymizersample.png",
		tech: ["Python"],
		award: null
	},
	{
		title: "Peach Party",
		link: "https://github.com/rolandyangg/peach-party",
		image: "peachpartyscreenshot.png",
		tech: ["C++"],
		award: null
	},
]

projects = shuffle(projects); 

export default function Projects() {
    return (<>
        <ChakraProvider theme={theme}>
            <Navbar/>

            <Center justify="center" p={{base: "25px", md: "100px"}}>
                <VStack>
                    <Flex justify="space-between" align="center" flexWrap="wrap" w="90%" maxW="1200px">
                        <Link href="https://github.com/rolandyangg" isExternal><Icon boxSize={8} as={FaGithub}/></Link>
                        <Heading mb="15px" mx="10px">projects</Heading>
                        <Link href="https://devpost.com/rolandyang" isExternal><Icon boxSize={8} as={FaDev}/></Link>
                    </Flex>
                    <Flex justify="center" align="center" flexWrap="wrap" maxW="1200px">
                        {projects.map((project, i) => {
                            return <ProjectCard title={project.title} link={project.link} image={project.image} tech={project.tech} award={project.award} key={i}/>
                        })}
                    </Flex>
                </VStack>
            </Center>

            <Footer/>
        </ChakraProvider>
        </>);
}