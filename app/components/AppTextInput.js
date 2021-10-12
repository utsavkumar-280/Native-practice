import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					color={colors.medium}
					size={20}
					style={styles.icon}
				/>
			)}
			<TextInput
				style={[defaultStyles.text, { flex: 1 }]}
				{...otherProps}
				placeholderTextColor={defaultStyles.colors.medium}
			/>
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 30,
		flexDirection: "row",
		width: "100%",
		padding: 7.5,
		marginVertical: 10,
	},

	icon: {
		margin: 10,
	},
});
