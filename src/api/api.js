import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export const busca = async(url, setDado) => {
  const reposta = await api.get(url)
  setDado(reposta.data)

}

export const listaPersonagens = async(url, setDado) => {
    const reposta = await api.get(url)
    setDado(reposta.data)
  
  }

export const mostraPersonagem = async(url, setDado) => {
  const reposta = await api.get(url)
  setDado(reposta.data)

}
