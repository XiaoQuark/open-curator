import {
	Text,
	Divider,
	Grid,
	GridItem,
	VStack,
	Heading,
	Container,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import ArtCard from "../components/ArtCard";
import CustomSearch from "../components/CustomSearch";
import MobileDrawer from "../components/MobileDrawer";

export default function Collection() {
	return (
		<Container maxW="5xl" mt={14} p={4}>
			<VStack alignItems="flex-start" spacing="20px">
				<Heading fontSize="3xl" fontWeight="700">
					Medium length title
				</Heading>
				<Text>
					Provide your customers a story they would enjoy keeping in
					mind the objectives of your website. Pay special attention
					to the tone of voice.
				</Text>
			</VStack>

			<Divider mt={6} mb={6} />
			<Box display={{ base: "block", md: "none" }}>
				<MobileDrawer />
			</Box>
			<Grid
				templateColumns={{
					base: "1fr",
					md: "1fr 3fr", // Sidebar + grid layout on desktop
				}}
				gap={6}
			>
				{/* Sidebar/Search Tools */}
				<GridItem
					display={{ base: "none", md: "fixed" }}
					borderRight="1px"
					borderRightColor={useColorModeValue("gray.200", "gray.700")}
				>
					<CustomSearch />
				</GridItem>

				{/* Main content */}
				<GridItem>
					<Grid
						templateColumns={{
							base: "repeat(1, 1fr)",
							sm: "repeat(2, 1fr)",
							md: "repeat(3, 1fr)",
						}}
						gap={6}
					>
						<ArtCard />
						<ArtCard />
						<ArtCard />
						<ArtCard />
					</Grid>
				</GridItem>
			</Grid>
		</Container>
	);
}
