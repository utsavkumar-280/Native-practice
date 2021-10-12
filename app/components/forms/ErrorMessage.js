import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Apptext from "../AppText";

const ErrorMessage = ({ error, visible }) => {
	if (!error || !visible) return null;

	return <Apptext style={styles.error}>{error} </Apptext>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
	error: {
		color: "red",
	},
});
