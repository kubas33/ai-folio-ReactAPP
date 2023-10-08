
import { Box, Center, useColorModeValue, Container } from '@chakra-ui/react';
import MainFooter from '../components/MainFooter';
import MainNavbar from '../components/MainNavbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {

  return (
    <>
      <MainNavbar />


      <Container as='main' bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        maxW={'100%'}>
        {/* <Home /> */}
        {/* <ImageDetail /> */}
        {/* <AddImageForm /> */}
        <Outlet />
      </Container>
      <MainFooter />
    </>
  );
}
