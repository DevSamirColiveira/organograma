import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape'

function App() {

  const times = [
    {
        nome: 'Data Science',
        corPrimaria: '#D90416',
        corSecundaria: 'rgba(231, 98, 109, 0.30)',
      },
      {
        nome: 'Devops',
        corPrimaria: '#400409',
        corSecundaria: 'rgba(136, 98, 101, 0.30)',
      },
      {
        nome: 'Front-End',
        corPrimaria: '#033F73',
        corSecundaria: 'rgba(98, 135, 168, 0.30)',
      },
      {
        nome: 'Inovação e Gestão',
        corPrimaria: '#616161',
        corSecundaria: 'rgba(156, 156, 156, 0.30)',
      },
      {
        nome: 'Mobile',
        corPrimaria: '#031326',
        corSecundaria: 'rgba(98, 108, 119, 0.30)',
      },
      {
        nome: 'Programação',
        corPrimaria: '#646F85',
        corSecundaria: 'rgba(158, 165, 179, 0.30)',
      },
      {
        nome: 'UX e Design',
        corPrimaria: '#101D3D',
        corSecundaria: 'rgba(106, 114, 134, 0.30)',
      }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   
      <Rodape/>
    </div>
  );
}

export default App;
