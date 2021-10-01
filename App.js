import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	TextInput,
	Switch,
	Image,
} from "react-native";

export default function App() {
	const [text, setText] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Image
				blurRadius={0.9}
				source={{ uri: "https://picsum.photos/200/400" }}
				style={styles.pic1}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "yellow",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 5,
		borderColor: "red",
	},
	pic1: {
		width: 300,
		height: 200,
		borderWidth: 2,
	},
});
