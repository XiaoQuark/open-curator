import { useRef } from "react";

import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	useDisclosure,
} from "@chakra-ui/react";
import CustomSearch from "./CustomSearch";

export default function MobileDrawer() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Button ref={btnRef} onClick={onOpen} pos={"fixed"} right={4}>
				Search Tools
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size={"full"}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Search Tools</DrawerHeader>

					<DrawerBody>
						<CustomSearch />
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Confirm</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
