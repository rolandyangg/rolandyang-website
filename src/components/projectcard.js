import * as React from 'react'
import { Card, Tag, Flex, VStack, Image, CardBody, Link, Text } from '@chakra-ui/react';

function Award({award}) {
    if (award != null)
        return <Tag fontSize='0.7em' variant="outline" >{award}</Tag>;
    else
        return;
}

export default function ProjectCard({title, link, image, tech, award, description}) {
    return (<>
        <Card 
            mx="10px" 
            my="10px" 
            overflow='hidden' 
            variant='outline' 
            w="350px" 
            h="425px" 
            bgColor="blackAlpha.300"
            transition="all 0.2s"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
            }}
        >
                <Link href={link} isExternal>
                    <Image
                        w="350px"
                        h="200px"
                        objectFit='cover'
                        src={image}
                    />
                </Link>
            <CardBody mt="-7px">
                <VStack align="start" h="auto">
                    <Flex align="center" justify="space-between" w="100%">
                        <Link color="white" fontWeight="semibold" fontSize="lg" href={link} isExternal>
                            {title}
                        </Link>
                        <Award award={award}/>
                    </Flex>
                    <Text fontSize="sm" color="whiteAlpha.800" mb="2">
                        {description}
                    </Text>
                    <Flex flexWrap="wrap">
                        {tech.map((tag, i) => {
                            return <Tag fontSize='0.80em' variant="outline" color="white" borderRadius='full' mx="2px" my="2px" key={i}>{tag}</Tag>
                        })}
                    </Flex>
                </VStack>
            </CardBody>
        </Card>
        </>);
}