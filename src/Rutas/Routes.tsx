import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PaginaInicio from '../Paginas/PaginaInicio';
import PaginaServicios from '../Paginas/Paginaservicios';
import PaginaMasajes from '../Paginas/PaginaMasajes';
import PaginaContacto from '../Paginas/Paginacontacto';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Navigate to="/Inicio" />} />
                <Route path="/Inicio" element={<PaginaInicio />} />
                <Route path="/Servicios" element={<PaginaServicios />} />
                <Route path="/Masajes" element={<PaginaMasajes />} />
                <Route path="/Contacto" element={<PaginaContacto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;