import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket</AppText>
				<AppText style={styles.price}>$100</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: "500",
	},
	price: {
		color: colors.secondary,
		fontWeight: "800",
		fontSize: 20,
	},
});

export default ListingDetailsScreen;
