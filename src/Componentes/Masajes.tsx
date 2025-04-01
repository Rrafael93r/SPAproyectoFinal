import fotofalsa from "../assets/6107081.jpg"

const Masajes = () => {
  return (
    <>
      <div>
        {/* Sección de reserva */}
        <div className="p-3 p-md-5"
          style={{ backgroundColor: "rgb(247, 244, 244)" }}>
          <div className="w-100 w-md-75 w-lg-50 mx-auto text-center mt-3 mt-md-5 p-2" style={{ color: "black", }}>
            <h4 className="display-6 splay-md-2 fw-bold">Masajes Relajantes</h4>
          </div>
          <br />
          <div className="text-center p-2">
            <h6 className="text-center" style={{ fontSize: "15px", fontWeight: "400", color: "black" }}>
              Ofrecemos masajes corporales y post operatorios para tu bienestar y relajación total.
            </h6>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 px-3"
            style={{ marginTop: "20px" }}>

            <div className="d-flex justify-content-center mb-3 mb-md-0">
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "250px", width: "500px", objectFit: "cover", borderRadius: "20px 20px 20px 20px" }}
              />
              <div
                className="card shadow rounded overflow-hidden"
                style={{ width: "100%", maxWidth: "320px", position: "absolute", backgroundColor: "rgb(255, 255, 255)", bottom: "", top: "460px" }}
              >
                <div className="card-body text-center">
                  <h6>Masajes Faciales</h6>
                  <p className="card-text fw-bold" style={{ fontSize: "12px", fontWeight: "400", color: "black" }}>
                    Nuestras limpiezas faciales revitalizan tu piel, dejándola fresca y radiante después de cada sesión.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mb-3 mb-md-0">
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "250px", width: "500px", objectFit: "cover", borderRadius: "20px 20px 20px 20px" }}
              />
              <div
                className="card shadow rounded overflow-hidden"
                style={{ width: "100%", maxWidth: "320px", position: "absolute", backgroundColor: "rgb(255, 255, 255)", bottom: "", top: "460px" }}
              >
                <div className="card-body text-center">
                  <h6>Masajes Faciales</h6>
                  <p className="card-text fw-bold" style={{ fontSize: "12px", fontWeight: "400", color: "black" }}>
                    Nuestras limpiezas faciales revitalizan tu piel, dejándola fresca y radiante después de cada sesión.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 py-md-6"></div>
          <div className="py-4 py-md-6"></div>
          <div className="py-4 py-md-6"></div>
        </div >



        <div>
          <div className="py-4 py-md-6"></div>
          <div className="text-center">
            <h1 className="fw-bold">Masajes</h1>
            <div className="py-2"></div>
            <p className="lead mx-auto mt-3 px-3" style={{ maxWidth: "500px", fontSize: "15px" }}>
              Disfruta de nuestros servicios de masajes y tratamientos faciales.
            </p>
          </div>

          <div className="d-flex flex-column gap-3 px-3">
            <div className="d-flex justify-content-center">
              <img
                alt="Mujer en spa"
                className="img-fluid"
                style={{ maxHeight: "500px", width: "640px", maxWidth: "800px", objectFit: "cover", borderRadius: "15px" }}
                src={fotofalsa || "/placeholder.svg"}
              />
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img
                src={fotofalsa || "/placeholder.svg"}
                alt="Spa"
                className="img-fluid"
                style={{ height: "120px", width: "120px", objectFit: "cover", borderRadius: "20px" }}
              />
              <img
                src={fotofalsa || "/placeholder.svg"}
                alt="Spa"
                className="img-fluid"
                style={{ height: "120px", width: "120px", objectFit: "cover", borderRadius: "20px" }}
              />
              <img
                src={fotofalsa || "/placeholder.svg"}
                alt="Spa"
                className="img-fluid"
                style={{ height: "120px", width: "120px", objectFit: "cover", borderRadius: "20px" }}
              />
              <img
                src={fotofalsa || "/placeholder.svg"}
                alt="Spa"
                className="img-fluid"
                style={{ height: "120px", width: "120px", objectFit: "cover", borderRadius: "20px" }}
              />
              <img
                src={fotofalsa || "/placeholder.svg"}
                alt="Spa"
                className="img-fluid"
                style={{ height: "120px", width: "120px", objectFit: "cover", borderRadius: "20px" }}
              />
            </div>
          </div>
          <div className="py-4 py-md-6"></div>
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
            Los masajes en Saphira Luxury Spa son excepcionales. Me ayudaron a relajarme y a recuperarme después de mi cirugía. ¡Altamente recomendados!
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
          <p className="text-white">María López</p>
        </div>
        <div className="py-3"></div>
      </div>


    </>
  )
};
export default Masajes;