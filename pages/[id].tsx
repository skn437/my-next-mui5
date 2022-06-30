import Info from "@/components/Info";
import cities from "@/data/data.json";
import { Container, Grid } from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  let pathP: any = [];
  cities.forEach((city) => {
    const path = city.tours.map((tour) => {
      return {
        params: {
          id: tour.id.toString()
        }
      };
    });
    pathP.push(...path);
  });
  const paths = [...pathP];

  return {
    paths: paths,
    fallback: false
  };
};

interface Props {
  details: any[];
}

export const getStaticProps: GetStaticProps<Props> = async (paths: any) => {
  const id = await paths.params.id;
  let dataP: any = [];
  cities.forEach((city) => {
    city.tours.forEach((tour) => {
      if (tour.id.toString() === id) {
        dataP.push(tour);
      }
    });
  });
  const data = [...dataP];
  return {
    props: {
      details: data
    },
    revalidate: 10
  };
};

const Details: NextPage<Props> = (props: Props) => {
  return (
    <Grid item>
      {props.details.map((doc) => (
        <Container key={doc.id}>
          <Info doc={doc}></Info>
        </Container>
      ))}
    </Grid>
  );
}

export default Details;