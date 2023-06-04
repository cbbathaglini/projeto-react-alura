import axios from 'axios';

const livrosFavoritosAPI = axios.create({baseURL: "http://localhost:8011/favoritos" })


async function getLivrosFavoritos(){
    const responseLivro = await livrosFavoritosAPI.get("/")
    console.log("ah:"+ responseLivro.toString())
    return responseLivro.data
}


async function postLivroFavorito(id){
    await livrosFavoritosAPI.post(`/${id}`)
    
}

async function deleteLivroFavoritos(id){
    await livrosFavoritosAPI.delete(`/${id}`)
}

export {
    getLivrosFavoritos,
    postLivroFavorito,
    deleteLivroFavoritos
}
