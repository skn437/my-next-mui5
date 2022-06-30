import { ThemeProvider } from "@mui/material/styles";
import MiniDrawer from "@/components/Drawer";
import theme from "@/layout/theme";

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<MiniDrawer children={children}></MiniDrawer>
		</ThemeProvider>
	);
};

export default Layout;
