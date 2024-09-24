import { BrowserRouter, Route as BrowserRouterRoute, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Estoque from "../Pages/estoque";
import Login from "../Pages/login";
import Cadastro from "../Pages/cadastro";
import Modal1 from "../Pages/modal";
import VerificaSenha from "../Pages/verificaSenha";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <BrowserRouterRoute path="/" element={<Home />}/>
                <BrowserRouterRoute path="/estoque" element={<Estoque />}/>
                <BrowserRouterRoute path="/login" element={<Login />}/>
                <BrowserRouterRoute path="/cadastro" element={<Cadastro />}/>
                <BrowserRouterRoute path="/modal" element={<Modal1/>}/>
                <BrowserRouterRoute path="/verificaSenha" element={<VerificaSenha/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;