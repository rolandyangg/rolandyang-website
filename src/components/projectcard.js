import * as React from 'react'
import { useState } from 'react'
import { Card, Tag, Flex, VStack, Image, CardBody, Link, Text } from '@chakra-ui/react';

function Award({award}) {
    if (award != null)
        return <Tag fontSize='0.7em' variant="outline" >{award}</Tag>;
    else
        return;
}

export default function ProjectCard({title, link, image, tech, award, description}) {
    const awardExists = award != null;
    const [ showDescription, setHovering ] = useState(false);
    return (<>
        <Card mx="10px" my="10px" overflow='hidden' variant='outline' w="350px" bgColor="blackAlpha.300">
                <Image
                    w="350px"
                    h="200px"
                    objectFit='cover'
                    opacity={showDescription ? 0.15 : 1}
                    src={image}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    transition="opacity 0.1s ease-in-out"
                    zIndex="1"
                />
                { showDescription && 
                    <Flex
                        position="absolute"
                        w="350px"
                        h="200px"
                        p="30px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        zIndex="0"
                    >
                        <Text size="1.3em" color="white" zIndex="2">{description}</Text>
                    </Flex>
                }
            <CardBody mt="-7px">
                <VStack align="start" h="90px">
                    <Flex align="center" justify="space-between" w="100%">
                        <Link color="white" fontWeight="semibold" fontSize="lg" href={link} isExternal>
                            {title}
                        </Link>
                        <Award award={award}/>
                    </Flex>
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