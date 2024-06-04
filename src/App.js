import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="input">
        <input type="text" placeholder="Digite o CEP" />
        <button className="button">
          <FiSearch size={24} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP:</h2>
        <span>Rua</span>
        <span>Complemento: xxxx</span>
        <span>Bairro: xxxx</span>
        <span>Cidade: xxxx</span>
      </main>
    </div>
  )
}

export default App
