import * as React from 'react'
import { Center, Divider, VStack, Text, Link, Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (<>
        <Center>
            <Divider p="10px" borderColor="whiteAlpha.500" w="1300px"/>
        </Center>

        <Center justify="center" p="50px" color="whiteAlpha.700">
            <VStack>
                <Text>❤️ made by roland yang ❤️</Text>
                <Link href="https://github.com/rolandyangg/rolandyang-website" isExternal><Icon as={FaGithub}/></Link>
            </VStack>
        </Center>
    </>)
}