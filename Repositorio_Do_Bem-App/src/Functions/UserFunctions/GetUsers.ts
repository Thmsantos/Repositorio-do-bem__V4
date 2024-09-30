import axios from "axios";
import { UsuarioData } from "./Interfaces/UsuarioData";

async function GetUsers(): Promise<UsuarioData[]> {
    const response = await axios.get("http://localhost:5555/getAllUsuarios");
    return response.data as UsuarioData[];
}

export default GetUsers;