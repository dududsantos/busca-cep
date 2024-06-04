import axios from 'axios'

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export default api

//poderia ser feito sem essa configuração, utilizando o fetch no app.js, e passadno a url completa no get, mas é uma boa prática criar um arquivo de configuração para a api, para que se houver necessidade de mudar a url, seja feito apenas nesse arquivo.
