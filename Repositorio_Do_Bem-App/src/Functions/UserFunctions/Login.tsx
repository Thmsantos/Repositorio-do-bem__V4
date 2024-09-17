import axios from "axios";
import { LoginData } from "./Interfaces/LoginData";
import { ResponseFunction } from "./Interfaces/ResponseFunction";
import { useNavigate } from 'react-router-dom';


function Login(usuario: LoginData): Promise<ResponseFunction>{
    const navigate = useNavigate();

    return axios.post("http://localhost:5555/AuthUser", usuario)
        .then((res) => {
            window.location.href = "http://localhost:5173/estoque";
            navigate("/estoque")
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