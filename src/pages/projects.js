import * as React from 'react'
import { ChakraProvider, Center, VStack, Heading, Flex } from "@chakra-ui/react";
import theme from "../theme"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ProjectCard from '../components/projectcard'

const projects = [
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
	{
		title: "Swing Tic Tac Toe",
		link: "https://github.com/rolandyangg/tic-tac-toe",
		image: "tictactoegif.gif",
		tech: ["Java", "Swing"],
		award: null
	}
]

export default function Projects() {
    return (<>
        <ChakraProvider theme={theme}>
            <Navbar/>

            <Center justify="center" p={{base: "25px", md: "100px"}}>
                <VStack>
                    <Heading mb="15px">projects</Heading>
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