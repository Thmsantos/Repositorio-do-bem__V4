import axios from "axios";

function cadastro(){
    axios.post("http://localhost:5555/saveUsuario", {
        "cnpj": "123456789",
        "nomeEmpresa" : "Nome",
        "cep":"12345678",
        "email":"nome@gmail.com",
        "senha": "1234"
    })
}

export default cadastro;