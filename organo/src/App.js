import { useState } from 'react';
import './App.css'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() { //componente react

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    }, 
    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]) //criando uma lista que será armazenada os novos Colaboradores

  const newColaborador = (colaborador) => { //Criando função para novoColaborador
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) //essas reticências evita o bug de criar 2 cards de uma vez, espalhas os itens no array
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        times={times.map(time => time.nome)} 
        novoColaborador={colaborador => newColaborador(colaborador)}
      />
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        />)} 
        <Footer/>
    </div>
  );
}

export default App;
