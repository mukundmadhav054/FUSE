import React from "react";
import "./login.css";
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
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://fuse-serverside.vercel.app/signup",
        data
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <HStack
          width={"60%"}
          height={"80vh"}
          backgroundColor={"white"}
          p={"2%"}
          borderRadius={"10%"}
        >
          <VStack height={"80vh"} justifyContent={"center"}>
            <Image boxSize={"80%"} src="/signupimg.svg" />
          </VStack>

          <VStack alignItems={"flex-start"}
          justifyContent={"center"}
          >
            <Heading>Welcome</Heading>

            <Text>Login to FUSE to continue</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <FormControl mt="10px" minW={"sm"} isInvalid={errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  aria-label="Email address"
                  {...register("email", { required: "Email is required" })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt="10px" minW={"sm"} isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  aria-label="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                mt="25px"
                borderRadius={"10px"}
                w={"100%"}
                colorScheme="blue"
                type="submit"
              >
                Login
              </Button>
            </form>
            <Text>
              Don't have an account ?{" "}
              <Link to={"/login"} color={"blue"}>
                Signup
              </Link>
            </Text>
    <Text 
    width={"100%"}
    textAlign={"center"}
    >
      OR
    </Text>
          <HStack
        border="1px solid gray"
        w={"90%"}
        borderRadius="25px"
        h="40px"
        justifyContent="center"
        alignItems={"center"}
      >
        <Image
          loading="lazy"
          src="/google.png"
          boxSize="28px"
        />
        <Text>Continue with google</Text>
      </HStack>
            
          </VStack>
        </HStack>
      </div>
    </>
  );
};

export default Login;
