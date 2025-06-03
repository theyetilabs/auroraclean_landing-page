import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import { useEffect } from "react";
import L from "leaflet";

interface IconDefault extends L.Icon.Default {
  _getIconUrl?: string;
}

// Fix for default marker icons
const icon = new Icon({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface Location {
  name: string;
  description: string;
  position: LatLngExpression;
}

const locations: Location[] = [
  {
    name: "Kathmandu Branch",
    description: "Sushi Bomber Kathmandu",
    position: [27.725744, 85.31843],
  },
  {
    name: "Pokhara Branch",
    description: "Sushi Bomber Pokhara",
    position: [28.211916, 83.9852243],
  },
  {
    name: "Chitwan Branch",
    description: "Sushi Bomber Chitwan",
    position: [27.693786222733728, 84.42268936477305],
  },
  {
    name: "Butwal Branch",
    description: "Customer Group",
    position: [27.7028385, 83.4654213],
  },
];

const center: LatLngExpression = [27.880166, 84.256358]; // Center point adjusted for all three locations

export default function Map() {
  useEffect(() => {
    // Fix for the marker icon in Next.js
    delete (L.Icon.Default.prototype as IconDefault)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "/marker-icon.png",
      iconRetinaUrl: "/marker-icon-2x.png",
      shadowUrl: "/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={7.5} // Adjusted zoom to show all locations comfortably
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl"
      style={{ background: "#1e1e3f" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={icon}>
          <Popup>
            <div className="text-base font-semibold">{location.name}</div>
            <div className="text-sm text-gray-600">{location.description}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
