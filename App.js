import React, { useState } from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import { View } from "react-native";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
	const [text, setText] = useState("");
	return <ListingDetailsScreen />;
}
