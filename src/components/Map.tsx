import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

// Sydney metropolitan area rough polygon coordinates
const sydneyMetroCoords: LatLngTuple[] = [
  [-33.4, 150.8], // Northwest
  [-33.4, 151.3], // Northeast
  [-34.1, 151.3], // Southeast
  [-34.1, 150.8], // Southwest
  [-33.4, 150.8], // Close the polygon
];

const Map = () => {
  return (
    <MapContainer
      center={[-33.8688, 151.2093] as LatLngTuple}
      zoom={9}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon
        positions={sydneyMetroCoords}
        pathOptions={{
          fillColor: "#00378b",
          fillOpacity: 0.3,
          weight: 2,
          opacity: 1,
          color: "#00378b",
        }}
      />
    </MapContainer>
  );
};

export default Map;
