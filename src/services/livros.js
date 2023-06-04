//const axios = require("axios")
import axios from 'axios';

const livrosAPI = axios.create({baseURL: "http://localhost:8011/livros" })


async function getLivros(){
    const responseLivro = await livrosAPI.get("/")
    console.log("ah:"+ responseLivro.toString())
    return responseLivro.data
}


export {
    getLivros
}

//module.exports = { getLivros };