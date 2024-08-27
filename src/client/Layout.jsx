import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Layout() {
    return (
        <Flex direction="column" minHeight="100vh">
            <Navbar />
            <Flex as="main" flex="1" direction="column">
                <Outlet />
            </Flex>
            <Footer />
        </Flex>
    );
}
