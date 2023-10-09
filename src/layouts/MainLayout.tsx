import { Box, Center, useColorModeValue, Container } from "@chakra-ui/react";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box
      width={"100%"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <MainNavbar />
      <Container as="main" maxW={"1440px"}>
        {/* <Home /> */}
        {/* <ImageDetail /> */}
        {/* <AddImageForm /> */}
        <Outlet />
      </Container>
      <MainFooter />
    </Box>
  );
}
