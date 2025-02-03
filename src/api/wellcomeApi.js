import axios from "axios";

const wellcomeApi = axios.create({
	baseURL: "https://api.wellcomecollection.org/catalogue/v2",
});

export const fetchWellcomeArtworks = async (page = 1, pageSize = 20) => {
	try {
		const response = await wellcomeApi.get("/works", {
			params: {
				page,
				pageSize,
				include:
					"contributors,production,genres,subjects,images,production",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching from Wellcome API:", error);
		return null;
	}
};
