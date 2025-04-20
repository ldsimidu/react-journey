import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() { //componente react
  return (
    <div className="App">
      <Banner/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>OLÁ MUNDO!</h1>
      </header>
    </div>
  );
}

export default App;
