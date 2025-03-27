import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicio from '../Paginas/PaginaInicio'
import PaginaServicios from '../Paginas/Paginaservicios'
import PaginaMasajes from '../Paginas/PaginaMasajes'
import PaginaContacto from '../Paginas/Paginacontacto'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Inicio" element={<PaginaInicio />} />
            </Routes>

            <Routes>
                <Route path="/Servicios" element={<PaginaServicios />} />
            </Routes>

            <Routes>
                <Route path="/Masajes" element={<PaginaMasajes />} />
            </Routes>

            <Routes>
                <Route path="/Contacto" element={<PaginaContacto />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes
