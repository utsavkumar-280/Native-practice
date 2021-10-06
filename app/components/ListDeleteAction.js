import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ListDeleteAction = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					size={35}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListDeleteAction;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 75,
		justifyContent: "center",
		alignItems: "center",
	},
});
