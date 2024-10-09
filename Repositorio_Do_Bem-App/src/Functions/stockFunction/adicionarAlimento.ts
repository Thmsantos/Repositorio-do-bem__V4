import axios from "axios";
import { AlimentoData } from "./Interfaces/AlimentoData";


async function adicionarAlimento(alimento: AlimentoData | undefined) : Promise<Boolean>{
    const response = axios.post("http://localhost:5555/saveAlimento", alimento)
    return true
};

export default adicionarAlimento;