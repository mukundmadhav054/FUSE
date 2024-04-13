import React from 'react'
import Navbar from './Resuse_Comp/Navbar'
import { HStack, Heading, VStack,Image,Text,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Foot from './Resuse_Comp/Foot'

const CoursePage = () => {
  return (
    <div style={{background:"#F7F7F8", paddingBottom:"3rem"}}>
        <Navbar/>
        <Heading pl={"7rem"} mt={"3rem"}>Modules</Heading>
        <HStack justifyContent={"space-evenly"} pl={"5rem"} mt={"4rem"} pr={"4rem"}>
                <VStack h={"23rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"30%"} justifyContent={"space-between"} >
                    <Image src='Courses_Img/DSA.webp' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"1rem"}>DSA</Text>
            <Link to={"/dsacourse"} style={{"width":"100%"}}>
                    <Button w={"100%"} h={"3rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Start Now</Button>
            </Link>
                </VStack>
                <VStack h={"23rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"30%"} justifyContent={"space-between"}>
                    <Image src='Courses_Img/Front_end.png' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"1rem"}>Front-End Developement</Text>
                    <Button w={"100%"} h={"3rem"} mt={"1rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Start Now</Button>
                </VStack>
                <VStack h={"23rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"30%"} justifyContent={"space-between"}>
                    <Image src='Courses_Img/Backend.jpg' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"1rem"}>Back-End Developement </Text>
                    <Button w={"100%"} h={"3rem"} mt={"1rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Start Now</Button>
                </VStack>
        </HStack>
        <HStack pl={"7rem"} mt={"2rem"} pb={"4rem"} >
            <VStack h={"23rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"29%"} justifyContent={"space-between"}>
                <Image src='Courses_Img/Ui_ux.jpg' borderRadius={"8px"} />
                <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"1rem"}>Ui/Ux Designing</Text>
                <Button w={"100%"} h={"3rem"} mt={"1rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Start Now</Button>
            </VStack>
        </HStack>
        <hr  style={{marginBottom:"2rem"}}/>
        <Foot/>
    </div>
  )
}

export default CoursePage