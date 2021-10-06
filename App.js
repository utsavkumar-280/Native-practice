import React, { useState } from "react";
import { Switch, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import AccountScreeen from "./app/screens/AccountScreeen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];

export default function App() {
	const [category, setCategory] = useState(categories[0]);
	return (
		<Screen>
			<AppPicker
				placeholder="Category"
				icon="apps"
				items={categories}
				selectedItem={category}
				onSelectItem={(item) => setCategory(item)}
			/>
			<AppTextInput placeholder="email" icon="email" />
		</Screen>
	);
}
