import React from "react";
import MapView from "./MapView";

function HospitalCard({ name, address, image, position }) {
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg m-4">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{address}</p>
      </div>
      <div className="h-48 w-full">
        <MapView position={position} name={name} />
      </div>
    </div>
  );
}

export default HospitalCard;
