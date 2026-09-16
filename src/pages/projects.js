import * as React from 'react'
import { ChakraProvider, Center, Link, VStack, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaDev, FaGithub } from 'react-icons/fa'
import theme from "../theme"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/projectcard'
import { Helmet } from 'react-helmet'

// const shuffle = arr => [...arr].sort(() => Math.random() - 0.5); // projects are date-sorted now

let projects = [
	{
		title: "backmusic",
		date: "2026-06-17",
		link: "https://github.com/rolandyangg/backmusic_extension",
		image: "backmusic.gif",
		tech: ["React", "Spicetify", "Claude 🤡"],
		award: null,
		description: "Highly Customizable Audio-Visualizer Spotify Backdrop"
	},
	{
		title: "branchline",
		date: "2026-02-03",
		link: "https://www.branchline.org/",
		image: "branchline.png",
		tech: ["React", "Drizzle", "Neo", "Clerk", "JavaScript", "react-flow", "Next.js"],
		award: null,
		description: "A web application that allows people and organizations to easily create and customize rich lineage/family trees and host them online"
	},
	{
		title: "ACA Family Tree",
		date: "2025-06-16",
		link: "https://github.com/rolandyangg/aca-family-tree",
		image: "aca_family.png",
		tech: ["React", "Javascript", "Graphs", "react-flow", "Data Structures"],
		award: null,
		description: "Interactive Family Tree visualizations for the Association of Chinese Americans at UCLA staff members, dating back to 2014"
	},
	{
		title: "Crossy Bruin",
		date: "2025-05-09",
		link: "https://github.com/rolandyangg/crossy-bruin",
		image: "crossybruin.gif",
		tech: ["Three.js", "Javascript", "Computer Graphics"],
		award: null,
		description: "Endless-runner arcade game themed around UCLA student getting to class"
	},
	{
		title: "Notate",
		date: "2025-05-16",
		link: "https://github.com/rolandyangg/notate",
		image: "notate_example.jpg",
		tech: ["React", "Typescript", "Human-Computer Interaction", "User Research"],
		award: null,
		description: "A lightweight, minimalist text editor designed to make integrating annotations and visuals easier"
	},
    {
		title: "Sorting Algorithm Visualizer",
		date: "2023-01-01",
		link: "https://github.com/rolandyangg/sorting-algorithm-visualizer",
		image: "bubblesortsample.gif",
		tech: ["C++", "SFML"],
		award: null,
		description: "GUI visualization of several popular sorting algorithms on a set of data"
	},
	{
		title: "Coding Interview CLI",
		date: "2021-03-31",
		link: "https://github.com/rolandyangg/interview-cli",
		image: "codinginterviewsample.png",
		tech: ["Javascript", "Node.js", "Firebase"],
		award: null,
		description: "Command Line Interface designed for creating, designing, assigning, and taking live coding interviews"
	},
	{
		title: "vizAsianHate",
		date: "2021-07-30",
		link: "https://devpost.com/software/stop-aapi-hate-dashboard",
		image: "vizasianhatesample.jpg",
		tech: ["React", "Next.js", "ChakraUI", "Vercel", "APIs"],
		award: "Most Interactive @ Vizathon '21",
		description: "Dynamic website containing interactive data visualizations displaying AAPI hate crime data"
	},
	{
		title: "NoMoAcne",
		date: "2021-02-13",
		link: "https://devpost.com/software/nomoacne",
		image: "nomoacnesample.png",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Clarifai"],
		award: "2nd Overall @ GunnHacks 7.0",
		description: "Web application that diagnoses acne severity and recommends appropriate treatment based on user-uploaded selfies"
	},
	{
		title: "SecureTheTag",
		date: "2021-02-20",
		link: "https://devpost.com/software/securethetag",
		image: "securethetagsample.jpg",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "Webscraping"],
		award: "1st Overall @ RevolutionUC '21",
		description: "Web application that provides trending Instagram hashtags directly based on user-uploaded images with webscraping and machine learning"
	},
	{
		title: "Swing Tic Tac Toe",
		date: "2020-03-15",
		link: "https://github.com/rolandyangg/tic-tac-toe",
		image: "tictactoegif.gif",
		tech: ["Java", "Swing"],
		award: null
	},
    // {
	// 	title: "Trie CLI",
	// 	link: "https://github.com/rolandyangg/trie-system",
	// 	image: "trie_example.png",
	// 	tech: ["Javascript", "Node.js", "Express"],
	// 	award: null
	// },
    {
		title: "ProfessorAI",
		date: "2021-03-23",
		link: "https://devpost.com/software/name-xazq3o",
		image: "professoraisample.png",
		tech: ["HTML/CSS", "Bootstrap", "Express", "Node.js", "Google Cloud Platform", "APIs", "NLP"],
		award: "3rd Overall @ LingHacks III",
		description: "NLP web application that summarizes lectures and textbooks, providing in-depth notes"
	},
    {
		title: "CorgiCuisine",
		date: "2021-03-06",
		link: "https://devpost.com/software/corgifeeds",
		image: "corgicuisinesample.png",
		tech: ["Arduino", "C++"],
		award: "1st Overall @ MLH CorgiHacks",
		description: "Automatic dog food dispenser made out of cardboard :3"
	},
    {
		title: "Personal Website",
		date: "2022-12-24",
		link: "https://github.com/rolandyangg/rolandyang-website",
		image: "personalwebsitesample.png",
		tech: ["React", "Gatsby", "ChakraUI", "Netlify"],
		award: null,
		description: "my website <3"
	},
    {
		title: "PDF Anonymizer",
		date: "2021-04-05",
		link: "https://github.com/rolandyangg/pdf-anonymize",
		image: "pdfanonymizersample.png",
		tech: ["Python"],
		award: null,
		description: "Python script that redacts personal identifiable information in pdf and txt files"
	},
	{
		title: "Peach Party",
		date: "2023-03-06",
		link: "https://github.com/rolandyangg/peach-party",
		image: "peachpartyscreenshot.png",
		tech: ["C++"],
		award: null,
		description: "2D two-player video game clone of Mario Party made in C++ exercising OOP Design Principles including Polymorphism and Inheritance"
	},
	{
		title: "ChainChimp",
		date: "2023-04-22",
		link: "https://github.com/rolandyangg/chainchimp",
		image: "chainchimplanding.png",
		tech: ["React", "Solidity", "Blockchain", "Web3"],
		award: "Gode Challenge @ LA Hacks 2023",
		description: "Blockchain decentralized tracability web application for the supply chain management ecosystem"
	},
	{
		title: "Pnetphlix",
		date: "2023-04-05",
		link: "https://github.com/rolandyangg/pnetphlix",
		image: "pnetphlixphoto.png",
		tech: ["C++", "Data Structures"],
		award: null,
		description: "Program exercising data structure design and usage to efficiently generate movie recommendations from a database of 140,000 entities"
	},
	{
		title: "BruinShare",
		date: "2023-05-01",
		link: "https://github.com/rolandyangg/BruinShare",
		image: "bruinsharepreview.png",
		tech: ["FERN", "Firebase", "Express.js", "React", "Node.js", "AWS", "MaterialUI", "Next.js"],
		description: "Full-stack centralized ridesharing platform designed for UCLA students"
	},
	{
		title: "Pigzj",
		date: "2024-02-20",
		link: "https://github.com/rolandyangg/Pigzj",
		image: "PigzjUsage.png",
		tech: ["Java", "Multithreading", "Compression"],
		description: "Multithreaded Java implementation of popular gzip compressor (~3x faster compression speed)"
	}
]

projects = [...projects].sort((a, b) => b.date.localeCompare(a.date)); // newest first

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
                        <Link href="https://github.com/rolandyangg" isExternal display="inline-block" transition="transform 0.2s ease-out" _hover={{transform: "translateY(-3px)"}}><Icon boxSize={8} as={FaGithub}/></Link>
                        <Heading mb="15px" mx="10px">projects</Heading>
                        <Link href="https://devpost.com/rolandyang" isExternal display="inline-block" transition="transform 0.2s ease-out" _hover={{transform: "translateY(-3px)"}}><Icon boxSize={8} as={FaDev}/></Link>
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