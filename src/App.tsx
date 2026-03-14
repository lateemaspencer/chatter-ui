import { Container, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Auth from "./components/Auth";

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
				<h1>Dark Mode</h1>
				<Auth />
			</Container>
		</ThemeProvider>
	);
};

export default App;
