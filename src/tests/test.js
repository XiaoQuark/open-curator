import { fetchChicagoArtworks } from "./src/api/chicagoApi.js";
import { fetchWellcomeArtworks } from "./src/api/wellcomeApi.js";
import {
	normalizeChicagoArtwork,
	normalizeWellcomeArtwork,
} from "./src/api/utils/normalizeData.js";

const testFetchArtworks = async () => {
	try {
		console.log("Fetching artworks...");

		// Fetch data from both APIs
		const chicagoResponse = await fetchChicagoArtworks();
		const wellcomeResponse = await fetchWellcomeArtworks();

		// Normalize the data
		const chicagoArtworks = chicagoResponse.data.map(
			normalizeChicagoArtwork
		);
		const wellcomeArtworks = wellcomeResponse.results.map(
			normalizeWellcomeArtwork
		);

		// Combine and print the results
		const combinedArtworks = [...chicagoArtworks, ...wellcomeArtworks];
		console.log("Combined Artworks:", combinedArtworks);
	} catch (error) {
		console.error("Error fetching or normalizing artworks:", error);
	}
};

// Run the test
testFetchArtworks();
