import { HousingMap } from "../components/housingMap"

export const MapPage = () => {

  const units = [
    { id: 1, lat: 49.1752, lng: -123.1350, price: 3000 },
    { id: 2, lat: 49.1738, lng: -123.1365, price: 4500 },
    { id: 3, lat: 49.1749, lng: -123.1378, price: 2000 },
  ];
  
  return (
    <div className="map-page-wrapper">
      <HousingMap units={units}/>
    </div>
  )
}