import axios from "axios";
import { LoginData } from "./Interfaces/LoginData";
import { ResponseFunction } from "../ResponseFunction";

function Login(usuario: LoginData): Promise<ResponseFunction>{
    return axios.post("http://localhost:5555/AuthUser", usuario)
        .then((res) => {
            window.location.href = "http://localhost:5173/estoque";
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

export default Login;