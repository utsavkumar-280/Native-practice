import React, { useState } from "react";
import { Switch, View } from "react-native";

import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

import {
	LoginScreen,
	ListingsScreen,
	AccountScreeen,
	MessageScreen,
	ViewImageScreen,
	Screen,
	ListingDetailsScreen,
	WelcomeScreen,
} from "./app/screens";

import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
	return <ListingEditScreen />;
}
