import Head from 'next/head';
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Container from '@mui/material/Container';
import Header from "@/components/Header"


const theme = createTheme();
const sezioni= [
    {titolo: "Meta Quest 1", url: ""},
    {titolo: "Meta Quest 2", url: ""},
    {titolo: "Meta Quest 3", url: ""},
    {titolo: "Meta Quest Pro", url: ""},
    {titolo: "Cinturino Elite", url: ""},
]

export default function Layout({children}){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Header titolo="META QUEST" sezioni={sezioni} />
                <Head>
                    <title>Componenti</title>
                </Head>
                <main>
                    {children}
                </main>
            </Container>
        </ThemeProvider>
    )
}