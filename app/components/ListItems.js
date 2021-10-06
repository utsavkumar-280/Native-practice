import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItems({
	title,
	subTitle,
	image,
	onPress,
	renderRightActions,
	IconComponent,
	style,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={[styles.container, style]}>
					{image && <Image source={image} style={styles.image} />}
					{IconComponent}
					<View style={styles.detailsContainer}>
						{title && <AppText style={styles.title}>{title}</AppText>}
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 12.5,
		backgroundColor: colors.white,
	},
	image: {
		height: 60,
		width: 60,
		borderRadius: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	subTitle: {
		letterSpacing: 0.5,
		color: colors.medium,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
});

export default ListItems;
