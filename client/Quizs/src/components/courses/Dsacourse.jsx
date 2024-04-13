import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Image,
  Button
} from "@chakra-ui/react";
import { useRef } from "react";
import Navbar from "../Resuse_Comp/Navbar";
import Foot from "../Resuse_Comp/Foot";
const Dsacourse = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios
      .get("https://fuse-serverside.vercel.app/dsa-topics")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{background:"#F7F7F8", paddingBottom:"7rem"}}>
    <Navbar/>
    <VStack >
      <Heading mt={"3rem"}>Let's Start DSA Problem</Heading>
      <HStack mt={"2rem"} pb={"12rem"}>
        <VStack>
          <Text ml={"7rem"} fontSize={"1.2rem"} mr={"7rem"}>Experience the thrill of mastering Data Structures and Algorithms with our comprehensive course. Dive into the core principles, unravel complex algorithms, and fine-tune your problem-solving skills. Join a vibrant community of learners, exchange insights, and elevate your coding expertise. Whether you're a beginner or seasoned coder, our course offers a pathway to success in the dynamic world of technology. Take the leap, and unlock the doors to limitless opportunities in data-driven industries.</Text>
          <Button color={"white"} background={"#FF9500"} _hover={"none"} h={"3rem"} mt={"2rem"}>Start Learning</Button>
        </VStack>
        <Image src="Courses_Img/DSACourse.png"/>
      </HStack>
    </VStack>
      <Accordion allowToggle mt={"4rem"} ml={"7rem"} pb={"5rem"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={"2rem"} fontWeight={"semibold"}>
                Easy questions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {data
              .filter((e) => e.level == "easy")
              .map((item) => (
                <div style={{paddingRight:"5rem"}}>
                  <h2 style={{fontSize:"1.5rem"}}>{item.name}</h2>
                  <p>{item.description}</p>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${item.videoEmbed}?si=5eR9XrYt_vIu1ob1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{marginTop:"4rem"}}
                    ></iframe>
                  </div>
                  <a href={item.questionLink} style={{ color: "blue" }}>
                    Click here to view Problem Statement
                  </a>
                  <hr style={{marginTop:"4rem", marginBottom:"4rem"}} />
                </div>
              ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={"2rem"} fontWeight={"semibold"}>
                Moderate questions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {data
              .filter((e) => e.level == "medium")
              .map((item) => (
                <div style={{paddingRight:"5rem"}}>
                  <h2 style={{fontSize:"1.5rem"}}>{item.name}</h2>
                  <p>{item.description}</p>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${item.videoEmbed}?si=5eR9XrYt_vIu1ob1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{marginTop:"4rem"}}
                    ></iframe>
                  </div>
                  <a href={item.questionLink} style={{ color: "blue" }}>
                    Click here to view Problem Statement
                  </a>
                  <hr style={{marginTop:"4rem", marginBottom:"4rem"}} />
                </div>
              ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem pb={"5rem"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize={"2rem"} fontWeight={"semibold"}>
                Hard questions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {data
              .filter((e) => e.level == "hard")
              .map((item) => (
                <div style={{paddingRight:"5rem"}}>
                  <h2 style={{fontSize:"1.5rem"}}>{item.name}</h2>
                  <p>{item.description}</p>
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${item.videoEmbed}?si=5eR9XrYt_vIu1ob1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{marginTop:"4rem"}}
                    ></iframe>
                  </div>
                  <a href={item.questionLink} style={{ color: "blue" }}>
                    Click here to view Problem Statement
                  </a>
                  <hr style={{marginTop:"4rem", marginBottom:"4rem"}} />
                </div>
              ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Foot/>
    </div>
  );
};

export default Dsacourse;
