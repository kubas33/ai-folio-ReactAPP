import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authorize } from "../store/authSlice";
import { AuthService } from "../services/auth.service";
import { SubmitHandler, useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";

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
  const toast = useToast();

  const registerToast = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  const failureToast = () => {
    toast({
      title: "Something went wrong :(",
      description: "We couldn't create account for you.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    setIsRegistering(true);

    try {
      const res = await AuthService.register(data);
      dispatch(authorize(res.data));
      navigate("/");
      registerToast();

      //TODO: TOAST
    } catch (error) {
      failureToast();
      console.error({ error });
      //TODO: TOAST ERROR
    }
    setIsRegistering(false);
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
          py={8}
          px={16}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Box>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 3, message: `Minimum length is 3` },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <FormControl isInvalid={!!errors.email}>
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
              <FormControl isInvalid={!!errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: `Minimum length is 6` },
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
                {isRegistering ? (
                  <Spinner />
                ) : (
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    colorScheme="teal"
                    type="submit"
                  >
                    Sign up
                  </Button>
                )}
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
