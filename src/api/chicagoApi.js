import axios from "axios";

const chicagoApi = axios.create({
	baseURL: "https://api.artic.edu/api/v1",
});

export const fetchChicagoArtworks = async (page = 1, limit = 20) => {
	try {
		const response = await chicagoApi.get("/artworks", {
			params: {
				page,
				limit,
				fields: "id,title,artist_display,date_display,medium_display,place_of_origin,image_id",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching from Chicago API", error);
		return null;
	}
};
