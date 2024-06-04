import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handlesearch() {
    if (input.length !== 8) {
      alert('CEP inválido')
      return
    }

    try {
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      setInput('')

      if (response.data.erro) {
        alert('CEP não encontrado')
        setInput('')
        return
      }
    } catch (error) {
      alert('Erro ao buscar CEP')
    }
  }
  return (
    <div className="container">
      <h1 className="title">Busca de CEP</h1>

      <div className="input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Digite o CEP (Apenas números)"
        />
        <button className="button" onClick={handlesearch}>
          <FiSearch size={24} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}{' '}
          </span>
        </main>
      )}
    </div>
  )
}

export default App
