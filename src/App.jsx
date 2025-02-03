// libraries
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { useState } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";

// components
import Header from "./components/Header";

//styles
import "./index.css";
import Footer from "./components/Footer";

function App() {
	// const [] = useState(0);

	return (
		<ChakraProvider>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/collection" element={<Collection />} />
			</Routes>
			<Footer />
		</ChakraProvider>
	);
}

export default App;
