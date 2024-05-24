import * as React from 'react'
import { ChakraProvider, Center, Link, VStack, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaDev, FaGithub } from 'react-icons/fa'
import theme from "../theme"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/projectcard'
import { Helmet } from 'react-helmet'

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

let projects = [
    {
		title: "Sorting Algorithm Visualizer",
		link: "https://github.com/rolandyangg/sorting-algorithm-visualizer",
		image: "bubblesortsample.gif",
		tech: ["C++", "SFML"],
		award: null,
		description: "GUI visualization of several popular sorting algorithms on a set of data"
	},
	{
		title: "Coding Interview CLI",
		link: "https://github.com/rolandyangg/interview-cli",
		image: "codinginterviewsample.png",
		tech: ["Javascript", "Node.js", "Firebase"],
		award: null,
		description: "Command Line Interface designed for creating, designing, assigning, and taking live coding interviews"
	},
	{
		title: "vizAsianHate",
		link: "https://devpost.com/software/stop-aapi-hate-dashboard",
		image: "vizasianhatesample.jpg",
		tech: ["React", "Next.js", "ChakraUI", "Vercel", "APIs"],
		award: "Most Interactive @ Vizathon '22",
		description: "Dynamic website containing interactive data visualizations displaying AAPI hate crime data"
	},
	{
		title: "NoMoAcne",
		link: "https://devpost.com/software/nomoacne",
		image: "nomoacnesample.png",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Clarifai"],
		award: "2nd Overall @ GunnHacks 7.0",
		description: "Web application that diagnoses acne severity and recommends appropriate treatment based on user-uploaded selfies"
	},
	{
		title: "SecureTheTag",
		link: "https://devpost.com/software/securethetag",
		image: "securethetagsample.jpg",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Webscraping"],
		award: "1st Overall @ RevolutionUC '21",
		description: "Web application that provides trending Instagram hashtags directly based on user-uploaded images with webscraping and machine learning"
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
		award: "3rd Overall @ LingHacks III",
		description: "NLP web application that summarizes lectures and textbooks, providing in-depth notes"
	},
    {
		title: "CorgiCuisine",
		link: "https://devpost.com/software/corgifeeds",
		image: "corgicuisinesample.png",
		tech: ["Arduino", "C++"],
		award: "1st Overall @ MLH CorgiHacks",
		description: "Automatic dog food dispenser made out of cardboard :3"
	},
    {
		title: "Personal Website",
		link: "https://github.com/rolandyangg/rolandyang-website",
		image: "personalwebsitesample.png",
		tech: ["React", "Gatsby", "ChakraUI", "Netlify"],
		award: null,
		description: "my website <3"
	},
    {
		title: "PDF Anonymizer",
		link: "https://github.com/rolandyangg/pdf-anonymize",
		image: "pdfanonymizersample.png",
		tech: ["Python"],
		award: null,
		description: "Python script that redacts personal identifiable information in pdf and txt files"
	},
	{
		title: "Peach Party",
		link: "https://github.com/rolandyangg/peach-party",
		image: "peachpartyscreenshot.png",
		tech: ["C++"],
		award: null,
		description: "2D two-player video game clone of Mario Party made in C++ exercising OOP Design Principles including Polymorphism and Inheritance"
	},
	{
		title: "ChainChimp",
		link: "https://github.com/rolandyangg/chainchimp",
		image: "chainchimplanding.png",
		tech: ["React", "Solidity", "Blockchain", "Web3"],
		award: "Gode Challenge @ LA Hacks 2023",
		description: "Blockchain decentralized tracability web application for the supply chain management ecosystem"
	},
	{
		title: "Pnetphlix",
		link: "https://github.com/rolandyangg/pnetphlix",
		image: "pnetphlixphoto.png",
		tech: ["C++", "Data Structures"],
		award: null,
		description: "Program exercising data structure design and usage to efficiently generate movie recommendations from a database of 140,000 entities"
	},
	{
		title: "BruinShare",
		link: "https://github.com/rolandyangg/BruinShare",
		image: "bruinsharepreview.png",
		tech: ["FERN", "Firebase", "Express.js", "React", "Node.js", "AWS", "MaterialUI", "Next.js"],
		description: "Full-stack centralized ridesharing platform designed for UCLA students"
	},
	{
		title: "Pigzj",
		link: "https://github.com/rolandyangg/Pigzj",
		image: "PigzjUsage.png",
		tech: ["Java", "Multithreading", "Compression"],
		description: "Multithreaded Java implementation of popular gzip compressor (~3x faster compression speed)"
	}
]

projects = shuffle(projects); 

export default function Projects() {
    return (<>
		<Helmet>
			<title>roland yang | projects</title>
		</Helmet>
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
                            return <ProjectCard title={project.title} link={project.link} image={project.image} tech={project.tech} award={project.award} description={project.description} key={i}/>
                        })}
                    </Flex>
                </VStack>
            </Center>

            <Footer/>
        </ChakraProvider>
        </>);
}