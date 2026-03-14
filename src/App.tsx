import { Container, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Container>
				<RouterProvider router={router} />
				<h1>Dark Mode</h1>
			</Container>
		</ThemeProvider>
	);
};

export default App;
