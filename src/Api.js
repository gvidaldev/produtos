import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    loadCategorias: () => api.get('http://localhost:3001/categorias'),
    deleteCategorias: (id) => api.delete('http://localhost:3001/categorias/'+id),
    createCategoria: (categoria) => api.post('categorias', categoria)
}

export default apis