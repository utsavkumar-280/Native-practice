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
	Alert,
} from "react-native";

export default function App() {
	const [text, setText] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Image
				blurRadius={0.5}
				source={{ uri: "https://picsum.photos/200/400" }}
				style={styles.pic1}
			/>
			<Text>Hello</Text>
			<View
				style={{
					backgroundColor: "white",
					padding: 1,
					borderWidth: 1,
					borderColor: "green",
				}}
			>
				<Button
					title="Click Me"
					onPress={() =>
						Alert.alert("Pay", "Amount $299", [
							{ text: "Cancel", onPress: () => alert("Chalta Hu Bhai") },
							{ text: "Ok" },
						])
					}
				/>
				<Button
					title="Touch Me"
					onPress={() =>
						Alert.prompt("Question 1", "What is your Name?", (text) =>
							alert(`Thaaga Bhai, tera naam ${text} hai`)
						)
					}
				/>
			</View>
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
