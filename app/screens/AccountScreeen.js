import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";

import ListItems from "../components/ListItems";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

const AccountScreeen = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItems
					title="Utsav kumar"
					subTitle="utsav@gmail.com"
					image={require("../assets/pfp03.png")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(item) => item.title}
					renderItem={({ item }) => (
						<ListItems
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>
			<ListItems
				title="Log Out"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
};

export default AccountScreeen;

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: colors.light,
	},
});
