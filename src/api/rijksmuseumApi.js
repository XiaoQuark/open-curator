import axios from "axios";

const rijksmuseumApi = axios.create({
	baseURL: "https://www.rijksmuseum.nl/api/en/collection",
});

// Replace with your API key
const API_KEY = "Zri1Qczx";

export const fetchRijksmuseumArtworks = async (page = 1, pageSize = 20) => {
	try {
		const response = await rijksmuseumApi.get("/", {
			params: {
				key: API_KEY,
				p: page,
				ps: pageSize,
				imgonly: true, // Only fetch results with images
			},
		});
		return response.data.artObjects;
	} catch (error) {
		console.error("Error fetching from Rijksmuseum API:", error);
		return null;
	}
};
