import { Container, Grid } from "@mui/material";

const NextChildren = ({ children }) => {
  return (
    <Container>
      <Grid container spacing={5}>
        {children}
      </Grid>
  </Container>
  );
}

export default NextChildren;