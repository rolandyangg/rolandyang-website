import * as React from 'react'
import { Card, Tag, Flex, VStack, Image, CardBody, Link } from '@chakra-ui/react';

function Award({award}) {
    if (award != null)
        return <Tag size="sm" variant="outline" >{award}</Tag>;
    else
        return;
}

export default function ProjectCard({title, link, image, tech, award}) {
    const awardExists = award != null;
    return (<>
        <Card mx="10px" my="10px"  overflow='hidden' variant='outline' maxW="350px" bgColor="blackAlpha.300">
                <Image
                    w="350px"
                    h="200px"
                    objectFit='cover'
                    src={image}
                />
            <CardBody mt="-7px">
                <VStack align="start" h="90px">
                    <Flex align="center" justify="space-between" w="100%">
                        <Link color="white" fontWeight="semibold" fontSize="lg" href={link}>
                            {title}
                        </Link>
                        <Award award={award}/>
                    </Flex>
                    <Flex flexWrap="wrap">
                        {tech.map((tag, i) => {
                            return <Tag variant="outline" color="white" borderRadius='full' mx="2px" my="2px" key={i}>{tag}</Tag>
                        })}
                    </Flex>
                </VStack>
            </CardBody>
        </Card>
        </>);
}