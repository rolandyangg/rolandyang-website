import * as React from 'react'
import { ChakraProvider, Icon, Flex, HStack, VStack, Stack, Box, Button, Link, Text, Heading, Image, Center, extendTheme, Spacer } from '@chakra-ui/react'
import { FaDev, FaGithub, FaEnvelope, FaLinkedin, FaFolderOpen } from 'react-icons/fa'
import Navbar from '../components/navbar'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
		secondary: "#171a23",
		primary: "#ffffff",
	},
	styles: {
		global: () => ({
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "white",
				backgroundColor: "secondary",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "primary",
				borderRadius: "50px",
			},
		}),
	},
})

const buttons = [
	[
		{
			icon: <FaEnvelope/>,
			link: "mailto:rolandyang@ucla.edu",
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

const menuItems = [
    {
        name: "Background/Experience",
        link: "/about"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Scenery",
        link: "/scenery"
    },
    {
        name: "Resume",
        link: "/resume"
    },
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
            <Text fontSize="xl">i’m an undergraduate student studying computer science at ucla (go bwuins! 🐻). i like to code and do a bunch of other stuff 👨‍💻🥁🎥🏐🎮.</Text>
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
    </ChakraProvider>
  );
}
