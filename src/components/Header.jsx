import { Link, NavLink } from "react-router-dom";
import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Header() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
				position="fixed"
				left={0}
				right={0}
				top={0}
				zIndex={10}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? (
								<CloseIcon w={3} h={3} />
							) : (
								<HamburgerIcon w={5} h={5} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: "center", md: "start" }}
				>
					<Text
						textAlign={useBreakpointValue({
							base: "center",
							md: "left",
						})}
						fontFamily={"heading"}
						color={useColorModeValue("gray.800", "white")}
					>
						Open Curator
					</Text>

					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					direction={"row"}
					spacing={6}
				>
					<Button
						as={"a"}
						fontSize={"sm"}
						fontWeight={400}
						variant={"link"}
						href={"#"}
					>
						Sign In
					</Button>
					<Button
						as={"a"}
						display={{ base: "none", md: "inline-flex" }}
						fontSize={"sm"}
						fontWeight={600}
						color={"white"}
						bg={"pink.400"}
						href={"#"}
						_hover={{
							bg: "pink.300",
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	return (
		<Stack direction={"row"} spacing={4}>
			<Link to="/">Home</Link>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/collection">Collection</NavLink>
		</Stack>
	);
};

const MobileNav = () => {
	return (
		<Stack
			direction={"column"}
			spacing={4}
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			<Link to="/">Home</Link>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/collection">Collection</NavLink>
		</Stack>
	);
};

{
	/* <p>Open Curator</p>
<nav className="nav_container">
		<Link to="/">Home</Link>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/collection">Collection</NavLink>
</nav> */
}
