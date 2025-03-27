import fotoservicio1 from "../assets/fotoservicios1.avif"
import fotoservicio2 from "../assets/fotoservicios2.avif"
import fotoservicio3 from "../assets/fotoservicios3.avif"
import fotoservicio4 from "../assets/fotoservicios4.avif"
import fotofalsa from "../assets/6107081.jpg"


const Servicios = () => {
    return (
        <>
            <div className="p-3 p-md-5" style={{ backgroundColor: "#617DA1" }}>
                <div className="py-4 py-md-6"></div>
                <div className="text-center text-white">
                    <h1 className="fw-bold">Servicios de Spa</h1>
                    <div className="py-3 py-md-2"></div>
                    <p className="lead mx-auto mt-3 px-3" style={{ maxWidth: "500px" }}>
                        Ofrecemos masajes corporales y faciales, además de tratamientos post operatorios personalizados.
                    </p>
                </div>

                <div className="py-4 py-md-6"></div>

                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 px-3">
                    <div className="d-flex justify-content-center mb-3 mb-md-0">
                        <div
                            className="card shadow overflow-hidden"
                            style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ffff", borderRadius: "25px 25px 0 0" }}
                        >
                            <img
                                src={fotofalsa || "/placeholder.svg"}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "300px", objectFit: "cover", borderRadius: "25px 25px 0 0" }}
                            />
                            <div className="card-body">
                                <h6 className="card-text fw-bold text-black">Masajes Corporales</h6>
                                <p>
                                    Relájate con nuestros masajes corporales diseñados para aliviar el estrés y la tensión.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mb-3 mb-md-0">
                        <div
                            className="card shadow overflow-hidden"
                            style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ffff", borderRadius: "25px 25px 0 0" }}
                        >
                            <img
                                src={fotofalsa || "/placeholder.svg"}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "300px", objectFit: "cover", borderRadius: "25px 25px 0 0" }}
                            />
                            <div className="card-body">
                                <h6 className="card-text fw-bold text-black">Masajes Postoperatorios</h6>
                                <p>Ayudamos en la recuperación postoperatoria con masajes especializados y cuidados personalizados.</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div
                            className="card shadow overflow-hidden"
                            style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ffff", borderRadius: "25px 25px 0 0" }}
                        >
                            <img
                                src={fotofalsa || "/placeholder.svg"}
                                className="card-img-top"
                                alt="spa"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="card-text fw-bold text-black">Ayudamos en la recuperación postoperatoria con masajes especializados y cuidados personalizados.</h6>
                                <p>Limpiezas Faciales</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 py-md-6"></div>
                <div className="py-4 py-md-6"></div>
            </div>


            <div className="py-4 py-md-6"></div>

            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-6 p-3 p-md-6">
                <div style={{ width: "500px", maxWidth: "600px" }} className="mb-4 mb-lg-0 px-3">
                    <h1 className="fw-bold">Bienvenidos a Saphira Spa</h1>
                    <p className="fs-5 text-muted">
                        En Saphira Luxury Spa ofrecemos masajes corporales, masajes post operatorios y limpiezas faciales para tu bienestar y relajación.
                    </p>

                    <div className="py-4 py-md-3"></div>

                    <div className="d-flex gap-4 mt-4">
                        <button
                            type="button"
                            className="btn btn-outline-dark btn-lg fw-bold"
                            style={{ borderRadius: "40px", padding: "10px 30px" }}
                        >
                            <h6 className="fs-4 fs-md-2 m-0">Contáctanos</h6>
                        </button>
                    </div>
                </div>
                <div className="px-3">
                    <img
                        src={fotofalsa || "/placeholder.svg"}
                        alt="Mujer en spa"
                        style={{ height: "550px", width: "500px", maxWidth: "500px", objectFit: "cover", borderRadius: "25px" }}
                        className="img-fluid"
                    />
                </div>
            </div>


            <div className="py-4 py-md-6"></div>

            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-6 p-3 p-md-6" >

                <div className="px-3 position-relative" style={{ width: "400px", height: "500px", borderRadius: "25px" }} >
                    {/* Imagen grande */}
                    <img
                        src={fotofalsa || "/placeholder.svg"}
                        alt="Mujer en spa"
                        style={{
                            height: "500px",
                            width: "400px",
                            objectFit: "cover",
                            borderRadius: "25px",
                        }}
                        className="img-fluid"
                    />

                    {/* Imagen pequeña superpuesta */}
                    <img
                        src={fotofalsa || "/placeholder.svg"}
                        alt="Mujer en spa"
                        style={{
                            height: "250px",
                            width: "200px",
                            objectFit: "cover",
                            borderRadius: "25px",
                            position: "absolute",
                            top: "120px", // Ajusta según lo necesites
                            right: "-50px", // Ajusta según lo necesites
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra opcional
                        }}
                        className="img-fluid"
                    />
                </div>




                <div style={{
                    width: "500px", maxWidth: "600px",
                    position: "relative",
                    right: "-60px",
                }} className="mb-4 mb-lg-0 px-3">
                    <h1 className="fw-bold">Nuestra Filosofía de Bienestar</h1>
                    <p className="fs-5 text-muted">
                        Nos dedicamos a brindar servicios de calidad, personalizados para cada cliente, asegurando una experiencia única y revitalizante en cada visita.
                    </p>

                    <div className="py-4 py-md-3"></div>

                </div>
            </div>

            <div style={{ backgroundColor: "#21272e" }} className="p-3 p-md-5">
                <div className="py-4 py-md-5"></div>
                <div
                    className="d-flex justify-content-center flex-column align-items-center gap-2"
                    style={{ color: "white", textAlign: "center" }}
                >
                    <p>★★★★★</p>
                    <p className="px-3" style={{ maxWidth: "350px" }}>
                        Los masajes en Saphira Luxury Spa son una experiencia extraordinaria. Me sentí renovada y revitalizada. Además, la limpieza facial fue muy efectiva. ¡Recomiendo totalmente!
                    </p>
                </div>
                <div className="py-4 py-md-6"></div>
                <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                    <img
                        className="avatar avatar-lg rounded-circle"
                        src={fotofalsa || "/placeholder.svg"}
                        alt="Usuario"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <p className="text-white">Claudia R.</p>
                </div>
                <div className="py-3"></div>
            </div>



        </>
    );
}
export default Servicios;