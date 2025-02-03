import { useState, useEffect } from "react";

// components
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

// api
import { fetchChicagoArtworks } from "../api/chicagoApi";
import { fetchRijksmuseumArtworks } from "../api/rijksmuseumApi";
import {
	normaliseChicagoResponse,
	normaliseRijksmuseumResponse,
} from "../api/utils/normaliseData";

export default function Collection() {
	const [artworks, setArtworks] = useState([]);

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				const chicagoResponse = await fetchChicagoArtworks(1, 20);
				const rijksmuseumResponse = await fetchRijksmuseumArtworks(
					1,
					20
				);

				// Normalize and combine the results
				const chicagoArtworks = chicagoResponse.data.map(
					normaliseChicagoResponse
				);
				const rijksmuseumArtworks = rijksmuseumResponse.map(
					normaliseRijksmuseumResponse
				);

				const combinedArtworks = [
					...chicagoArtworks,
					...rijksmuseumArtworks,
				];
				console.log("Combined Artworks:", combinedArtworks); // Debugging the response

				setArtworks(combinedArtworks);
			} catch (error) {
				console.error("Error fetching artworks:", error);
			}
		};

		fetchArtworks();
	}, []);

	return (
		<Container maxW="5xl" mt={14} p={4}>
			<VStack alignItems="flex-start" spacing="20px">
				<Heading fontSize="3xl" fontWeight="700">
					Collection
				</Heading>
				<Text>
					Explore stunning works of art from around the world, curated
					for your inspiration.
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
						gap={2}
					>
						{artworks.map((artwork) => (
							<ArtCard key={artwork.id} artwork={artwork} />
						))}
					</Grid>
				</GridItem>
			</Grid>
		</Container>
	);
}
