import * as React from 'react'
import { ChakraProvider, Box, VStack, Text, Heading, Center, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import UnderlineLink from '../../components/underlinelink'
import theme from "../../theme"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { Helmet } from 'react-helmet'

export default function Coursework() {
    return (<>
        <Helmet>
            <title>roland yang | coursework</title>
        </Helmet>
        <ChakraProvider theme={theme}>

            <Navbar/>

            {/** RELEVANT COURSEWORK */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="95%" maxW="1100px">
                    <Heading py="10px">relevant coursework 📚</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl">
                        <Text fontWeight="bold" fontSize="2xl">computer science</Text>
                        <UnorderedList>
                            <UnderlineLink href="https://github.com/rolandyangg/notate"><ListItem>human computer interaction (CS 188)</ListItem></UnderlineLink>
                            <ListItem>theory of computing (CS 181)</ListItem>
                            <ListItem>intro to algorithms and complexity (CS 180)</ListItem>
                            <ListItem>computer animation (CS C174C)</ListItem>
                            <UnderlineLink href="https://github.com/rolandyangg/CS174A"><ListItem>intro to computer graphics (CS 174A)</ListItem></UnderlineLink>
                            <ListItem>fundamentals of artificial intelligence (CS 161)</ListItem>
                            <UnderlineLink href="https://github.com/wzsmith/cs145-pst"><ListItem>data mining (CS 145)</ListItem></UnderlineLink>
                            <ListItem>web applications (CS 144)</ListItem>
                            <ListItem>data management systems (CS 143)</ListItem>
                            <ListItem>programming languages (CS 131)</ListItem>
                            <ListItem>software engineering (CS 130)</ListItem>
                            <UnderlineLink href="https://github.com/rolandyangg/C122"><ListItem>algorithms in computational genomics (CS C122)</ListItem></UnderlineLink>
                            <ListItem>computer network fundamentals (CS 118)</ListItem>
                            <UnderlineLink href="https://github.com/rolandyangg/CS111"><ListItem>operating systems principles (CS 111)</ListItem></UnderlineLink>
                            <UnderlineLink href="https://github.com/rolandyangg/CS35L"><ListItem>software construction lab (CS 35L)</ListItem></UnderlineLink>
                            <ListItem>computer systems architecture (CS M151B)</ListItem>
                            <ListItem>introductory digital design laboratory (CS M152A)</ListItem>
                            <ListItem>logic design of digital systems (CS M15A)</ListItem>
                            <ListItem>intro to computer organization (CS 33)</ListItem>
                            <ListItem>data structures in c++ (CS 32)</ListItem>
                            <ListItem>object-oriented programming in c++ (CS 31)</ListItem>
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">math</Text>
                        <UnorderedList>
                            <ListItem>statistics and probability (STATS 100A)</ListItem>
                            <ListItem>discrete structures (MATH 61)</ListItem>
                            <ListItem>linear algebra and applications (MATH 33A)</ListItem>
                            <ListItem>differential equations (MATH 33B)</ListItem>
                            <ListItem>multivariable calculus (MATH 32A/B)</ListItem>    
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">business</Text>
                        <UnorderedList>
                            <ListItem>engineering of complex systems (ENG 180)</ListItem>
                            <ListItem>real estate finance and investments (MGMT 170)</ListItem>
                            <ListItem>intro to technology management and economics (ENGR 110)</ListItem>
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">science</Text>
                        <UnorderedList>
                            <ListItem>electrodynamics, optics, and special relativity (PHYSICS 1C)</ListItem>
                            <ListItem>oscillations, waves, electric and magnetic Fields (PHYSICS 1B)</ListItem>
                            <ListItem>mechanics physics lab (PHYSICS 4AL)</ListItem>
                        </UnorderedList>   
                        <br/>                
                        <Text fontWeight="bold" fontSize="2xl">miscellaneous</Text>
                        <UnorderedList>
                            <ListItem>food studies: ecocultural sustainability and diversity (M25)</ListItem>
                            <ListItem>engineering and society (ENG 183EW)</ListItem>
                            <ListItem>anime (JAPAN 75)</ListItem>
                            <ListItem>intro to geographic information systems (GEO 7)</ListItem>
                            <ListItem>languages and cultures of asia (ASIA 30)</ListItem>
                            <ListItem>introduction to architectural studies (ARCH&UD 30)</ListItem>
                            <ListItem>intro machine learning (ENGR 96)</ListItem>
                            <ListItem>symphonic band (MUSC 185F)</ListItem>
                            <ListItem>the disc jockey as performer (MSC IND 117)</ListItem>  
                        </UnorderedList>
                    </Box>
                    <Center>
                        <Text fontSize="xl">⭐ bonus: <UnderlineLink href="https://drive.google.com/drive/folders/1fOyZMKpHuVqZYyb7EaZt1O-udgdlGikA?usp=sharing">the roland test bank</UnderlineLink> 🤓</Text>
                    </Center>
                </VStack>
            </Center>

            <Center mb={{base: "25px", md: "100px"}}>
                <GatsbyLink to="/about"><Text fontSize="xl" textDecoration="underline" color="whiteAlpha.700" _hover={{color: "white"}}>← back to background/experience</Text></GatsbyLink>
            </Center>

            <Footer/>

        </ChakraProvider>
        </>);
}
