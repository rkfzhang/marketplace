import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Legend } from './legend';

type UnitMark = {
  id: number;
  lat: number;
  lng: number;
  price: number;
};

type HousingMapProps = {
  units: UnitMark[];
}


export const HousingMap = ({units}: HousingMapProps) => {
  const getMapCenter = (): [number, number] => {
    const latAvg = units.reduce((sum, h) => sum + h.lat, 0) / units.length;
    const lngAvg = units.reduce((sum, h) => sum + h.lng, 0) / units.length;
    return [latAvg, lngAvg];
  };

  const averagePrice = units.reduce((sum, h) => sum + h.price, 0) / units.length;

  const getColor = (price: number) => {
    const ratio = price / averagePrice;
    if (ratio > 1.2) return 'red';
    if (ratio < 0.8) return 'green';
    return 'gold';
  };

  const createIcon = (color: string) =>
    new L.DivIcon({
      className: '',
      html: `<div style="width:24px;height:24px;border-radius:50%;background:${color};border:2px solid white;"></div>`,
    });

  return (
    <MapContainer center={getMapCenter()} zoom={15} className="w-full h-screen">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {units.map(u => (
        <Marker
          key={u.id}
          position={[u.lat, u.lng]}
          icon={createIcon(getColor(u.price))}
        >
          <Popup>
            <div>
              <strong>Price:</strong> ${u.price.toLocaleString()}
            </div>
          </Popup>
        </Marker>
      ))}
      <Legend />
    </MapContainer>
  );
};
