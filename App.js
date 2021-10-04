import React, { useState } from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
	const [text, setText] = useState("");
	return <WelcomeScreen />;
}
