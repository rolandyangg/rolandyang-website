import * as React from 'react'
import { ChakraProvider, Icon, Box, Flex, VStack, Button, Link, Text, Heading, Image, Center, Divider, List, UnorderedList, ListItem } from '@chakra-ui/react'
import theme from "../theme"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function About() {
    return (<>
        <ChakraProvider theme={theme}>

            <Navbar/>

            {/** ABOUT */}

            {/** EDUCATION */}

            {/** WORK EXPERIENCE */}

            {/** ODD JOBS */}

            {/** VOLUNTEERING */}

            {/** RELEVANT COURSEWORK */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="90%" maxW="1100px">
                    <Heading py="10px">relevant coursework 📚</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl">
                        <Text fontWeight="bold" fontSize="2xl">computer science</Text>
                        <UnorderedList>
                            <ListItem>data structures in c++ (CS 32)</ListItem>
                            <ListItem>object-oriented programming in c++ (CS 31)</ListItem>
                        </UnorderedList>
                        <br/>
                        <Text fontWeight="bold" fontSize="2xl">math</Text>
                        <UnorderedList>
                            <ListItem>introduction to discrete structures (MATH 61)</ListItem>
                            <ListItem>differential equations (MATH 33B)</ListItem>
                            <ListItem>multivariable calculus (MATH 32A/B)</ListItem>    
                        </UnorderedList>   
                        <br/>                
                        <Text fontWeight="bold" fontSize="2xl">miscellaneous</Text>
                        <UnorderedList>
                            <ListItem>introduction to architectural studies (ARCH&UD 30)</ListItem>
                            <ListItem>symphonic band (MUSC 185F)</ListItem>  
                        </UnorderedList>
                    </Box>
                </VStack>
            </Center>

            {/** ACHIEVEMENTS/AWARDS */}
            <Center m={{base: "25px", md: "100px"}}>
                <VStack border="1px" p="20px" rounded={7} w="90%" maxW="1100px">
                    <Heading py="10px">awards/achievements 🏆</Heading>
                    <Divider/>
                    <Box justify="center" py="10px" fontSize="xl">
                        <UnorderedList>
                            <ListItem>8x hackathon project wins</ListItem>
                            <UnorderedList>
                                <ListItem>Most Interactive Project & Top 12 Overall @ Vizathon 2021</ListItem>
                                <ListItem>3rd Place Overall @ LinkHacks III</ListItem>
                                <ListItem>2nd Place Overall & Best Domain @ GunnHacks 7.0</ListItem>
                                <ListItem>Best Design Hack @ HackTJ 8.0</ListItem>
                                <ListItem>Best Social Good Hack @ Hack-2-Connect 3.0</ListItem>
                                <ListItem>Best Domain @ WinHacks 2021</ListItem>
                                <ListItem>1st Place Overall & Best Hardware @ MLH CorgiHacks</ListItem>
                                <ListItem>Prudential Alexa Prize @ hackMCST VI</ListItem>
                            </UnorderedList>
                            <ListItem>american computer science league intermediate division gold 2021</ListItem>
                            <ListItem>voted best gamer by the brhs class of 2022</ListItem>
                        </UnorderedList>
                    </Box>
                </VStack>
            </Center>

            {/** HOBBIES */}

            {/** SOCIALS */}

            <Footer/>

        </ChakraProvider>
        </>);
}