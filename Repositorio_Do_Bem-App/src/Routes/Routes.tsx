import { BrowserRouter, Route as BrowserRouterRoute, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Estoque from "../Pages/estoque";
const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <BrowserRouterRoute path="/home" element={<Home />}/>
                <BrowserRouterRoute path="/estoque" element={<Estoque />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;