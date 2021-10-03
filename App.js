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
	Alert,
	Platform,
	StatusBar,
} from "react-native";

export default function App() {
	const [text, setText] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			<Button
				title="Click Me"
				onPress={() =>
					Alert.alert("Pay", "Amount $299", [
						{ text: "Cancel", onPress: () => alert("Chalta Hu Bhai") },
						{ text: "Ok" },
					])
				}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		// alignItems: "center",
		// justifyContent: "center",
	},
});
