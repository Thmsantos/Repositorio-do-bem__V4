import axios from "axios";

const adicionarAlimento = async () => {
    const res = await axios.post("http://localhost:5555/saveAlimento", {
        nome: "Ervilha", 
        peso: "70g",
        validade: "20/07/2026",
        quantidade: "5",
        emailDoador: "analaura@gmail.com" 
    });
    console.log(res.data);
};

export default adicionarAlimento;
