export const normaliseChicagoResponse = (artwork) => {
	return {
		id: artwork.id,
		title: artwork.title,
		author: artwork.artist_display || "Unknown Artist",
		date: artwork.date_display || "Unknown Date",
		medium: artwork.medium_display || "Unknown Medium",
		origin: artwork.place_of_origin || "Unknown Location",
		image: artwork.image_id
			? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
			: null,
		collection: "Chicago Art Institute",
	};
};

export const normaliseRijksmuseumResponse = (artwork) => {
	// Extract the date from the long title
	const dateMatch = artwork.longTitle?.match(/\d{4}/);
	const date = dateMatch ? dateMatch[0] : "Unknown Date";

	return {
		id: artwork.id,
		title: artwork.title || "Unknown Title",
		artist: artwork.principalOrFirstMaker || "Unknown Artist",
		date,
		origin: artwork.productionPlaces?.[0] || "Unknown Location",
		medium: "Unknown Medium", // Placeholder: Adjust if you query for material later
		image: artwork.webImage?.url || null,
		altText: `Image of ${artwork.title || "artwork"}`,
		collection: "Rijksmuseum",
	};
};

// export const normaliseWellcomeResponse = (work) => {
// 	const productionDate =
// 		work.production && work.production[0] && work.production[0].dates
// 			? work.production[0].dates[0]
// 			: null;

// 	const date = productionDate
// 		? productionDate.label ||
// 		  `${productionDate.start || "Unknown"} - ${productionDate.end || ""}`
// 		: "Unknown Date";

// 	return {
// 		id: work.id,
// 		title: work.title || "Unknown Title",
// 		author: work.contributors?.[0]?.agent?.label || "Unknown Artist",
// 		date,
// 		medium: work.genres?.[0]?.label || "Unknown Medium",
// 		origin: work.subjects?.[0]?.label || "Unknown Location",
// 		image: work.images?.[0]?.url || null,
// 	};
// };
