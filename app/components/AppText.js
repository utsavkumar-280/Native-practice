import { Text, StyleSheet, Platform } from "react-native";

import React from "react";

function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 15,
		fontWeight: "600",
		fontFamily: Platform === "android" ? "Roboto" : "Avenir",
	},
});
export default AppText;
