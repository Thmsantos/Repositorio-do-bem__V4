import axios from "axios";
import { UsuarioData } from "./Interfaces/UsuarioData";

async function EditUser(User: UsuarioData, Id: string): Promise<Boolean> {
    const response = await axios.put(`http://localhost:5555/updateUsuario/${Id}`, User)
    return true; //verificar o response
}

export default EditUser;