import * as React from 'react'
import { Text, Center, Flex, Link, HStack, Box, Image, Heading } from '@chakra-ui/react'

const menuItems = [
    {
        name: "background/experience",
        link: "/about"
    },
    {
        name: "projects",
        link: "/projects"
    },
    {
        name: "scenery",
        link: "/scenery"
    },
    {
        name: "resume",
        link: "/resume"
    },
]

export default function Navbar() {
    return (
        <Center justify="center">
        <Box maxW="1100px" w="100%" mx="25px" pt={{base: 0, sm: 5}}>
            <Flex align="center" justify="space-between" flexDir={{ base: "column", md: "row" }} p="20px">
                <Flex>
                    <Image/>
                    <Heading fontSize="3xl">roland yang</Heading>
                </Flex>
                <HStack spacing={6} flexWrap="wrap" justify="center">
                    {menuItems.map((menuItem, i) => {
                        return <Link color="whiteAlpha.700" fontSize="xl" key={i}>{menuItem.name}</Link>;
                    })}
                </HStack>
            </Flex>
        </Box>
        </Center>
    )
}