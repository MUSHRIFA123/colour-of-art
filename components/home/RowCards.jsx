import RowCard from './RowCard';

const RowCards = ({ title, description, cardDesign, cardsData, bg }) => {
  const bgClass = bg ? `${bg}` : '';

  return (
    <section className={`py-10 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-zinc-800">{title}</h2>
          {description && <p className="text-xl text-zinc-700">{description}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData?.map((cardData) => (
              <RowCard
                key={cardData.slug}
                cardDesign={cardDesign}
                cardData={cardData}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RowCards;
