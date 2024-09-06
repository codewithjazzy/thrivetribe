import {
    Box,
    Flex,
    Button,
    IconButton,
    HStack,
    VStack,
    chakra,
    useDisclosure,
    useColorModeValue,
    VisuallyHidden,
    CloseButton,
  } from "@chakra-ui/react";
import { HeaderLogo } from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
  


  export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "yellow.800");
  
    const handleLogout = async () => {
      await fetch("/logout");
      navigate("/login");
      mobileNav.onClose(); // Close the burger menu after logout
    };
  
    // Conditionally show logout button on these paths
    const showLogout = ["/account", "/createAccount", "/editAccount"].includes(location.pathname);

    const handleNavItemClick = () => {
      mobileNav.onClose(); // Close the burger menu after navigation item click
    };
  
    return (
      <chakra.header
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={3}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              as={Link}
              to="/"
              title="ThriveTribe Home Page"
              display="flex"
              alignItems="center"
            >
              <HeaderLogo />
              <VisuallyHidden>ThriveTribe</VisuallyHidden>
                <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                ThriveTribe
                </chakra.h1>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="black"
              display={{
                base: "none",
                xl: "inline-flex",
              }}
            >
              <Link to="/about">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>About</Button>
              </Link>
              <Link to="/therapy101">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>Therapy 101</Button>
              </Link>
              <Link to="/types">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>Types of Therapy</Button>
              </Link>
              <Link to="/quiz">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>Take The Quiz</Button>
              </Link>
              <Link to="/providers">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>Find A Therapist</Button>
              </Link>
              <Link to="/blog">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>Blog</Button>
              </Link>
              <Link to="/portal">
                <Button variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>Therapist Portal</Button>
              </Link>
              {showLogout && (
                <Button 
                  variant="ghost"
                  _hover={{ 
                    background: '#fff3dd',
                    border: '1px',
                    borderColor: '#f3af59',
                    outline: '#f3af59'
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                xl: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  xl: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                _hover={{ 
                  background: '#fff3dd', 
                  borderColor: '#f3af59',
                }}
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
  
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  _hover={{
                    background: '#fff3dd',
                    borderColor: '#f3af59'
                  }}
                  onClick={mobileNav.onClose}
                />
  
                <Link to="/about" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    About
                  </Button>
                </Link>
                <Link to="/therapy101" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    Therapy 101
                  </Button>
                </Link>
                <Link to="/types" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    Types of Therapy
                  </Button>
                </Link>
                <Link to="/quiz" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    Take The Quiz
                  </Button>
                </Link>
                <Link to="/providers" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    Find A Therapist
                  </Button>
                </Link>
                <Link to="/blog" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    Blog
                  </Button>
                </Link>
                <Link to="/portal" onClick={handleNavItemClick}>
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }}>
                    Therapist Portal
                  </Button>
                </Link>
                {showLogout && (
                  <Button w="full" variant="ghost" _hover={{ background: '#fff3dd', borderColor: '#f3af59' }} onClick={handleLogout}>
                    Logout
                  </Button>
                )}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    );
  }
  