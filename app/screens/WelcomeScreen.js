import React from "react";
import {
	ImageBackground,
	StyleSheet,
	View,
	Image,
	Text,
	Platform,
} from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			blurRadius={Platform.OS === "android" ? 1.5 : 5}
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text style={styles.head}>Selling second hand stuff made easy</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="Login" />
				<AppButton title="Register" titleColor="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	head: {
		fontSize: 22.5,
		fontWeight: "600",
		textAlign: "center",
		marginTop: 30,
	},
	loginButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#fc5c65",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#4ecdc4",
	},
	buttonContainer: {
		width: "100%",
		padding: 10,
	},
});

export default WelcomeScreen;
