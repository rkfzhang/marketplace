export interface Country {
  id: number;
  name: string;
  code: string;
}

export interface Amenities {
  id: number;
  name: string;
}

export interface FormData {
  state: string;
  city: string;
  country: string;
  amenities: number[];
}

import { useState, type ChangeEvent } from 'react';

export const SimulationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    state: '',
    city: '',
    country: '',
    amenities: [],
  });

  const countries: Country[] = [
    { id: 1, name: 'United States', code: 'USA' },
    { id: 2, name: 'United Kingdom', code: 'UK' },
    { id: 3, name: 'Canada', code: 'CAN' },
    { id: 4, name: 'Australia', code: 'AUS' },
    { id: 5, name: 'Germany', code: 'DEU' },
    { id: 6, name: 'France', code: 'FRA' },
    { id: 7, name: 'Japan', code: 'JPN' },
  ];


    const amenities: Amenities[] = [
    { id: 1, name: 'Gym' },
    { id: 2, name: 'Recital Room' },
    { id: 3, name: 'Lounge' },
    { id: 4, name: 'Guest Room' },
  ];



  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAmenitiesChange = (id: number): void => {
    setFormData(prevData => {
      const updatedAmenities = prevData.amenities.includes(id)
        ? prevData.amenities.filter(a => a !== id)
        : [...prevData.amenities, id];
      
      return {
        ...prevData,
        amenities: updatedAmenities
      };
    });
  };

  const getAmenitiesList = (): Amenities[] => {
    return amenities.filter(a => formData.amenities.includes(a.id))
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="space-y-4">
        {/* Country */}
         <div>
          <label 
            htmlFor="country" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            <option value="US">US</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        {/* state */}
        <div>
          <label 
            htmlFor="state" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State/Province
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* city */}
        <div>
          <label 
            htmlFor="city" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Countries List */}
        <div>
          <label 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amenities (Select multiple)
          </label>
          <div className="mt-2 max-h-48 overflow-y-auto border border-gray-300 rounded-md">
            {amenities.map((a) => (
              <div 
                key={a.id}
                className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAmenitiesChange(a.id)}
              >
                <input
                  type="checkbox"
                  checked={formData.amenities.includes(a.id)}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-3 block text-sm text-gray-700">
                  {a.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Result Display */}
        <p>Summary</p>
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <p>{formData.country}</p>
          <p>{formData.state}</p>
          <p>{formData.city}</p>
          <p className="text-gray-700">
            Selected Amenities: 
            <span className="ml-2">
              {formData.amenities.length > 0 
                ? getAmenitiesList().map(a => a.name).join(', ')
                : 'None'}
            </span>
          </p>
          <p>Estimated Rent Price: $X.XX/sqft</p>
        </div>
      </div>
    </div>
  );
};

