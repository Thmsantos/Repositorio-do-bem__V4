
import axios from 'axios'; // Adicione essa linha para importar o axios

function DeleteAlimento() {
  // Lista de IDs dos alimentos que deseja deletar
  const id = "664f417ed0f22246082bcfae";

    
axios.delete(`/deleteAlimento/${id}`).then((res) => {
    console.log(res.data)
})
 
}

export default DeleteAlimento;


