import Layout from "@/components/Layout";
import Image from "next/image";
import card from "@/components/card";
import { MedicalInformationRounded } from "@mui/icons-material";
import Container from "@mui/material/Grid";
import MediaCard from "@/components/card";
import Grid from "@mui/material/Grid";
import Footer from "@/components/footer";
import Text from "@/components/text";

export default function Home() {
  return (
    <Layout>
      <main></main>

      <img src="img/pag1.png" width="100%" height="100%" />

      <br />
      <br />
      <Text titolo="IMMERSIVO" testo="Imergiti in una realtà alternata per due ore di tranquillità giocando o lavorando"></Text>
      <br />

      <Grid container spacing={1}>
        <Grid item lg={6} xs={12}>
          <MediaCard
            immagine="/img/pag11.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <MediaCard
            immagine="/img/pag12.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
      </Grid>

      <br />
      <Text titolo="COMODITA'" testo="la comodità del meta quest 1, puoi portarlo dove vuoi senza collegarlo ad un pc"></Text>
      <br />

      <Grid container spacing={5}>
        <Grid item lg={3} xs={12}>
          <MediaCard immagine="/img/card1.png" link="/pag1" titolo= "Meta quest 1" testo= "primo oculus onlyone quindi non serve collegarlo in un computer per farlo funzionare "/>
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard immagine="/img/card2.png" link="/pag2" titolo= "Meta quest 2" testo= "la versione meta quest 2 è piu leggero e ora ha il traking delle mani per usarlo senza il controller"/>
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard immagine="/img/card3.png" link="/pag3" titolo= "Meta quest 3" testo= "appena uscito il meta quest 3 ha delle telcamere per la realtà mista, dei controller più leggeri e sensori più avanzati per il traking delle mani"/>
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard immagine="/img/card4.png" link="/pag4"  titolo= "Meta quest 4" testo= "il meta quest pro è il top di gamma adatto sopratutto per lavorare, un giusto rimale di Apple Viion Pro."/>
        </Grid>
      </Grid>

      <br />
      <Footer></Footer>
      <br />
    </Layout>
  );
}
