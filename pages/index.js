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

      <br />
      <br />

       <Grid container spacing={5}>
       <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card1.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card2.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card3.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card4.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card5.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card6.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card7.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card8.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card9.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card10.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card11.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          <Grid item lg={2} xs={12}>
            <MediaCard
              immagine="/img/card12.png"
              href="https://skillypig.donboscosandona.it/home/student?course_id=28"
            />
          </Grid>
          
       </Grid>

       <br />

       <img src="img/meta1.png" width="50%" height="10%" />

    </Layout>
    
  );
}
