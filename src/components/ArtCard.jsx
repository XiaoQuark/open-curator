import { Flex, Box, Image, useColorModeValue, Text } from "@chakra-ui/react";

export default function ArtCard({ artwork }) {
	const { image, altText, title, author, date, medium, origin, collection } =
		artwork;

	return (
		<Flex p={50} w="full" alignItems="center" justifyContent="center">
			<Box
				bg={useColorModeValue("white", "gray.800")}
				maxW="sm"
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				position="relative"
			>
				<Image
					src={image}
					alt={altText || "Artwork image"}
					roundedTop="lg"
					objectFit="cover"
					width="100%"
					height="200px"
				/>

				<Box p="6">
					<Text fontSize="xl" fontWeight="bold" isTruncated>
						{title}
					</Text>
					<Text fontSize="md" color="gray.500">
						{author}
					</Text>
					<Text fontSize="sm" color="gray.600">
						Date: {date}
					</Text>
					<Text fontSize="sm" color="gray.600">
						Origin: {origin}
					</Text>
					<Text fontSize="sm" color="gray.600">
						Medium: {medium}
					</Text>
					<Text fontSize="sm" fontWeight="semibold" color="blue.500">
						Collection: {collection}
					</Text>
				</Box>
			</Box>
		</Flex>
	);
}

{
	/* <Flex
						mt="1"
						justifyContent="space-between"
						alignContent="center"
					>
						<Box
							fontSize="2xl"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated
						>
							<Text>Art 1</Text>
						</Box>
					</Flex> */
}

{
	/* <Flex
						mt="1"
						justifyContent="space-between"
						alignContent="center"
					>
						<Box
							fontSize="xl"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated
						>
							<Text>Author 1</Text>
						</Box>
					</Flex> */
}
