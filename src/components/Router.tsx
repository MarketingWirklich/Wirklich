import { Route, Routes } from "react-router-dom";
import { Contato } from "../pages/Contato";
import { Empresa } from "../pages/Empresa";
import { Home } from "../pages/Home";
import { Instagram } from "../pages/Instagram";
import { MeioAmbiente } from "../pages/MeioAmbiente";
import { Revolução40 } from "../pages/Revolução40";
import { Solucoes } from "../pages/Solucoes";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/solu%C3%A7%C3%B5es" element={<Solucoes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/meio-ambiente" element={<MeioAmbiente />} />



            <Route path="/instagram" element={<Instagram />} />


            {/* Páginas do Blog */}

            <Route path="/blog/revolucao-40-inspira-ampliacao-da-wirklich" element={<Revolução40/>} />
        </Routes>
    )
}