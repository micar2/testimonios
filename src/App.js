import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Titulo</h1>
        <Testimonio
          nombre="Cacotas"
          pais="Mierder"
          cargo="Amo de cacas"
          empresa="Wc"
          texto="blablablbalabllaallablba"
          imagen="cacotas" />  
         <Testimonio
          nombre="Buuu"
          pais="FAntasma"
          cargo="Invible"
          empresa="Asesinos a gogo"
          texto="blablablbalabllaallablba"
          imagen="natalia" />    
        <Testimonio
          nombre="Idioter"
          pais="GAGA"
          cargo="Lanzador de huesos"
          empresa="darleios"
          texto="blablablbalabllaallablba"
          imagen="idiota" /> 
      </div>

    </div>
  );
}

export default App;
