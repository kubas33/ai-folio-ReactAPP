import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { authorize } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../services/auth.service";

export type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogging, setIsLogging] = useState(false);
  const toast = useToast();

  const loginSuccessToast = () => {
    toast({
      title: "Logged in successfully",
      description: "Welcome to our service!",
      status: "success",
      duration: 5000, // Display time for the toast (in milliseconds)
      isClosable: true, // Allowing the user to close the toast
    });
  };

  const loginServerErrorToast = () => {
    toast({
      title: "Login failed",
      description: "A server error occurred. Please try again later.",
      status: "error",
      duration: 5000, // Display time for the toast (in milliseconds)
      isClosable: true, // Allowing the user to close the toast
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    setIsLogging(true);
    console.log("api_url " + import.meta.env.VITE_API_URL);

    try {
      const res = await AuthService.login(data);
      dispatch(authorize(res.data));
      navigate("/");
      loginSuccessToast();
    } catch (error) {
      loginServerErrorToast();
      console.error({ error });
    }
    setIsLogging(false);
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
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  type="email"
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack>
                {isLogging ? (
                  <Spinner />
                ) : (
                  <Button colorScheme="teal" type="submit" size="lg">
                    Sign in
                  </Button>
                )}
              </Stack>
            </Stack>
          </form>
          <Text align={"center"} pt={6}>
            Not a member?{" "}
            <Link color={"blue.400"} as={ReactRouterLink} to={"/register"}>
              Sign up
            </Link>
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}
