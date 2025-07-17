import Image from "next/image";
const featuredStores = [
  {
    name: "KCC Modern Living",
    location: "Berkeley",
    description: "Contemporary furniture with a focus on sustainable materials",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    name: "Coastal Living Design",
    location: "Santa Monica",
    description: "Beach-inspired furniture and coastal decor",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    name: "Rustic Elegance",
    location: "Napa Valley",
    description: "Wine country inspired furniture and decor",
    image: "https://picsum.photos/400/300?random=3",
  },
];

export default function FeaturedStoreCards() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredStores.map((store, index) => (
          <div key={index} className="group">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src={store.image} alt={store.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-600 transition-colors">{store.name}</h3>
            <p className="text-gray-600 mb-2">{store.location}</p>
            <p className="text-gray-600">{store.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}