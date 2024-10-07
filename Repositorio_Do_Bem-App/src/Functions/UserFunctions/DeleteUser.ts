import axios from "axios";

async function DeleteUser(Id: string): Promise<Boolean> {
    const response = await axios.delete(`http://localhost:5555/deleteUsuario/${Id}`);
    return true // verificar o response
}

export default DeleteUser;