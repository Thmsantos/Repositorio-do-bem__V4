import { BrowserRouter, Route as BrowserRouterRoute, Routes } from "react-router-dom";
import Home from "../Pages/home";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <BrowserRouterRoute path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;