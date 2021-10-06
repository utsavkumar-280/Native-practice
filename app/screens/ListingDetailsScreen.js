import React from "react";
import {
	SafeAreaView,
	View,
	Image,
	StyleSheet,
	ImageBackground,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItems from "../components/ListItems";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.listContainer}>
					<ListItems
						title="Utsav Kumar"
						subTitle="10 products"
						image={require("../assets/pfp03.png")}
						style={{ padding: 0 }}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 350,
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
		marginVertical: 5,
	},
	listContainer: {
		marginVertical: 25,
	},
});

export default ListingDetailsScreen;
