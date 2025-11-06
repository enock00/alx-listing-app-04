import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Beachfront"];

const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-2 border rounded-full text-sm bg-gray-100 hover:bg-blue-500 hover:text-white transition">
    {label}
  </button>
);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-80 flex flex-col justify-center items-center text-center text-white bg-cover bg-center rounded-2xl mb-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center mb-10">
        {filters.map((f, i) => (
          <Pill key={i} label={f} />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{property.name}</h3>
              <p className="text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-semibold text-blue-600">
                  ${property.price}
                </span>
                <span className="text-yellow-500">⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}