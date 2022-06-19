import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/MUI5/theme";
import SearchAppBar from "@/components/AppBar";

const Layout = ({ children }) => {
	return (
    <ThemeProvider theme={theme}>
      <SearchAppBar></SearchAppBar>
      <Container>
        <Grid
          container
          spacing={5}
        >
          {children}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
