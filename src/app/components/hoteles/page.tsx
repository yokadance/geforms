// app/hoteles/page.jsx

import HotelCard from "@/app/components/HotelCards";

// Función para obtener los hoteles desde el archivo JSON
const fetchHotels = async () => {
  const res = await fetch('/data/hoteles.json');
  if (!res.ok) {
    throw new Error('Failed to fetch hotels data');
  }
  const hoteles = await res.json();
  return hoteles;
};

const Hoteles = async () => {
  const hoteles = await fetchHotels();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Hoteles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hoteles.map((hotel: { id: any; }) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hoteles;
