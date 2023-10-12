import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authorize } from "../store/authSlice";
import { AuthService } from "../services/auth.service";
import { useForm } from "react-hook-form";

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    setIsRegistering(true);

    try {
      const res = await AuthService.login(data);
      dispatch(authorize(res.data));
      navigate("/home");

      //TODO: TOAST
    } catch (error) {
      //TODO: TOAST ERROR
    }
    setIsRegistering(false);
    console.log(data);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to upload some cool{" "}
            <Text as={"span"} color={"blue.400"}>
              content
            </Text>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Box>
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  colorScheme="teal"
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
              <Text align={"center"} pt={6}>
                Already a user?{" "}
                <Link color={"blue.400"} as={ReactRouterLink} to={"/login"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Register;
