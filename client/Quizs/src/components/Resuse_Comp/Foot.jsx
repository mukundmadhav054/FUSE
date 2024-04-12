import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Foot = () => {
  return (
    <div>
        <HStack justifyContent={"space-between"} pl={"5rem"} pr={"5rem"}>
            <VStack>
                <HStack>
                    <Image src='Footer_Img/Heart.png'  />
                    <Text fontWeight={"semibold"}>FUSE</Text>
                </HStack>
                <Text fontWeight={"semibold"}>Developing Developers</Text>
            </VStack>
            <HStack justifyContent={"space-between"} w={"40%"}>
                <VStack>
                    <Text>FUSE</Text>
                    <Text>Our Story</Text>
                    <Text>Join Us</Text>
                    <Text>Latest News</Text>
                </VStack>
                <VStack>
                    <Text>What we Do</Text>
                    <Text>Efficiency</Text>
                    <Text>Our Projects</Text>
                    <Text>Press Release</Text>
                </VStack>
                <VStack>
                    <Text>Follow Us</Text>
                    <Image src='Footer_Img/Github_logo.svg' cursor={"pointer"} filter={"invert()"}/>
                    <Image src='Footer_Img/Facebook_Logo.svg' cursor={"pointer"} filter={"invert()"}/>
                    <Image src='Footer_Img/Instagram_Logo.svg' cursor={"pointer"} filter={"invert()"}/>
                </VStack>
            </HStack>
        </HStack>
    </div>
  )
}

export default Foot