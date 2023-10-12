import logo from './logo.svg';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home';
import CardItem from './Components/ItemListContainer/CardItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <div className="cardContainer-design">
      <CardItem imagen='../images/Suites/suitestandard.jpg' nombre='SUITE STANDARD' edificio='MERLOT SUITES' description='Monoambiente con una cama Queen, equipado para 2 personas.'/> 
      <CardItem imagen='../images/Suites/suitesuperior.jpg' nombre='SUITE SUPERIOR' edificio='MERLOT SUITES' description='Monoambiente con una cama King, equipado para 2 personas. '/> 
      <CardItem imagen='../images/Suites/suitefamiliar.jpg' nombre='SUITE FAMILIAR' edificio='MERLOT SUITES' description='Monoambiente con una cama Queen y dos individuales, equipado para 4 personas. '/> 
      <CardItem imagen='../images/Suites/suiteduplex.jpg' nombre='SUITE DUPLEX' edificio='MERLOT SUITES' description='Mnoambiente con una cama Queen y dos individuales, equipado para 4 personas'/> 
      <CardItem imagen='../images/Suites/suitedeluxe.jpg' nombre='SUITE DELUXE' edificio='MERLOT SUITES' description='Monoambiente con una cama Queen, equipado para 2 personas.'/> 
      <CardItem imagen='../images/Studios/studio5.jpg' nombre='STUDIO PB CON COCINA' edificio='MERLOT STUDIOS' description='Monoambiente con una cama Queen, equipado para 2 personas. '/> 
      <CardItem imagen='../images/Studios/studio6.jpg' nombre='STUDIO PB CON PATIO' edificio='MERLOT STUDIOS' description='Monoambiente con una cama individual, equipado para 1 persona. '/> 
      <CardItem imagen='../images/Studios/studiostandard.jpg' nombre='STUDIO STANDARD' edificio='MERLOT STUDIOS' description='Monoambiente con una cama King , equipado para 2 personas. '/> 
      <CardItem imagen='../images/Studios/studiosuperior.jpg' nombre='STUDIO SUPERIOR' edificio='MERLOT STUDIOS' description='Monoambiente con una cama Queen, equipado para 2 personas.'/> 
      <CardItem imagen='../images/Studios/studiotriplex.jpg' nombre='STUDIO TRIPLEX' edificio='MERLOT STUDIOS' description='Monoambiente con una cama Queen y dos individuales, equipado para 4 personas. '/> 
      <CardItem imagen='../images/Studios/circuito.webp' nombre='CIRCUITO DE SPA' edificio='MERLOT STUDIOS' description='Incluye hidromasaje, sauna y ducha escocesa. '/> 
      <CardItem imagen='../images/Studios/spa.webp' nombre='MASAJES' edificio='MERLOT STUDIOS' description='Masajes de treinta minutos o una hora.'/> 
      <CardItem imagen='../images/Studios/circuitomasajes.jpg' nombre='CIRCUITO + MASAJES' edificio='MERLOT STUDIOS' description='Incluye hidromasaje, sauna y ducha escocesa con masajes de treinta minutos o una hora'/> 

      </div>
    </div>
  );
}


export default App;
