import axios from "axios";
import { UsuarioData } from "./Interfaces/UsuarioData";

async function GetUserStatus(): Promise<UsuarioData> {
    const response = await axios.get("http://localhost:5555/Status");
    return response.data as UsuarioData;
}

export default GetUserStatus;