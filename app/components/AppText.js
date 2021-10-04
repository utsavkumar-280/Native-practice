import { Text, StyleSheet, Platform } from "react-native";

import React from "react";

function AppText({ children }) {
	return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 10,
		fontWeight: "600",
		fontFamily: Platform === "android" ? "Roboto" : "Avenir",
	},
});
export default AppText;
