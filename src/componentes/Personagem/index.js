import './Personagem.css';

const Personagem = ({ nome, imagem, cargo, corDeFundo }) => {
  return (
    <div className='personagem'>
      <div className='personagem__imagem' style={{ backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome}/>
      </div>
      <div className='personagem__descricao'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}
export default Personagem;