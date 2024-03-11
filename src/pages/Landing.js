'use client';
import React, { useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiStar,
  FiSettings,
  FiMenu,
  FiUsers,
  FiLogOut,
  FiFileText,
  FiPieChart,
  FiChevronDown
} from 'react-icons/fi';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import "@fontsource/lexend-deca"; 
import { color } from 'framer-motion';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Settings', icon: FiPieChart },
  {
    name: 'Users',
    icon: FiUsers,
    subItems: [
      { name: 'View All', icon: FiStar },
      { name: 'Admins', icon: FiSettings },
    ],
  },
  {
    name: 'Logs',
    icon: FiFileText,
    subItems: [
      { name: 'View All', icon: FiStar },
      { name: 'My Activity', icon: FiSettings },
    ],
  },
  { name: 'Sign Out', icon: FiLogOut },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="Lexend Deca" fontWeight="bold">
          Ascenda
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, index) => (
        <React.Fragment key={link.name}>
            {index === LinkItems.length - 1 && <Box h="40" />}
            <NavItem icon={link.icon} subItems={link.subItems}>
                {link.name}
            </NavItem>
      </React.Fragment>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, subItems, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="span" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      {subItems ? (
        <Menu>
          <MenuButton
            as={Flex}
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: '#1A1E43',
              color: 'white',
            }}
            onClick={toggleDropdown}
            {...rest}
          >
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={icon}
              />
            )}
            {children}
            <FiChevronDown />
          </MenuButton>
          {isOpen && (
            <MenuList>
              {subItems.map((subItem) => (
                <MenuItem key={subItem.name} as="a" href="#">
                  {subItem.name}
                </MenuItem>
              ))}
            </MenuList>
          )}
        </Menu>
      ) : (
        <Box
          as="a"
          href="#"
          _focus={{ boxShadow: 'none' }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: '#1A1E43',
              color: 'white',
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}

      >
        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems={'center'}>
            {/* Breadcrumb in MobileNav */}
            <Box mr="630">
                <Breadcrumb fontWeight="medium" fontSize="sm">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">HOME</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Current</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="0px"
                    ml="10" mr="10"
                  >
                    <Text fontSize={18} fontFamily="Lexend Deca">Neil Sharma</Text>
                    <Text fontSize="xs" color="gray.600" fontFamily="Lexend Deca">
                      Owner
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
  
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>
    );
};
  

const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      {/* <Navbar /> */}
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default Landing;
