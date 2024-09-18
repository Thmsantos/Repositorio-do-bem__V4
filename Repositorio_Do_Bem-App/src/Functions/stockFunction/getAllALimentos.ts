import axios from "axios";

function getAlimentos(){
    axios.get("http://localhost:5555/getAllAlimentos")
    .then((res) => {
        return res.data
    })
}


export default getAlimentos();