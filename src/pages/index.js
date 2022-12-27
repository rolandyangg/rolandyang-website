import * as React from 'react'
import { ChakraProvider, Flex, HStack, VStack, Stack, Box, Link, Text, Heading, Image, Center, extendTheme, Spacer, Button } from '@chakra-ui/react'

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

// https://chakra-ui.com/docs/components/flex
export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Center p="50px" justify="center" h="100vh">
		<VStack>
        <Flex direction={{ base: "column", md: "row"}} justify="center" align="center" flexWarp="wrap">
          <Center my="25px" mx="30px">
            <Image alt='Roland Yang' src="/hsgradpic.jpeg" borderRadius="lg" maxW="350px"/>
          </Center>
          <VStack mx="30px" align="left" maxW="600px">
            <Heading fontSize="5xl">hey 👋</Heading>
			<Heading fontSize="4xl">my name is <Text bgGradient='linear(to-l, #1ccbe2, #e96dff)'
  bgClip='text' as="span" >roland yang</Text></Heading>
            <Text fontSize="xl">welcome to my little website 💻</Text>
            <Text fontSize="xl">i’m an undergraduate student studying computer science at ucla (go bwuins! 🐻). i like to code and do a bunch of other stuff 👨‍💻🥁🎥🏐🎮.</Text>
			<HStack fontSize="lg" py="10px">
				<Link href="mailto:rolandyang@ucla.edu">Email</Link>
				<Link href="https://github.com/rolandyangg">GitHub</Link>
				<Link href="https://www.linkedin.com/in/yangroland/">LinkedIn</Link>
				<Link href="https://devpost.com/rolandyang">DevPost</Link>
				<Link href="https://drive.google.com/file/d/1_IOzmp8a8JdewSncNE274h6pOH8LVXdL/view?usp=sharing">Resume/CV</Link>
			</HStack>
		  </VStack>
        </Flex>
		<Text justify="center" align="center">currently i am seeking internships in software engineering, however all opportunities are greatly appreciated!</Text>
		<Text justify="center" align="center">feel free to reach out via any of my provided socials!
</Text>
		</VStack>
      </Center>
    </ChakraProvider>
  );
}
