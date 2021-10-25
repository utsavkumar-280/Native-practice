import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const AppButton = ({ title, titleColor = "primary", onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, { backgroundColor: colors[titleColor] }]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		padding: 15,
		marginBottom: 15,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		borderRadius: 30,
	},
	text: {
		color: colors.white,
		fontSize: 20,
		fontWeight: "600",
		textTransform: "uppercase",
		letterSpacing: 0.5,
	},
});

export default AppButton;
