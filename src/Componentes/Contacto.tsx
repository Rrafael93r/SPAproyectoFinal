import Mapa from "./Mapa";

const Contacto = () => {
    return (

        <>

            <div className="py-4 py-md-6"></div>
            <div className="container p-5 d-flex gap-3 align-content-center" >

                <div className="row container-fluid d-flex justify-content-center align-items-center gap-3">
                    <div>
                        <h1>
                            Contáctanos para más información
                        </h1>
                        <p>Estamos aquí para atenderte. Contáctanos para agendar tu masaje o limpieza facial. Tu bienestar es nuestra prioridad.</p>
                    </div>

                    <div>
                        <h6>
                            Atención
                        </h6>
                        <p>
                            1234567890
                        </p>
                    </div>

                    <div>
                        <h6>
                            Soporte
                        </h6>
                        <p>
                            info@saphiraluxuryspa.com
                        </p>
                    </div>
                </div>


                <div className="container">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">
                                Nombre completo del cliente                        </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Example input placeholder"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">
                                Correo electrónico del cliente*
                                Escribe tu email aquí
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder="Another input placeholder"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">
                                Mensaje o consulta*
                                Escribe tu mensaje aquí
                            </label>

                            <textarea className="form-control" aria-label="With textarea"></textarea>


                        </div>

                        <button className="btn btn-dark p-3" style={{ borderRadius: "20px" }}>
                            Enviar consulta ahora
                        </button>
                    </div>
                </div>


            </div>

            <div className="py-4 py-md-6"></div>
            <div className="py-4 py-md-6"></div>

            <div className="container p-5 d-flex gap-3 align-content-center">
                <div className="row container-fluid d-flex justify-content-center align-items-center ">
                    <div>
                        <h1>
                            Ubicación
                        </h1>
                        <p>Visítanos en Saphira Luxury Spa para disfrutar de nuestros servicios de masajes corporales y limpiezas faciales en un ambiente relajante.</p>
                    </div>

                    <div>
                        <h6>
                            Dirección
                        </h6>
                        <p>
                            Calle Ejemplo 123, Ciudad
                        </p>
                    </div>

                    <div>
                        <h6>
                            Horario
                        </h6>
                        <p>
                            Lunes a Viernes
                        </p>
                    </div>
                </div>

                <div className="container">
                    <Mapa />
                </div>
            </div>

            <div className="py-4 py-md-6"></div>

            </>

            );
}
            export default Contacto;