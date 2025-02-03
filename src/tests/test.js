import { fetchChicagoArtworks } from "../api/chicagoApi.js";
import { fetchRijksmuseumArtworks } from "../api/rijksmuseumApi.js";
import {
	normaliseChicagoResponse,
	normaliseRijksmuseumResponse,
} from "../api/utils/normaliseData.js";

const testFetchArtworks = async () => {
	try {
		console.log("Fetching artworks...");

		// Fetch data from both APIs
		const chicagoResponse = await fetchChicagoArtworks();
		console.log("Chicago API Response:", chicagoResponse);

		const rijksmuseumResponse = await fetchRijksmuseumArtworks();
		console.log("Rijksmuseum API Response:", rijksmuseumResponse);

		if (!chicagoResponse || !rijksmuseumResponse) {
			console.error("One of the API responses is null.");
			return;
		}

		// Normalize the data and pass the collection name
		const chicagoArtworks = chicagoResponse.data.map((artwork) =>
			normaliseChicagoResponse(artwork, "Chicago Art Institute")
		);
		const rijksmuseumArtworks = rijksmuseumResponse.artObjects.map(
			(artwork) => normaliseRijksmuseumResponse(artwork, "Rijksmuseum")
		);

		// Combine and print the results
		const combinedArtworks = [...chicagoArtworks, ...rijksmuseumArtworks];
		console.log("Combined Artworks:", combinedArtworks);
	} catch (error) {
		console.error("Error fetching or normalizing artworks:", error);
	}
};

// Run the test
testFetchArtworks();
