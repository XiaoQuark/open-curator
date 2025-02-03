import { Flex, Box, Image, useColorModeValue, Text } from "@chakra-ui/react";

export default function ArtCard() {
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
					src={
						"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80"
					}
					alt={"Wayfarer Classic"}
					// alt={`Picture of ${data.name}`}
					roundedTop="lg"
				/>

				<Box p="6">
					<Flex
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
					</Flex>

					<Flex
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
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
}
