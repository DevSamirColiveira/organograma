import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

  const times = [
    // {
    //   nome: 'Data Science',
    //   corPrimaria: '#A6D157',
    //   corSecudndaria: '#F0F8E2',
    // },
    // {
    //   nome: 'Devops',
    //   corPrimaria: '#E06B69',
    //   corSecudndaria: '#FDE7E8',
    // },
    // {
    //   nome: 'Front-End',
    //   corPrimaria: '#82CFFA',
    //   corSecudndaria: '#E8F8FF',
    // },
    // {
    //   nome: 'Inovação e Gestão',
    //   corPrimaria: '#FF8A29',
    //   corSecudndaria: '#FFEEDF',
    // },
    // {
    //   nome: 'Mobile',
    //   corPrimaria: '#FFBA05',
    //   corSecudndaria: '#FFF5D9',
    // },
    // {
    //   nome: 'Programação',
    //   corPrimaria: '#57C278',
    //   corSecudndaria: '#D9F7E9',
    // },
    // {
    //   nome: 'UX e Design',
    //   corPrimaria: '#DB6EBF',
    //   corSecudndaria: '#FAE9F5',
    // }
    {
      nome: 'Data Science',
      corPrimaria: '#D90416',
      corSecudndaria: 'rgba(231, 98, 109, 0.30)',
    },
    {
      nome: 'Devops',
      corPrimaria: '#400409',
      corSecudndaria: 'rgba(136, 98, 101, 0.30)',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#033F73',
      corSecudndaria: 'rgba(98, 135, 168, 0.30)',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#616161',
      corSecudndaria: 'rgba(156, 156, 156, 0.30)',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#031326',
      corSecudndaria: 'rgba(98, 108, 119, 0.30)',
    },
    {
      nome: 'Programação',
      corPrimaria: '#646F85',
      corSecudndaria: 'rgba(158, 165, 179, 0.30)',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#101D3D',
      corSecudndaria: 'rgba(106, 114, 134, 0.30)',
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    // debugger
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomesDosTimes={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>

      {/* foi mudade para linha de baixo <Time nome={time.nome}/> */}
      {times.map(time => <Time 
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecudndaria={time.corSecudndaria}
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
        />)}
      <Footer/>
    </div>
  );
}

export default App;
