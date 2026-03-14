import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Stack
			spacing={3}
			sx={{
				height: "100vh",
				maxWidth: {
					xs: "70%",
					md: "30%",
				},
				margin: "0 auto",
				justifyContent: "center",
			}}
		>
			<TextField
				type="email"
				label="email"
				variant="outlined"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<TextField
				type="password"
				label="password"
				variant="outlined"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
			<Button variant="contained">Login</Button>
		</Stack>
	);
};

export default Auth;
