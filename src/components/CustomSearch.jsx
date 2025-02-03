import { useState, useEffect } from "react";

// components
import {
	Box,
	Flex,
	Text,
	Checkbox,
	CheckboxGroup,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Select,
	Button,
} from "@chakra-ui/react";

export default function CustomSearch({ onApplyFilters, artists }) {
	const [selectedCollections, setSelectedCollections] = useState([]);
	const [selectedRange, setSelectedRange] = useState([1500, 1900]); // Default: 1500–1900
	const [selectedArtist, setSelectedArtist] = useState("");
	const [sortBy, setSortBy] = useState("");

	// Handle applying filters
	const applyFilters = () => {
		onApplyFilters({
			collections: selectedCollections,
			centuryRange: selectedRange,
			artist: selectedArtist,
			sortBy,
		});
	};

	return (
		<Box bg="white" p={4} rounded="md" shadow="md">
			<Flex direction="column" gap={4}>
				<Text fontSize="xl" fontWeight="bold">
					Search Tools
				</Text>

				{/* Filter by Collection */}
				<Text fontWeight="medium">Collection</Text>
				<CheckboxGroup
					colorScheme="blue"
					onChange={setSelectedCollections}
				>
					<Checkbox value="Chicago Art Institute">
						Chicago Art Institute
					</Checkbox>
					<Checkbox value="Rijksmuseum">Rijksmuseum</Checkbox>
				</CheckboxGroup>

				{/* Filter by Century Range */}
				<Text fontWeight="medium">Century Range</Text>
				<RangeSlider
					aria-label={["min", "max"]}
					defaultValue={selectedRange}
					min={1000}
					max={2000}
					step={10}
					onChange={(val) => setSelectedRange(val)}
				>
					<RangeSliderTrack>
						<RangeSliderFilledTrack />
					</RangeSliderTrack>
					<RangeSliderThumb index={0} />
					<RangeSliderThumb index={1} />
				</RangeSlider>
				<Text>
					{selectedRange[0]} - {selectedRange[1]}
				</Text>

				{/* Filter by Artist */}
				<Text fontWeight="medium">Artist</Text>
				<Select
					placeholder="Select artist"
					onChange={(e) => setSelectedArtist(e.target.value)}
				>
					{artists.map((artist, index) => (
						<option key={index} value={artist}>
							{artist}
						</option>
					))}
				</Select>

				{/* Sort Options */}
				<Text fontWeight="medium">Sort By</Text>
				<Select
					placeholder="Select option"
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="artist-asc">Artist (A-Z)</option>
					<option value="artist-desc">Artist (Z-A)</option>
					<option value="year-asc">Year (Oldest First)</option>
					<option value="year-desc">Year (Newest First)</option>
				</Select>

				<Button colorScheme="blue" mt={4} onClick={applyFilters}>
					Apply Filters
				</Button>
			</Flex>
		</Box>
	);
}
