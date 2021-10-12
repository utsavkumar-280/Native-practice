import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
	const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
	return (
		<>
			<AppTextInput
				placeholder="email"
				icon="email"
				autoCapitalize="none"
				autoCorrect={false}
				textContentType="emailAddress"
				keyboardType="email-address"
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormField;

const styles = StyleSheet.create({});
