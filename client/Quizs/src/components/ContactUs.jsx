import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
    HStack,
    VStack,
    Image,
    Heading,
    Text,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    useToast,
    Textarea
  
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import axios from "axios";
  import { Link } from "react-router-dom";
import Navbar from './Resuse_Comp/Navbar';
const ContactUs = () => {
    const toast = useToast()
    const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // data.preventDefault();
    emailjs
      .sendForm('service_kqvii49', 'template_487u965', form.current, {
        publicKey: 'nJoO1by5wLoSRvea5',
      }).then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    try {
      const res = await axios.post(
        "https://fuse-serverside.vercel.app/login",
        data
      );
      if(res.status==200){

        toast({
          description:"successfully singed up",
          status: 'success',
          position:'top',
          duration: 4000,
          isClosable: true,
          colorScheme:'green'
    
        })
      }
    } catch (err) {
      toast({
        description:`${err.response.data}`,
        status: 'success',
        position:'top',
        duration: 4000,
        isClosable: true,
        colorScheme:'green'
  
      })
    }
  };
  return (
    <>
    <Navbar/>
      <div className="container">
        <HStack
          width={"60%"}
          height={"80vh"}
          backgroundColor={"white"}
          p={"2%"}
          borderRadius={"10%"}
        >
          <VStack height={"80vh"} justifyContent={"center"}>
            <Image boxSize={"80%"} src="About_Img/Contact.svg" />
          </VStack>

          <VStack alignItems={"flex-start"}
          justifyContent={"center"}
          >
            <Heading>Get in Touch</Heading>
            {/* <Text>Login to FUSE to continue</Text> */}
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
            <FormControl mt="10px" minW={"xm"} isInvalid={errors.username}>
                <FormLabel>Your name</FormLabel>
                <Input
                  type="text"
                  aria-label="Your name"
                  name='from_name'
                  {...register("username", { required: "Name is required" })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              
              <FormControl mt="10px" minW={"sm"} isInvalid={errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="from_email"
                  aria-label="Email address"
                  {...register("from_email", { required: "Email is required" })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt="10px" minW={"sm"} isInvalid={errors.message}>
                <FormLabel>Write Your Concern</FormLabel>
                <Textarea
                  type="text"
                  name="message"
                  aria-label="Message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                
                
                <FormErrorMessage>
                  {errors.message && errors.message.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                mt="25px"
                borderRadius={"10px"}
                w={"100%"}
                colorScheme="blue"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </VStack>
        </HStack>
      </div>
    </>
  )
}

export default ContactUs