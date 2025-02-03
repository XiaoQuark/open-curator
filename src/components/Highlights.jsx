import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";
import ArtCard from "./ArtCard";

export default function Highlights() {
	return (
		<Box bg={useColorModeValue("gray.100", "gray.700")}>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={8}>
				<Stack spacing={0} align={"center"}>
					<Heading>Collection Highlights</Heading>
					<Text>
						We have been working with clients around the world
					</Text>
				</Stack>
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 1 }}
				>
					<ArtCard />
					<ArtCard />
					<ArtCard />
					<ArtCard />
				</Stack>
			</Container>
		</Box>
	);
}
