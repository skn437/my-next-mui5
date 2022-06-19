import type { NextPage } from "next";
import TourCard from "@/components/TourCard";
import cities from "@/data/data.json";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "@/pages/index.module.scss";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
	return (
    <Grid item>
      {cities.map((city) => (
        <Box key={city.id}>
          <Typography
            component="h2"
            variant="h4"
            id={styles.city}
          >
            Top {city.name} Tours:
          </Typography>
          <Grid
            container
            spacing={5}
          >
            {city.tours.map((tour, index) => (
              <TourCard tour={tour} key={index}></TourCard>
            ))}
          </Grid>
        </Box>  
      ))}
    </Grid>
  )
};

export default Home;

