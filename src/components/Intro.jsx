import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
} from "@chakra-ui/react";

export default function Intro() {
	return (
		<Container maxW={"5xl"} py={12} mt={16} mb={16}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
				<Stack spacing={4}>
					<Heading>A project by art lovers. For art lovers</Heading>
					<Text color={"gray.500"} fontSize={"lg"}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore
					</Text>
				</Stack>
				<Flex>
					<Image
						rounded={"md"}
						alt={"feature image"}
						src={
							"https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
						}
						objectFit={"cover"}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
