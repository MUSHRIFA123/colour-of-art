// components/PaintingGrid.jsx
export default function PaintingGrid({ paintings }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {paintings.map((painting, idx) => (
        <a
          key={idx}
          href={painting.link}
          className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
        >
          <div className="h-60 overflow-hidden">
            <img
              src={painting.image}
              alt={painting.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#4b2e2e] group-hover:text-[#a0522d] transition">
              {painting.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}
