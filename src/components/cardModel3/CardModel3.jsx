import React from 'react'
// import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, IconButton, BsThreeDotsVertical, Button, BiChat, BiLike, BiShare } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react';
import { CardHeader } from '@chakra-ui/react';
import { CardBody } from '@chakra-ui/react';
import { CardFooter } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
// import { Avatar } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';


import imagem from '@/public/img/logo.png';
// import { BsThreeDotsVertical } from '@/public/img/logo.png';
// import  BiChat, BiLike, BiShare  from '@/public/img/logo.png';

const CardModel3 = () => {
    return (
        <Card maxW='md' className='mb-12 p-2'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Image className='w-14' src={imagem} alt='logo' />

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={imagem}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
            </CardBody>
        </Card>
    )
}

export default CardModel3