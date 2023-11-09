import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  LinkProps,
  ListItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { authActions } from "../store/authSlice";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Credentials } from "../services/auth.service";
import IsAuth from '../core/auth/IsAuth';

const UnprotectedLinks: string[] = ["Home",];
const ProtectedLinks: string[] = ["Models", "Images", "Tags", "Categories"];

const NavLink = (props: LinkProps) => {
  const { children } = props;

  return (
    <Box
      as={ReactRouterLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.300", "gray.600"),
        fontWeight: "500",
      }}
      to={`/${typeof children === "string" ? children.toLowerCase() : "#"}`}
    >
      {children}
    </Box>
  );
};

function MainNavbar() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { email }: Credentials = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <Box as={"header"} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container maxWidth={"1440px"}>
          <Flex h={"16"} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open-menu"
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>Logo</Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                //TODO: isAuth
                <UnorderedList listStyleType={"none"} m={0}>
                  {UnprotectedLinks.map((link) => (
                    <ListItem key={link} display={"inline-list-item"} px={2}>
                      <NavLink>{link}</NavLink>
                    </ListItem>
                  ))}
                  <IsAuth>
                    {ProtectedLinks.map((link) => (
                      <ListItem key={link} display={"inline-list-item"} px={2}>
                        <NavLink>{link}</NavLink>
                      </ListItem>
                    ))}
                  </IsAuth>
                </UnorderedList>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <HStack spacing={10}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList>
                    {email ? (
                      <>
                        <Text marginTop={2} textAlign={"center"}>
                          {email}
                        </Text>
                        <MenuDivider />
                        <MenuItem as={ReactRouterLink} to={"/user-profile"}>Profile</MenuItem>
                        <MenuItem as={ReactRouterLink} to={"/user-settings"}>Settings</MenuItem>
                        <MenuItem>Smth</MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem as={ReactRouterLink} to={"/login"}>
                          Login
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem as={ReactRouterLink} to={"/register"}>
                          Register account
                        </MenuItem>
                      </>
                    )}
                  </MenuList>
                </Menu>
              </HStack>
            </Flex>
          </Flex>
        </Container>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        <hr />
      </Box>
    </>
  );
}

export default MainNavbar;
