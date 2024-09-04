import { BrowserRouter, Route as BrowserRouterRoute, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Estoque from "../Pages/estoque";
import Login from "../Pages/login";
import Cadastro from "../Pages/cadastro";
const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <BrowserRouterRoute path="/home" element={<Home />}/>
                <BrowserRouterRoute path="/estoque" element={<Estoque />}/>
                <BrowserRouterRoute path="/login" element={<Login />}/>
                <BrowserRouterRoute path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;