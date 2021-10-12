import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { SubmitButton, AppForm, AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(8).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}
			>
				<AppFormField
					name="email"
					placeholder="email"
					icon="email"
					autoCapitalize="none"
					autoCorrect={false}
					textContentType="emailAddress"
					keyboardType="email-address"
				/>
				<AppFormField
					name="password"
					placeholder="password"
					icon="lock"
					autoCapitalize="none"
					autoCorrect={false}
					textContentType="password"
					secureTextEntry
				/>

				<SubmitButton />
			</AppForm>
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginBottom: 20,
		marginTop: 50,
	},
});
