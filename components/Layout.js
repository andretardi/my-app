import Head from 'next/head';
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Container from '@mui/material/Container';
import Header from "@/components/Header"

const theme = createTheme();
const sezioni= [
    {titolo: "Informatico", url: "/informatico"},
    {titolo: "Energie", url: "/energie"},
    {titolo: "Elettrico", url: "/elettrico"},
    {titolo: "Meccanico", url: "/meccanico"},
    {titolo: "Motoristico", url: "/motoristico"},
    {titolo: "Carrozzeria", url: "/carrozzeria"},
    {titolo: "Trasparenza", url: "/Trasparenza"}
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