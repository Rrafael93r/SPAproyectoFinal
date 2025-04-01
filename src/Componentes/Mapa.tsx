
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Credenciales from "./Credenciales";
const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 10.389334, // Latitud de Springfield, MA (ejemplo)
    lng: -75.476140, // Longitud de Springfield, MA (ejemplo)
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey={Credenciales.mapsKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;