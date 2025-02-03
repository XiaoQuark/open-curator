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
	const [filteredArtworks, setFilteredArtworks] = useState([]);
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		const fetchArtworks = async () => {
			try {
				const chicagoResponse = await fetchChicagoArtworks(1, 20);
				const rijksmuseumResponse = await fetchRijksmuseumArtworks(
					1,
					20
				);

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

				// Get a unique list of artists for the dropdown
				const artistNames = [
					...new Set(
						combinedArtworks.map(
							(artwork) => artwork.artist || "Unknown Artist"
						)
					),
				];

				setArtworks(combinedArtworks);
				setFilteredArtworks(combinedArtworks);
				setArtists(artistNames);
			} catch (error) {
				console.error("Error fetching artworks:", error);
			}
		};

		fetchArtworks();
	}, []);

	const handleApplyFilters = ({
		collections,
		centuryRange,
		artist,
		sortBy,
	}) => {
		let filtered = artworks;

		// Filter by collection
		if (collections.length > 0) {
			filtered = filtered.filter((artwork) =>
				collections.includes(artwork.collection)
			);
		}

		// Filter by century range
		filtered = filtered.filter((artwork) => {
			const year = parseInt(artwork.date);
			return (
				!isNaN(year) &&
				year >= centuryRange[0] &&
				year <= centuryRange[1]
			);
		});

		// Filter by artist
		if (artist) {
			filtered = filtered.filter((artwork) => artwork.artist === artist);
		}

		// Sort by selected option
		if (sortBy === "artist-asc") {
			filtered.sort((a, b) => a.artist.localeCompare(b.artist));
		} else if (sortBy === "artist-desc") {
			filtered.sort((a, b) => b.artist.localeCompare(a.artist));
		} else if (sortBy === "year-asc") {
			filtered.sort((a, b) => parseInt(a.date) - parseInt(b.date));
		} else if (sortBy === "year-desc") {
			filtered.sort((a, b) => parseInt(b.date) - parseInt(a.date));
		}

		setFilteredArtworks(filtered);
	};

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
					<CustomSearch
						onApplyFilters={handleApplyFilters}
						artists={artists}
					/>
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
						{filteredArtworks.map((artwork) => (
							<ArtCard key={artwork.id} artwork={artwork} />
						))}
					</Grid>
				</GridItem>
			</Grid>
		</Container>
	);
}
