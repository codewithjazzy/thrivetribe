// import { Link, useNavigate, useLocation } from "react-router-dom"


// export default function Navbar() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleLogout = async () => {
//         await fetch("/logout");
//         navigate("/login")
//     }

//     //conditionally show logout button on these paths
//     const showLogout = ["/account", "/createAccount", "/editAccount"].includes(location.pathname);

//     return (
//         <>
//             <Link to="/">
//                 <button>ThriveTribe</button>            
//             </Link>
//             <Link to="/about">
//                 <button>About</button>            
//             </Link>
//             <Link to="/therapy101">
//                 <button>Therapy 101</button>            
//             </Link>
//             <Link to="/types">
//                 <button>Types of Therapy</button>            
//             </Link>
//             <Link to="/quiz">
//                 <button>Take The Quiz</button>            
//             </Link>
//             <Link to="/providers">
//                 <button>Find A Therapist</button>            
//             </Link>
//             <Link to="/blog">
//                 <button>Blog</button>            
//             </Link>
//             <Link to="/portal">
//                 <button>Therapist Portal</button>            
//             </Link>
//             {showLogout && (
//                 <button onClick={handleLogout}>Logout</button>
//             )}
//         </>
//     )
// }

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
  import { AiOutlineMenu } from "react-icons/ai";
  import { Link, useNavigate, useLocation } from "react-router-dom";
  
  export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
  
    const handleLogout = async () => {
      await fetch("/logout");
      navigate("/login");
    };
  
    // Conditionally show logout button on these paths
    const showLogout = ["/account", "/createAccount", "/editAccount"].includes(location.pathname);
  
    return (
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
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
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link to="/therapy101">
                <Button variant="ghost">Therapy 101</Button>
              </Link>
              <Link to="/types">
                <Button variant="ghost">Types of Therapy</Button>
              </Link>
              <Link to="/quiz">
                <Button variant="ghost">Take The Quiz</Button>
              </Link>
              <Link to="/providers">
                <Button variant="ghost">Find A Therapist</Button>
              </Link>
              <Link to="/blog">
                <Button variant="ghost">Blog</Button>
              </Link>
              <Link to="/portal">
                <Button variant="ghost">Therapist Portal</Button>
              </Link>
              {showLogout && (
                <Button variant="ghost" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
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
                  onClick={mobileNav.onClose}
                />
  
                <Link to="/about">
                  <Button w="full" variant="ghost">
                    About
                  </Button>
                </Link>
                <Link to="/therapy101">
                  <Button w="full" variant="ghost">
                    Therapy 101
                  </Button>
                </Link>
                <Link to="/types">
                  <Button w="full" variant="ghost">
                    Types of Therapy
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button w="full" variant="ghost">
                    Take The Quiz
                  </Button>
                </Link>
                <Link to="/providers">
                  <Button w="full" variant="ghost">
                    Find A Therapist
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                </Link>
                <Link to="/portal">
                  <Button w="full" variant="ghost">
                    Therapist Portal
                  </Button>
                </Link>
                {showLogout && (
                  <Button w="full" variant="ghost" onClick={handleLogout}>
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
  