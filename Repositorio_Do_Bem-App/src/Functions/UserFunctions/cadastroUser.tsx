import axios from "axios";

interface UsuarioData {
    cnpj: string;
    nomeEmpresa: string;
    numero: string;
    cep: string;
    email: string;
    senha: string;
}

function cadastroUser(data: UsuarioData){
    axios.post("http://localhost:5555/saveUsuario", data)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    })
}

export default cadastroUser;