import { BrowserRouter, Route as BrowserRouterRoute, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Estoque from "../Pages/estoque";
import Login from "../Pages/login";
import Cadastro from "../Pages/cadastro";
import Modal1 from "../Pages/modal";
import VerificaSenha from "../Pages/verificaSenha";
import PaginaErro404 from "../Pages/pagina_erro_404";
import PaginaErro500 from "../Pages/pagina_erro_500";
import Modal_Props from "../Pages/modal_props";


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <BrowserRouterRoute path="/home" element={<Home />}/>
                <BrowserRouterRoute path="/" element={<Home />}/>
                <BrowserRouterRoute path="/estoque" element={<Estoque />}/>
                <BrowserRouterRoute path="/login" element={<Login />}/>
                <BrowserRouterRoute path="/cadastro" element={<Cadastro />}/>
                <BrowserRouterRoute path="/modal" element={<Modal1/>}/>
                <BrowserRouterRoute path="/verificaSenha" element={<VerificaSenha/>}/>
                <BrowserRouterRoute path = "/404" element = {<PaginaErro404/>}/>
                <BrowserRouterRoute path="/500" element = {<PaginaErro500/>}/>
                <BrowserRouterRoute path="/modalProps" element = {<Modal_Props/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;