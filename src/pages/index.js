import * as React from 'react'
import { ChakraProvider, Flex, HStack, VStack, Stack, Box, Text, Heading, Image, Center, extendTheme, Button } from '@chakra-ui/react'

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

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Center p="50px" h="100vh">
        <Stack direction={{ base: "column", md: "row"}} justify="center" flexWarp="wrap">
          <Center>
            <Image alt='Roland Yang' src="/hsgradpic.jpeg" borderRadius="lg" maxW="350px"/>
          </Center>
          <VStack mx="25px" align="left">
            <Heading fontSize="5xl">hey 👋</Heading>
            <Heading fontSize="4xl">my name is roland yang</Heading>
            <Text>welcome to my website</Text>
            <Text>feel free to explore</Text>
          </VStack>
        </Stack>
      </Center>
    </ChakraProvider>
  );
}
