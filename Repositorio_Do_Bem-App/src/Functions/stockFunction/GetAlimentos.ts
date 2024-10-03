import axios from "axios";
import { AlimentoData } from "./Interfaces/AlimentoData";

async function GetAlimentos(): Promise<AlimentoData[]>{
    const response = await axios.get("http://localhost:5555/getAllAlimentos")
    return response.data as AlimentoData[];
}

export default GetAlimentos;