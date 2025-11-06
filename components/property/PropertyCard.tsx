interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: number;
    image: string;
    location: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-md p-4 shadow-sm">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-500 font-bold">KES {property.price}</p>
    </div>
  );
}
