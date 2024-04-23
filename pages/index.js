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
            link="/pag1"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card2.png"
            link="/pag2"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card3.png"
            link="/pag3"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card4.png"
            link="/pag4"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card5.png"
            link="/pag5"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card6.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card7.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card8.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card9.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card10.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card11.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={2} xs={12}>
          <MediaCard
            immagine="/img/card12.png"
            link="https://www.meta.com/it/quest/compare/?utm_source=gg&utm_medium=ps&utm_campaign=20265532690&utm_term=meta%20quest&utm_content=695699205995&utm_funnel=dcap&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745BFf0M6HfA_jdPzJ3hGybHRGAnLvrHa5lH9clO_e41oP9w9CmNwS6AaAo2MEALw_wcB&gclsrc=aw.ds"
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
            link="https://www.ray-ban.com/SearchDisplay?catalogId=22565&langId=-4&storeId=26152&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=rw4006&pageNumber=1&orderBy=__standard_desc&cid=PM-SGA_000000-1.IT-RayBanStories-IT-B-NA-CoreRBM-Exact-Prs-NA-Ecom-NA_RayBan_Facebook_Ray+Ban+Meta&s_kwcid=AL!16196!3!694932519314!e!!g!!ray%20ban%20meta!20589279767!156862825831&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Aa6EZOemTFS5dxSnA4i_WNjUl0dDHn_Yi-2_U3hNMNXYmX2chSTIUaArWrEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card2.png"
            link="https://www.ray-ban.com/SearchDisplay?catalogId=22565&langId=-4&storeId=26152&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=rw4006&pageNumber=1&orderBy=__standard_desc&cid=PM-SGA_000000-1.IT-RayBanStories-IT-B-NA-CoreRBM-Exact-Prs-NA-Ecom-NA_RayBan_Facebook_Ray+Ban+Meta&s_kwcid=AL!16196!3!694932519314!e!!g!!ray%20ban%20meta!20589279767!156862825831&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Aa6EZOemTFS5dxSnA4i_WNjUl0dDHn_Yi-2_U3hNMNXYmX2chSTIUaArWrEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card3.png"
            link="https://www.ray-ban.com/SearchDisplay?catalogId=22565&langId=-4&storeId=26152&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=rw4006&pageNumber=1&orderBy=__standard_desc&cid=PM-SGA_000000-1.IT-RayBanStories-IT-B-NA-CoreRBM-Exact-Prs-NA-Ecom-NA_RayBan_Facebook_Ray+Ban+Meta&s_kwcid=AL!16196!3!694932519314!e!!g!!ray%20ban%20meta!20589279767!156862825831&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Aa6EZOemTFS5dxSnA4i_WNjUl0dDHn_Yi-2_U3hNMNXYmX2chSTIUaArWrEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card4.png"
            link="https://www.ray-ban.com/SearchDisplay?catalogId=22565&langId=-4&storeId=26152&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=rw4006&pageNumber=1&orderBy=__standard_desc&cid=PM-SGA_000000-1.IT-RayBanStories-IT-B-NA-CoreRBM-Exact-Prs-NA-Ecom-NA_RayBan_Facebook_Ray+Ban+Meta&s_kwcid=AL!16196!3!694932519314!e!!g!!ray%20ban%20meta!20589279767!156862825831&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Aa6EZOemTFS5dxSnA4i_WNjUl0dDHn_Yi-2_U3hNMNXYmX2chSTIUaArWrEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card5.png"
            link="https://www.ray-ban.com/SearchDisplay?catalogId=22565&langId=-4&storeId=26152&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=rw4006&pageNumber=1&orderBy=__standard_desc&cid=PM-SGA_000000-1.IT-RayBanStories-IT-B-NA-CoreRBM-Exact-Prs-NA-Ecom-NA_RayBan_Facebook_Ray+Ban+Meta&s_kwcid=AL!16196!3!694932519314!e!!g!!ray%20ban%20meta!20589279767!156862825831&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Aa6EZOemTFS5dxSnA4i_WNjUl0dDHn_Yi-2_U3hNMNXYmX2chSTIUaArWrEALw_wcB&gclsrc=aw.ds"
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <MediaCard
            immagine="/img/-card6.png"
            link="https://www.ray-ban.com/SearchDisplay?catalogId=22565&langId=-4&storeId=26152&pageSize=24&clientSide=true&searchType=1000&resultCatEntryType=&viewMode=Rayban&showResultsPage=true&beginIndex=0&sType=SimpleSearch&newpage=true&searchTerm=rw4006&pageNumber=1&orderBy=__standard_desc&cid=PM-SGA_000000-1.IT-RayBanStories-IT-B-NA-CoreRBM-Exact-Prs-NA-Ecom-NA_RayBan_Facebook_Ray+Ban+Meta&s_kwcid=AL!16196!3!694932519314!e!!g!!ray%20ban%20meta!20589279767!156862825831&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Aa6EZOemTFS5dxSnA4i_WNjUl0dDHn_Yi-2_U3hNMNXYmX2chSTIUaArWrEALw_wcB&gclsrc=aw.ds"
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
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard6.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard7.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard8.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard9.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard10.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard11.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <MediaCard
            immagine="/img/ccard12.png"
            link="https://www.meta.com/it-it/experiences/"
          />
        </Grid>
      </Grid>
      <br/>
      <Footer>
        
      </Footer>
      <br/>
    </Layout>
  );
}
