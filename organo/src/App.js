import './App.css'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() { //componente react
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
      <Time nome="G2"/>
      <Time nome="LOUD"/>
      <Time nome="MIBR"/>
      <Time nome="Sentinels"/>
    </div>
  );
}

export default App;
