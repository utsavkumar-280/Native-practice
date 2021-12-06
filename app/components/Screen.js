import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={[style, styles.screen]}>{children}</View>
		</SafeAreaView>
	);
};

export default Screen;

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	screen: {
		flex: 1,
	},
});
