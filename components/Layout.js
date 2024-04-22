import Head from 'next/head';
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Container from '@mui/material/Container';
import Header from "@/components/Header"


const theme = createTheme();
const sezioni= [
    {titolo: "Meta Quest 1", url: "http://localhost:3000/pag1"},
    {titolo: "Meta Quest 2", url: "http://localhost:3000/pag2"},
    {titolo: "Meta Quest 3", url: "http://localhost:3000/pag3"},
    {titolo: "Meta Quest Pro", url: "http://localhost:3000/pag4"},
    {titolo: "Cinturino Elite", url: "http://localhost:3000/pag5"},
    {titolo: "hompage", url: "http://localhost:3000/"},
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