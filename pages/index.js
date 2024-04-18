import Layout from "@/components/Layout";
import Image from "next/image";
import card from "@/components/card";
import { MedicalInformationRounded } from "@mui/icons-material";
import Container from "@mui/material/Grid";
import MediaCard from "@/components/card";
import Grid from "@mui/material/Grid";
import Footer from "@/components/footer";

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

      <Grid container spacing={0}>
        <Grid container xs={12} lg={6}>
        <img src="img/meta1.png" width="100%"/>
        </Grid>
        <Grid container xs={12} lg={6}>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card1.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card2.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card3.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card4.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card5.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card6.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        </Grid>
      </Grid>
<br/>
<br/>
      <Grid container spacing={5}>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard5.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard6.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard7.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard8.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard9.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard10.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard11.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard12.png"
            href="https://skillypig.donboscosandona.it/home/student?course_id=28"
          />
        </Grid>
      </Grid>
      <br/>
      <Footer></Footer>
      <br/>
    </Layout>
  );
}
