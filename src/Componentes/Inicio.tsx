import fotospa1 from '../assets/masajecara1.avif';
import fotospa2 from '../assets/masajecara2.avif';
import fotospa3 from '../assets/masajecara3.avif';
import fotomujer from '../assets/mujerspa.avif';
import fotospa4 from '../assets/seccion3imagen1.avif';
import fotospa5 from '../assets/seccion3imagen2.avif';
import fotospa6 from '../assets/seccion3imagen3.avif';



const Inicio = () => {
    return (
        <>
            <div style={{ backgroundColor: "#21272e" }} className=' p-5' >
                <div className="w-50 mx-auto text-center mt-5 p-2" style={{ minHeight: "80px", color: "white" }}>
                    <h1 className="display-2 fw-bold">
                        Relájate y renueva tu bienestar hoy
                    </h1>
                </div>
                <br />
                <div className='text-center p-2' style={{ minHeight: "80px", minWidth: "20px", color: "white" }}>
                    <h6 className="text-center fs-6 text-muted-white" >
                        Ofrecemos masajes corporales y limpiezas faciales personalizadas.
                    </h6>
                </div>
                <div className='text-center p-2' style={{ minHeight: "80px", color: "white", fontSize: "1.5rem" }}>
                    <button type="button" className="btn btn-outline-light btn-lg fw-bold" style={{ borderRadius: "20px" }} >
                        Reserva
                    </button>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center gap-3">

                    <div className="d-flex justify-content-center">
                        <div className="card shadow rounded overflow-hidden" style={{ width: "320px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                            <img
                                src={fotospa1}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <p className="card-text fw-bold text-white">
                                    Masajes corporales para tu total relajación.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="card shadow rounded overflow-hidden" style={{ width: "320px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                            <img
                                src={fotospa2}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <p className="card-text fw-bold text-white">
                                    Masajes post operatorios para una recuperación óptima.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center" >
                        <div className="card shadow rounded overflow-hidden" style={{ width: "320px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                            <img
                                src={fotospa3}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <p className="card-text fw-bold text-white" >
                                    Limpiezas faciales que revitalizan tu piel.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="py-6"></div>
            </div >


            <div className="d-flex justify-content-center align-items-center gap-6 p-6">
                <div style={{ width: "40%" }}>
                    <h1 className="fw-bold">Bienvenidos a Saphira Luxury Spa</h1>
                    <p className="fs-5 text-muted">
                        En Saphira Luxury Spa, ofrecemos masajes corporales, masajes postoperatorios y limpiezas faciales,
                        todo con un enfoque en el bienestar y la relajación de nuestros clientes.
                    </p>

                    <div className="d-flex gap-4 mt-4">
                        <div>
                            <h2 className="fw-bold text-primary">150+</h2>
                            <p className="text-muted">Cuidado excepcional</p>
                        </div>
                        <div>
                            <h2 className="fw-bold text-primary">15</h2>
                            <p className="text-muted">Clientes satisfechos</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        src={fotomujer}
                        className="rounded"
                        alt="Mujer en spa"
                        style={{ height: "500px", width: "500px", objectFit: "cover", borderRadius: "20px" }}
                    />
                </div>


            </div>

            <div className="py-6"></div>

            <div className='p-5' style={{ backgroundColor: "#617DA1" }}>
                <div className="py-6"></div>
                <div className="text-center text-white">
                    <h1 className="fw-bold">Servicios de Spa</h1>
                    <div className="py-6"></div>
                    <p className="lead mx-auto mt-3" style={{ maxWidth: "500px" }}>
                        Ofrecemos masajes corporales, post operatorios y limpiezas faciales para tu bienestar.
                    </p>
                </div>


                <div className="py-6"></div>

                <div className="d-flex justify-content-center gap-3">

                    <div className="d-flex justify-content-center">
                        <div className="card shadow rounded overflow-hidden" style={{ width: "450px", backgroundColor: "#ffff" }}>
                            <img
                                src={fotospa4}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="card-text fw-bold text-black">
                                    Masajes Corporales
                                </h6>
                                <p>Relájate con nuestros masajes corporales personalizados para aliviar tensiones y mejorar tu bienestar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="card shadow rounded overflow-hidden" style={{ width: "450px", backgroundColor: "#ffff" }}>
                            <img
                                src={fotospa5}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="card-text fw-bold text-black">
                                    Masajes Postoperatorios
                                </h6>
                                <p>
                                    Ayudamos en tu recuperación con masajes postoperatorios diseñados para tu comodidad y sanación.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center" >
                        <div className="card shadow rounded overflow-hidden" style={{ width: "450px", backgroundColor: "#ffff" }} >
                            <img
                                src={fotospa6}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="card-text fw-bold text-black" >
                                    Limpiezas Faciales
                                </h6>
                                <p>
                                    Revitaliza tu piel con nuestras limpiezas faciales que nutren y rejuvenecen tu rostro.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="py-6"></div>
                <div className="text-center">
                    <h1 className="fw-bold">Galería</h1>
                    <div className="py-2"></div>
                    <p className="lead mx-auto mt-3" style={{ maxWidth: "500px" }}>
                        Descubre nuestros servicios de masajes y limpiezas faciales.
                    </p>
                </div>
            </div>

            <div>
                
            </div>
        </>
    );
}
export default Inicio;