import { Box, Flex, useColorModeValue, Text, Input } from "@chakra-ui/react";

export default function CustomSearch() {
	return (
		<Box
			bg={useColorModeValue("white", "gray.900")}
			w="full"
			h="full"
			p={4}
		>
			<Flex alignItems="center" justifyContent="space-between" mb={4}>
				<Text fontSize="2xl" fontWeight="bold">
					Search Tools
				</Text>
			</Flex>
			<Input placeholder="Search here" size="md" variant="filled" />
		</Box>
	);
}
