import axios from "axios";
import { AlimentoData } from "./Interfaces/AlimentoData";

async function UpdateAlimento(Alimento: AlimentoData, Id: string): Promise<Boolean> {
   const response = axios.put(`http://localhost:5555/updateAlimento/${Id}`, Alimento)
   return true //verificar o response
}

export default UpdateAlimento;