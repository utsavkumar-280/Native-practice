import React, { useState } from "react";
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem.js";

const AppPicker = ({
	icon,
	placeholder,
	items,
	selectedItem,
	onSelectItem,
}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							color={colors.medium}
							size={20}
							style={styles.icon}
						/>
					)}

					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label} </AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						color={colors.medium}
						size={20}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={isModalVisible} animationType="slide">
				<Screen>
					<Button title="close" onPress={() => setIsModalVisible(false)} />
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setIsModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 10,
		marginVertical: 10,
		alignItems: "center",
	},

	icon: {
		margin: 10,
	},
	text: {
		flex: 1,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
});
