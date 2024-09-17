import axios from "axios";
import { UsuarioData } from "./Interfaces/UsuarioData";
import { ResponseFunction } from "./Interfaces/ResponseFunction";

function cadastroUser(data: UsuarioData): Promise<ResponseFunction> {
    return axios.post("http://localhost:5555/saveUsuario", data)
        .then((res) => {
            window.location.href = "../../Pages/login"
            return {
                success: true,
                data: res.data
            };
        })
        .catch((error) => {
            console.error(error);
            return {
                success: false,
                error: error.message || 'Erro desconhecido'
            };
        });
}

export default cadastroUser;