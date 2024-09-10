import axios from 'axios';

function DeleteAlimento() {
  const id = "664f417ed0f22246082bcfae";
  
  axios.delete(`/deleteAlimento/${id}`).then((res) => {
    console.log(res.data)
  })
 
}

export default DeleteAlimento;


