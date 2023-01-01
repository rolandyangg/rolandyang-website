import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme"
import Navbar from '../components/navbar'

export default function Projects() {
    return (<>
        <ChakraProvider theme={theme}>
            <Navbar/>
        </ChakraProvider>
        </>);
}