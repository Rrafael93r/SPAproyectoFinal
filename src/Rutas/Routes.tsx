import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicio from '../Paginas/PaginaInicio'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
