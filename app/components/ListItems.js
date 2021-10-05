import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItems({ title, subTitle, image }) {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<View>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 50,
		marginRight: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	subTitle: {
		letterSpacing: 0.5,
		color: colors.medium,
	},
});

export default ListItems;
