import React,{useState} from "react";
import "./Signup.css";
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
  useToast
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../../firebaseauth/Config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const toast = useToast()

  const [value,setValue]=useState("");
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data)
      navigate("/")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://fuse-serverside.vercel.app/signup",
        data
      );
      if(res.status==201){

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
      console.log(err);
      toast({
        description:`${err.response.data.message}`,
        position:'top',
        duration: 4000,
        isClosable: true,
        colorScheme:'red'
  
      })
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

            <Text>Sign up to FUSE to continue</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mt="10px" minW={"xm"} isInvalid={errors.username}>
                <FormLabel>Your name</FormLabel>
                <Input
                  type="text"
                  aria-label="Your name"
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
                Signup
              </Button>
            </form>
            <Text>
              Already have an account ?{" "}
              <Link to={"/login"} color={"blue"}>
                Login
              </Link>
            </Text>
    <Text 
    width={"100%"}
    textAlign={"center"}
    >
      OR
    </Text>
          <HStack
        onClick={handleLogin}
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

export default Signup;
