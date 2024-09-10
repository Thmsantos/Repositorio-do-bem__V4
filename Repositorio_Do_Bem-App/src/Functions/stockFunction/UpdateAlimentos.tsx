import axios from "axios";

function UpdateAlimento(){
    const data = {
        "alimentoId": "66e04bc79c7d8a6225c530d7",
        "nome": "Arroz Integral Att",
        "peso": "1kg",
        "validade": "2025-09-15",
        "quantidade": "20",
        "idDoador": "D123456",
        "emailDoador": "doador@example.com"
    }

    axios.put(`http://localhost:5555/updateAlimento/${data.alimentoId}`)
    .then((res) => {
        console.log(res.data)
        console.log(res.data)
    })
}

export default UpdateAlimento();