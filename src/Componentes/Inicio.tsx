import fotospa1 from "../assets/masajecara1.avif"
import fotospa2 from "../assets/masajecara2.avif"
import fotospa3 from "../assets/masajecara3.avif"
import fotomujer from "../assets/mujerspa.avif"
import fotospa4 from "../assets/seccion3imagen1.avif"
import fotospa5 from "../assets/seccion3imagen2.avif"
import fotospa6 from "../assets/seccion3imagen3.avif"
import fotospa7 from "../assets/fotograndegaleria.avif"
import fotospa8 from "../assets/fotopequeñagaleria1.avif"
import fotospa9 from "../assets/fotopequeñagaleria2.avif"
import fotospa10 from "../assets/fotopequeñagaleria3.avif"
import fotospa11 from "../assets/fotopequeñagaleria4.avif"
import fotospa12 from "../assets/fotopequeñagaleria5.avif"
import fotospa13 from "../assets/fotousausriocomentario.avif"
import fotofalsa from "../assets/6107081.jpg"
const Inicio = () => {
  return (
    <>
      {/* Sección de reserva */}
      <div style={{ backgroundColor: "#21272e" }} className="p-3 p-md-5">
        <div className="w-100 w-md-75 w-lg-50 mx-auto text-center mt-3 mt-md-5 p-2" style={{ color: "white" }}>
          <h1 className="display-4 display-md-2 fw-bold">Relájate y renueva tu bienestar hoy</h1>
        </div>
        <br />
        <div className="text-center p-2" style={{ color: "white" }}>
          <h6 className="text-center fs-6 text-muted-white">
            Ofrecemos masajes corporales y limpiezas faciales personalizadas.
          </h6>
        </div>
        <div className="text-center p-2" style={{ color: "white" }}>
          <button
            type="button"
            className="btn btn-outline-light btn-lg fw-bold"
            style={{ borderRadius: "40px", padding: "10px 30px" }}
          >
            <h2 className="fs-4 fs-md-2 m-0">Reserva</h2>
          </button>
        </div>
        <br />
        <br />
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 px-3">
          <div className="d-flex justify-content-center mb-3 mb-md-0">
            <div
              className="card shadow rounded overflow-hidden"
              style={{ width: "100%", maxWidth: "320px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <p className="card-text fw-bold text-white">Masajes corporales para tu total relajación.</p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-3 mb-md-0">
            <div
              className="card shadow rounded overflow-hidden"
              style={{ width: "100%", maxWidth: "320px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <p className="card-text fw-bold text-white">Masajes post operatorios para una recuperación óptima.</p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div
              className="card shadow rounded overflow-hidden"
              style={{ width: "100%", maxWidth: "320px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <p className="card-text fw-bold text-white">Limpiezas faciales que revitalizan tu piel.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 py-md-6"></div>
      </div>

      {/* Sección de bienvenida */}
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-6 p-3 p-md-6">
        <div style={{ width: "100%", maxWidth: "600px" }} className="mb-4 mb-lg-0 px-3">
          <h1 className="fw-bold">Bienvenidos a Saphira Luxury Spa</h1>
          <p className="fs-5 text-muted">
            En Saphira Luxury Spa, ofrecemos masajes corporales, masajes postoperatorios y limpiezas faciales, todo con
            un enfoque en el bienestar y la relajación de nuestros clientes.
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

        <div className="px-3">
          <img
            src={fotofalsa || "/placeholder.svg"}
            alt="Mujer en spa"
            style={{ height: "auto", width: "100%", maxWidth: "500px", objectFit: "cover", borderRadius: "25px" }}
            className="img-fluid"
          />
        </div>
      </div>

      <div className="py-4 py-md-6"></div>

      {/* Sección de servicio Spa */}
      <div className="p-3 p-md-5" style={{ backgroundColor: "#617DA1" }}>
        <div className="py-4 py-md-6"></div>
        <div className="text-center text-white">
          <h1 className="fw-bold">Servicios de Spa</h1>
          <div className="py-3 py-md-6"></div>
          <p className="lead mx-auto mt-3 px-3" style={{ maxWidth: "500px" }}>
            Ofrecemos masajes corporales, post operatorios y limpiezas faciales para tu bienestar.
          </p>
        </div>

        <div className="py-4 py-md-6"></div>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 px-3">
          <div className="d-flex justify-content-center mb-3 mb-md-0">
            <div
              className="card shadow rounded overflow-hidden"
              style={{ width: "100%", maxWidth: "450px", backgroundColor: "#ffff" }}
            >
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-text fw-bold text-black">Masajes Corporales</h6>
                <p>
                  Relájate con nuestros masajes corporales personalizados para aliviar tensiones y mejorar tu bienestar.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-3 mb-md-0">
            <div
              className="card shadow rounded overflow-hidden"
              style={{ width: "100%", maxWidth: "450px", backgroundColor: "#ffff" }}
            >
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-text fw-bold text-black">Masajes Postoperatorios</h6>
                <p>Ayudamos en tu recuperación con masajes postoperatorios diseñados para tu comodidad y sanación.</p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div
              className="card shadow rounded overflow-hidden"
              style={{ width: "100%", maxWidth: "450px", backgroundColor: "#ffff" }}
            >
              <img
                src={fotofalsa || "/placeholder.svg"}
                className="card-img-top"
                alt="spa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-text fw-bold text-black">Limpiezas Faciales</h6>
                <p>Revitaliza tu piel con nuestras limpiezas faciales que nutren y rejuvenecen tu rostro.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 py-md-6"></div>
      </div>

      {/* Sección de galería */}
      <div>
        <div className="py-4 py-md-6"></div>
        <div className="text-center">
          <h1 className="fw-bold">Galería</h1>
          <div className="py-2"></div>
          <p className="lead mx-auto mt-3 px-3" style={{ maxWidth: "500px" }}>
            Descubre nuestros servicios de masajes y limpiezas faciales.
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

      {/* Sección de testimonios */}
      <div style={{ backgroundColor: "#21272e" }} className="p-3 p-md-5">
        <div className="py-4 py-md-5"></div>
        <div
          className="d-flex justify-content-center flex-column align-items-center gap-2"
          style={{ color: "white", textAlign: "center" }}
        >
          <p>★★★★★</p>
          <p className="px-3" style={{ maxWidth: "350px" }}>
            Los masajes en Saphira Luxury Spa son excepcionales. Me ayudaron a relajarme y a recuperarme después de mi
            operación. ¡Altamente recomendados!
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
}

export default Inicio

