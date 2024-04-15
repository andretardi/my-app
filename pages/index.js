import Layout from "@/components/Layout";
import Image from "next/image";
import card from "@/components/card";
import { MedicalInformationRounded } from "@mui/icons-material";
import Container from "@mui/material/Grid";
import MediaCard from "@/components/card";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Layout>
      <main></main>

      <img src="img/image1.png" width="100%" height="100%" />

    <br/>
    <br/>

      <Container maxwidth="xl">
        <Grid cantainer spacing={2}>
          <Grid item xs={2}>
            <MediaCard  immagine="/img/card1.png" href="https://skillypig.donboscosandona.it/home/student?course_id=28" />
          </Grid>
        </Grid>


      </Container>
    </Layout>
  );
}
