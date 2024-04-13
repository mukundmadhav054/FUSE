import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <>
        <HStack justifyContent={"space-between"} paddingLeft={"5rem"} pr={"10rem"} h={"6rem"}>
            <HStack>
                <VStack>
                    <Image src='Nav_Img/Logo.png' height={"8rem"}/>
                </VStack>
                <HStack justifyContent={"space-between"} w={"24rem"}>
                    <Link to="/"><Text cursor={"pointer"}>Home</Text></Link>
                    <Link to="/courses"><Text cursor={"pointer"}>Courses</Text></Link>
                    <Link to='/about'><Text cursor={"pointer"}>About Us</Text></Link>
                    <Link to='/contact'><Text cursor={"pointer"}>Contact</Text></Link>
                </HStack>
            </HStack>
            <HStack>
                <Link to={"/signup"}><Button background={"none"} _hover={"none"}>Sign Up</Button></Link>
                <Link to={"/login"}><Button background={"#FF9500"} _hover={"none"} width={"6rem"} color={"white"}>Login</Button></Link>
            </HStack>
        </HStack>
    </>
  )
}

export default Navbar