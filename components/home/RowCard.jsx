import Link from 'next/link';

const RowCard = ({ cardDesign, cardData }) => {
  const imagePath = '/' + cardData.img; // example: 'img/painting/acrylic.jpg' becomes '/img/painting/acrylic.jpg'
  const linkHref = `/guides/${cardData.slug}`;

  if (cardDesign === "CD1") {
    return (
      <Link href={linkHref}>
        <div className="w-full max-w-xl rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer">
          <img
            className="w-full h-auto rounded-t-2xl object-cover group-hover:scale-105 transition-transform duration-300"
            src={imagePath}
            alt={cardData.title}
          />
          <div className="p-4">
            <h3 className="text-gray-900 text-xl font-semibold group-hover:text-red-600">
              {cardData.title}
            </h3>
          </div>
        </div>
      </Link>
    );
  }

  if (cardDesign === "CD2") {
    return (
      <Link href={linkHref}>
        <div className="w-full max-w-xl rounded-2xl overflow-hidden flex flex-col group cursor-pointer">
          <img
            className="w-full h-auto rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
            src={imagePath}
            alt={cardData.title}
          />
          <div className="py-4">
            <h3 className="text-gray-900 text-xl font-semibold group-hover:text-red-500 group-hover:underline">
              {cardData.title}
            </h3>
            <p className="text-gray-700">{cardData.description}</p>
          </div>
        </div>
      </Link>
    );
  }

  return <p className="text-xl text-red-600">No Card Design Found</p>;
};

export default RowCard;
