import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Flex, HStack, IconButton, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, UnorderedList, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react'


interface Props {
    children: React.ReactNode
}

const Links: string[] = ['Home', 'Models', 'Images', 'Tag', 'Categories'];

const NavLink = (props: Props) => {
    const {children} = props;

    return (
      <Box as='a' px={2}  py={1} rounded={'md'} _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.300', 'gray.600'),
        fontWeight: '500',
      }} href='#'>
        {children}
      </Box>
    )
}

function MainNavbar() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={'16'} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>} aria-label='Open-menu'  display={{md: 'none'}} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
              <HStack as={'nav'}  spacing={4} display={{base: 'none', md: 'flex'}}>
                <UnorderedList listStyleType={'none'} m={0}>
                  {Links.map( link => (
                    <ListItem display={'inline-list-item'} px={2}>
                      <NavLink key={link}>{link}</NavLink>
                    </ListItem>
                  ))}
                </UnorderedList>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <HStack spacing={10}>

            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Smth</MenuItem>
                  <MenuDivider/>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              </HStack>
            </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{md: 'none'}}>
            <Stack as={'nav'}  spacing={4} >
              {Links.map( link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              </Stack>
          </Box>
        ): null}
        </Box>
    </>
  )
}

export default MainNavbar