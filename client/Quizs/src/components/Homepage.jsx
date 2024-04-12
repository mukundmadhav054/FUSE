import React from 'react'
import Navbar from './Resuse_Comp/Navbar'
import { Heading, Text, VStack, background, Image, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Foot from './Resuse_Comp/Foot'

const Homepage = () => {
  return (
    <div style={{background:"#F7F7F8", paddingBottom:"5rem"}}>
        <Navbar/>
        <HStack justifyContent={"space-evenly"} mt={"2rem"}>
            <VStack>
                <VStack h={"15rem"} justifyContent={"space-between"}>
                    <Heading display={"flex"} alignItems={"center"}><span><Image src='Homepage_Img/Icon_Container.svg'/></span><span>&nbsp;Unlock </span>&nbsp;Your Creative Potential</Heading>
                    <VStack justifyContent={"space-between"} h={"15rem"}>
                        <VStack>
                            <Text fontSize={"1.8rem"} fontWeight={"semibold"}>with Online Design and Development Courses.</Text>
                            <Text>Learn from Industry Experts and Enhance Your Skills.</Text>
                        </VStack>
                        <HStack>
                            <Link to="/courses"><Button color={"white"} background={"#FF9500"} _hover={"none"} h={"3rem"}>Explore Courses</Button></Link>
                            <Button h={"3rem"}>View Pricing</Button>
                        </HStack>
                    </VStack>
                </VStack>
            </VStack>
            <Image src='Homepage_Img/Education.svg' h={"30rem"}/>
        </HStack>
        <VStack mt={"14rem"}>
            <VStack alignItems={"left"} pl={"7rem"} >
                <Text fontSize={"3rem"} fontWeight={"semibold"} >Benefits</Text>
                <Text pr={"30rem"}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</Text>
            </VStack>
        </VStack>
            <HStack w={"100%"} justifyContent={"space-between"} pl={"7rem"} pr={"5rem"} mt={"7rem"}>
                <VStack h={"20rem"} border={"2px solid white"} borderRadius={"9px"} background={"white"} w={"24rem"} pt={"2rem"}>
                    <Heading fontSize={"5rem"} textAlign={"right"} pr={"2rem"} width={"100%"}>01</Heading>
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Flexible Learning Schedule</Text>
                    <Text pl={"2rem"}>Fit your coursework around your existing commitments and obligations.</Text>
                </VStack>
                <VStack h={"20rem"} border={"2px solid white"} borderRadius={"9px"} background={"white"} w={"24rem"} pt={"2rem"}>
                    <Heading fontSize={"5rem"} textAlign={"right"} pr={"2rem"} width={"100%"}>02</Heading>
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Expert Instruction</Text>
                    <Text pl={"2rem"}>Learn from industry experts who have hands-on experience in design and development.</Text>
                </VStack>
                <VStack h={"20rem"} border={"2px solid white"} borderRadius={"9px"} background={"white"} w={"24rem"} pt={"2rem"}>
                    <Heading fontSize={"5rem"} textAlign={"right"} pr={"2rem"} width={"100%"}>03</Heading>
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Flexible Learning Schedule</Text>
                    <Text pl={"2rem"}>Fit your coursework around your existing commitments and obligations.</Text>
                </VStack>
            </HStack>
            <HStack w={"100%"} justifyContent={"space-between"} pl={"7rem"} pr={"5rem"} mt={"2rem"}>
                <VStack h={"20rem"} border={"2px solid white"} borderRadius={"9px"} background={"white"} w={"24rem"} pt={"2rem"}>
                    <Heading fontSize={"5rem"} textAlign={"right"} pr={"2rem"} width={"100%"}>04</Heading>
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Flexible Learning Schedule</Text>
                    <Text pl={"2rem"}>Fit your coursework around your existing commitments and obligations.</Text>
                </VStack>
                <VStack h={"20rem"} border={"2px solid white"} borderRadius={"9px"} background={"white"} w={"24rem"} pt={"2rem"}>
                    <Heading fontSize={"5rem"} textAlign={"right"} pr={"2rem"} width={"100%"}>05</Heading>
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Flexible Learning Schedule</Text>
                    <Text pl={"2rem"}>Fit your coursework around your existing commitments and obligations.</Text>
                </VStack>
                <VStack h={"20rem"} border={"2px solid white"} borderRadius={"9px"} background={"white"} w={"24rem"} pt={"2rem"}>
                    <Heading fontSize={"5rem"} textAlign={"right"} pr={"2rem"} width={"100%"}>06</Heading>
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Flexible Learning Schedule</Text>
                    <Text pl={"2rem"}>Fit your coursework around your existing commitments and obligations.</Text>
                </VStack>
            </HStack>
            <VStack mt={"5rem"}>
                <VStack alignItems={"left"} pl={"7rem"} >
                    <Text fontSize={"3rem"} fontWeight={"semibold"} >Our Courses</Text>
                    <Text pr={"30rem"}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</Text>
                </VStack>
            </VStack>
            <HStack w={"100%"} pl={"7rem"} justifyContent={"space-between"} pr={"5rem"} mt={"2rem"}>
                <VStack h={"37rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"47%"}>
                    <Image src='Homepage_Img/Front_end.svg' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Front-End Web Development</Text>
                    <Text pl={"2rem"} pr={"7rem"}>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</Text>
                    <Button w={"100%"} h={"3rem"} mt={"2rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Explore Now</Button>
                </VStack>
                <VStack h={"37rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"47%"}>
                    <Image src='Homepage_Img/Beckend.svg' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>Backend-End Development</Text>
                    <Text pl={"2rem"} pr={"7rem"}>Deepen backend JavaScript expertise with closures, prototypes, async programming, and ES6 features. Build sophisticated server-side applications with confidence and efficiency.</Text>
                    <Button w={"100%"} h={"3rem"} mt={"2rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Explore Now</Button>
                </VStack>
            </HStack>
            <HStack w={"100%"} pl={"7rem"} justifyContent={"space-between"} pr={"5rem"} mt={"2rem"} pb={"6rem"}>
                <VStack h={"37rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"47%"}>
                    <Image src='Homepage_Img/Graphics.svg' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>UI/UX Design</Text>
                    <Text pl={"2rem"} pr={"7rem"}>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</Text>
                    <Button w={"100%"} h={"3rem"} mt={"2rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Explore Now</Button>
                </VStack>
                <VStack h={"37rem"} border={"2px solid white"} borderRadius={"8px"} background={"white"} w={"47%"}>
                    <Image src='Homepage_Img/DSA.jpg' borderRadius={"8px"} />
                    <Text fontSize={"1.37rem"} fontWeight={"semibold"} w={"100%"} pl={"2rem"} mt={"2rem"}>DSA</Text>
                    <Text pl={"2rem"} pr={"7rem"}>Level up your DSA proficiency by delving into advanced concepts like closures, prototypes, async programming, and ES6 features. Master complex algorithms and data structures with confidence.</Text>
                    <Button w={"100%"} h={"3rem"} mt={"2rem"} color={"white"} background={"#FF9500"} _hover={"none"}>Explore Now</Button>
                </VStack>
            </HStack>

            <Foot/>
    </div>
  )
}

export default Homepage