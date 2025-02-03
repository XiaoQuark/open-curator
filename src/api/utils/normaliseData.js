export const normaliseChicagoResponse = (artwork) => {
	return {
		id: artwork.id,
		title: artwork.title,
		artist: artwork.artist_display || "Unknown Artist",
		date: artwork.date_display || "Unknown Date",
		medium: artwork.medium_display || "Unknown Medium",
		origin: artwork.place_of_origin || "Unknown Location",
		image: artwork.image_id
			? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
			: null,
	};
};

export const normaliseWellcomeResponse = (work) => {
	return {
		id: work.id,
		title: work.title || "Unknown Title",
		artist: work.contributors?.[0]?.agent?.label || "Unknown Artist",
		date: work.production?.[0]?.dates?.[0]?.display || "Unknown Date",
		medium: work.genres?.[0]?.label || "Unknown Medium",
		origin: work.subjects?.[0]?.label || "Unknown Location",
		image: work.images?.[0]?.url || null,
	};
};
