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
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
} from "react-native";

export default function App() {
	const [text, setText] = useState("");
	return (
		<SafeAreaView style={styles.container}>
			<TouchableHighlight onPress={() => alert("hello ji")}>
				<Image source={require("./assets/favicon.png")} />
			</TouchableHighlight>
			<TouchableOpacity onPress={() => alert("hello ji")}>
				<Image source={require("./assets/favicon.png")} />
			</TouchableOpacity>
			<TouchableWithoutFeedback onPress={() => alert("hello ji")}>
				<Image source={require("./assets/favicon.png")} />
			</TouchableWithoutFeedback>
			<TouchableNativeFeedback>
				<View
					style={{
						backgroundColor: "#d99089",
						height: 50,
						width: 300,
						margin: 30,
					}}
				></View>
			</TouchableNativeFeedback>
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
		alignItems: "center",
		justifyContent: "center",
	},
});
