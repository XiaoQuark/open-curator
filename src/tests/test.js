import { fetchChicagoArtworks } from "../api/chicagoApi.js";
import { fetchWellcomeArtworks } from "../api/wellcomeApi.js";
import {
	normaliseChicagoResponse,
	normaliseWellcomeResponse,
} from "../api/utils/normaliseData.js";

const testFetchArtworks = async () => {
	try {
		console.log("Fetching artworks...");

		// Fetch data from both APIs
		const chicagoResponse = await fetchChicagoArtworks();
		console.log("Chicago API Response:", chicagoResponse);

		const wellcomeResponse = await fetchWellcomeArtworks();
		console.log("Wellcome API Response:", wellcomeResponse);

		if (!chicagoResponse || !wellcomeResponse) {
			console.error("One of the API responses is null.");
			return;
		}

		// Normalize the data
		const chicagoArtworks = chicagoResponse.data.map(
			normaliseChicagoResponse
		);
		const wellcomeArtworks = wellcomeResponse.results.map(
			normaliseWellcomeResponse
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
