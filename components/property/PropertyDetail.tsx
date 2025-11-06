interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    price: number;
    image: string;
    location: string;
    description: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-72 object-cover rounded-md"
      />

      <h1 className="text-3xl font-semibold mt-4">{property.title}</h1>
      <p className="text-gray-600 mt-2">{property.location}</p>
      <p className="text-blue-600 font-bold text-xl mt-3">
        KES {property.price}
      </p>

      <p className="mt-4 text-gray-700">{property.description}</p>
    </div>
  );
}
