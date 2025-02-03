import {
	Flex,
	VStack,
	Stack,
	useBreakpointValue,
	Text,
	Heading,
	Button,
} from "@chakra-ui/react";

export default function Hero() {
	return (
		<Flex
			w={"full"}
			h={"80vh"}
			backgroundImage={
				"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
			}
			backgroundSize={"cover"}
			backgroundPosition={"center center"}
		>
			<VStack
				w={"full"}
				justify={"center"}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
			>
				<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
					<Heading
						as="h1"
						color={"white"}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({
							base: "5xl",
							md: "6xl",
						})}
					>
						Open Curator
					</Heading>
					<Text
						color={"white"}
						fontWeight={600}
						lineHeight={1.2}
						fontSize={useBreakpointValue({
							base: "2xl",
							md: "3xl",
						})}
					>
						Explore over -number- art pieces and curate your own
						virtual exhibition!
					</Text>
					<Stack direction={"row"}>
						<Button
							bg={"blue.400"}
							rounded={"full"}
							color={"white"}
							_hover={{ bg: "blue.500" }}
						>
							Explore the Collection
						</Button>
						<Button
							bg={"whiteAlpha.300"}
							rounded={"full"}
							color={"white"}
							_hover={{ bg: "whiteAlpha.500" }}
						>
							Subscribe
						</Button>
					</Stack>
				</Stack>
			</VStack>
		</Flex>
	);
}
