import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './src/components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FilmesPopulares from './src/pages/filmes/FilmesPopulares';
import FilmesDetalhes from './src/pages/filmes/FilmesDetalhes';
import FilmesLancamentos from "./src/pages/filmes/FilmesLancamentos";
import FilmesEmCartaz from "./src/pages/filmes/FilmesEmCartaz";
import AtoresDetalhes from "./src/pages/atores/AtoresDetalhes";
import SeriesPopulares from "./src/pages/series/SeriesPopulares";
import SeriesCartaz from "./src/pages/series/SeriesCartaz";
import SeriesLancamento from "./src/pages/series/SeriesLancamento";
import SeriesDetalhes from "./src/pages/series/SeriesDetalhes";
import Home from './src/pages/Home';




export default function App() {
  return (
      <div className='App-header'>
      <BrowserRouter>
      <Menu></Menu>
      <Container>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/populares" element={<FilmesPopulares />} />
        <Route path="/filmes/:id" element={<FilmesDetalhes />} />
        <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>} />
        <Route path="/filmes/Em/Cartaz" element={<FilmesEmCartaz/>} />
        <Route path="/atores/:id" element={<AtoresDetalhes/>} />
        <Route path="/series/:id" element={<SeriesDetalhes/>} />
        <Route path="/series/populares" element={<SeriesPopulares/>} />
        <Route path="/series/cartaz" element={<SeriesCartaz/>} />
        <Route path="/series/lancamento" element={<SeriesLancamento/>} />

        </Routes>
      </Container>
      </BrowserRouter>
      
      </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
