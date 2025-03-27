import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Bootstrap JS (para tooltips, modals, etc.)
import 'bootstrap-icons/font/bootstrap-icons.css'


const header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
                <div className="container">
                    <a className="navbar-brand" style={{ fontSize: "30px" }} href="#!">Saphira Luxury Spa</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto" >
                            <li className="nav-item "><a className="nav-link" href="/Inicio">Inicios</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Servicios">Servicios</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Masajes">Masajes</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Contacto">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default header;