import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  const [cep, setCep] = useState('')

  function handlesearch() {
    alert('valor do cep: ' + cep)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="input">
        <input
          value={cep}
          onChange={e => setCep(e.target.value)}
          type="text"
          placeholder="Digite o CEP"
        />
        <button className="button" onClick={handlesearch}>
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
