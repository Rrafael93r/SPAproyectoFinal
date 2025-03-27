import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#617DA1", color: "white" }} className="container-fluid p-3 p-md-6">
            <div className="row text-center text-md-start">
                {/* Sección de Servicios */}
                <div className="col-12 col-md-4 mb-4">
                    <h4 className="fs-5 fs-md-4">Servicios</h4>
                    <p className="small">Masajes corporales y limpiezas faciales personalizadas.</p>
                    <div className="d-flex justify-content-center justify-content-md-start gap-3">
                        <a style={{ color: "white" }} href="#" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook fs-5"></i>
                        </a>
                        <a style={{ color: "white" }} href="#" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram fs-5"></i>
                        </a>
                        <a style={{ color: "white" }} href="#" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-tiktok fs-5"></i>
                        </a>
                        <a style={{ color: "white" }} href="#" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter-x fs-5"></i>
                        </a>
                    </div>
                    <small className="d-block mt-3">© 2025. All rights reserved.</small>
                </div>

                {/* Sección de Contacto */}
                <div className="col-12 col-md-4 mb-4">
                    <h4 className="fs-5 fs-md-4">Contacto</h4>
                    <p className="small">
                        +34 912345678 <br /> contacto@saphiraluxuryspa.com
                    </p>
                </div>

                {/* Sección de Suscripción */}
                <div className="col-12 col-md-4 mb-3">
                    <h6 className="fs-5 fs-md-4">Suscríbete para relajación</h6>
                    <p className="mb-2 small">Escriba su correo electrónico.</p>
                    <div className="d-flex d-flex flex-column flex-md-row gap-2">
                        <input type="email" placeholder="Ingresa tu correo" className="form-control" style={{ maxWidth: "100%" }} />

                        <button className="btn btn-dark" style={{ borderRadius: "10px" }}>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

