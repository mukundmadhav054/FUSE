import React from 'react'
import Navbar from './Resuse_Comp/Navbar'
import { HStack, Text,Image, VStack, Button } from '@chakra-ui/react'

const About = () => {
  return (
    <div style={{background:"#F7F7F8", height:"100vh"}}>
        <Navbar/>
        <HStack>
            <VStack>
                <Text pl={"5rem"} fontSize={"1.2rem"}>FUSE is your gateway to comprehensive e-learning in UI/UX design, Front-End and Back-End development, and Data Structures and Algorithms. Our platform offers meticulously crafted modules enriched with practical insights and quiz practices to empower your learning journey. Dive into our dynamic courses curated by industry experts and elevate your skills to the next level with FUSE.</Text>
                <Button color={"white"} background={"#F3766D"} _hover={"none"} mt={"2rem"}>Explore Courses</Button>
            </VStack>
            <Image src='About_Img/About.svg' w={"35rem"}/>
        </HStack>
    </div>
  )
}

export default About