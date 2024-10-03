import axios from "axios";
import { AlimentoData } from "./Interfaces/AlimentoData";
import { ResponseFunction } from "../ResponseFunction";

function adicionarAlimento(alimento: AlimentoData) : Promise<ResponseFunction>{
    return axios.post("http://localhost:5555/saveAlimento", alimento)
        .then((res) => {
            return {
                success: true,
                data: res.data
            };
        })
        .catch((error) => {
            return {
                success: false,
                error: error.message || 'Erro desconhecido'
            };
        })
};

export default adicionarAlimento;