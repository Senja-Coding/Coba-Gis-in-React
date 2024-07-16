import React from "react";
import HospitalCard from "../components/HospitalCard";

const hospitals = [
  {
    name: "Rumah Sakit Umum Daerah dr. Abdoer Rahem",
    address: "Jl. PB. Sudirman No.7, Situbondo",
    image: "abdurahem.jpg",
    position: [-7.706854, 114.009038],
  },
  {
    name: "Rumah Sakit Mitra Sehat Situbondo",
    address: "Jl. Achmad Yani No.35, Situbondo",
    image: "mitrasehat.jpg",
    position: [-7.707786, 114.004417],
  },
  {
    name: "Rumah Sakit Elizabeth Situbondo",
    address: "Jl. Manggis No.34, Situbondo",
    image: "elizabet.jpg",
    position: [-7.706924, 114.00945],
  },
  {
    name: "Rumah Sakit Umum Daerah Asembagus",
    address: "Jl. Raya Asembagus No.65, Situbondo",
    image: "asembagus.jpg",
    position: [-7.778065, 114.245474],
  },
];

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Daftar Rumah Sakit</h2>
      <div className="flex flex-wrap justify-center">
        {hospitals.map((hospital, index) => (
          <HospitalCard
            key={index}
            name={hospital.name}
            address={hospital.address}
            image={hospital.image}
            position={hospital.position}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
