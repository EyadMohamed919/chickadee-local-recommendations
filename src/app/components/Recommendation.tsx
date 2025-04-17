'use client';

import { useEffect, useState } from 'react';
import {calculateDistance} from "../functions/calculateDistance";

type Coordinates = {
  lat: number;
  lon: number;
};

type Place = {
  id: number;
  lat: number;
  lon: number;
  tags?: {
    name?: string;
    [key: string]: string | undefined;
  };
};



export const Recommendation = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [error, setError] = useState<string | null>(null);

  let isSearched = false;

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported.');
    }
  }, []);


  function search(filterType: string | "cafe"){
    if (!coords) return;
    console.log("Inside Search");
    isSearched = true;

    const query = `
      [out:json];
      node
        ["amenity"="${filterType}"]
        (around:2000,${coords.lat},${coords.lon});
      out;
    `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.elements || []);
      })
      .catch((fetchError) => {
        console.error('Failed to fetch places.', fetchError);
      });

      console.log(places.length);
      
  }
  places.sort()
  return (
    <div className="text-black mt-10">

      <button onClick={()=>search("restaurant")} className="bg-black pl-6 pr-6 pt-3 pb-3 mr-2 mt-10 text-white font-light rounded-full justify-center items-center transition-all duration-200 border-[1px] border-transparent
           hover:bg-white hover:text-black hover:border-black">Search Places</button>

      <h2 className="text-xl font-bold mb-2 mt-3">Nearby Restaurants</h2>

      {error && <p className="text-red-600">{error}</p>}
      {!coords && !error && <p>Getting your location...</p>}
      
      {coords && places.length === 0 && <p>Searching for places...</p>}

      {places.length > 0 && (
        <ul className="space-y-2">
          {places.map((place) => (
            <li key={place.id} className="border p-2 rounded">
              <strong>{place.tags?.name || 'Unnamed'}</strong>
              <br />
              Approximate Distance: {calculateDistance(coords!.lat, coords!.lon, place.lat, place.lon)}km
              <br />
              Lat: {place.lat}, Lon: {place.lon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
