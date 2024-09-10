import axios from "axios";

function getAlimentos(){
    axios.get("http://localhost:5555/getAllAlimentos")
    .then((res) => {
        console.log(res.data)
        console.log(res.data)
    })
}


export default getAlimentos();