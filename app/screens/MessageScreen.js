import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListDeleteAction from "../components/ListDeleteAction";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/pfp03.png"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/pfp03.png"),
	},
	{
		id: 3,
		title: "T3",
		description: "D3",
		image: require("../assets/pfp03.png"),
	},
];

const MessageScreen = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [isrefreshing, setIsRefreshing] = useState(false);

	const deleteHandler = (item) => {
		const modifiedMessages = messages.filter(
			(message) => message.id !== item.id
		);
		setMessages(modifiedMessages);
	};
	console.log(messages);
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(messages) => messages.id.toString()}
				renderItem={({ item }) => (
					<ListItems
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => alert(`Title is ${item.title}`)}
						renderRightActions={() => (
							<ListDeleteAction onPress={() => deleteHandler(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={() => <ListItemSeperator />}
				refreshing={isrefreshing}
				onRefresh={() => setMessages(initialMessages)}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
	},
});

export default MessageScreen;
