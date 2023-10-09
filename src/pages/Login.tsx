import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form"
import { authorize } from "../store/authSlice";
import { useDispatch } from "react-redux";


type LoginForm = {
    email: string,
    password: string,
}

export default function Login() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = data => {
        console.log(data);
        dispatch(authorize({
            email: data.email,
            name: 'Kuba',
            token: '1234351232'
        }))
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <FormControl id="email" isInvalid={errors.email}>
                                <FormLabel htmlFor='email'>Email address</FormLabel>
                                <Input id="email" {...register('email', { required: 'Email is required' })} type="email" />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <Input id="password" {...register('password', {
                                    required: 'Password is required'
                                })} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Text color={'blue.400'}>Forgot password?</Text>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    type="submit">
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}