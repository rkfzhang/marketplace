import { useEffect } from 'react';
import L, { Control, Map as LeafletMap } from 'leaflet';
import { useMap } from 'react-leaflet';

export const Legend = () => {
  const map = useMap();

  useEffect(() => {
    // Create the control using the factory function and cast its type
    const legend = new Control({ position: 'bottomright' });

    legend.onAdd = function (_map: LeafletMap) {
      const div = L.DomUtil.create('div', 'info legend bg-white p-2 rounded shadow text-sm');
      div.innerHTML = `
        <div><strong>Price Legend</strong></div>
        <div><span style="background: green; display: inline-block; width: 12px; height: 12px; margin-right: 6px;"></span> Below Avg</div>
        <div><span style="background: gold; display: inline-block; width: 12px; height: 12px; margin-right: 6px;"></span> Around Avg</div>
        <div><span style="background: red; display: inline-block; width: 12px; height: 12px; margin-right: 6px;"></span> Above Avg</div>
      `;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};
