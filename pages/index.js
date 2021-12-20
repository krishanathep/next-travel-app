import Head from "next/head";
import Navbar from "../src/Navbar";
import CardItem from "../src/CardItem";
import { Container, Typography, Box, Grid } from "@material-ui/core";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Container>
        <Box mt={2}>
          <Typography variant="h5">Around the world</Typography>
          <Grid container spacing={3}>
            {data.map((at) => (
              <Grid md={4} key={at.id}>
                <CardItem key={at.id} at={at} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.mecallapi.com/api/attractions");
  const data = await res.json();

  return {
    props: { data },
  };
}
