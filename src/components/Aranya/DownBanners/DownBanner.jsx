import './DownBanner.css';

const DownBanner = () => {
  const items = [
    'Indoor Plants', 'Outdoor Plants', 'Gifted Plants',
    'Flower Plants', 'Decoration Plants', 'PlantCare',
  ];

  const renderItems = () =>
    items.map((item, idx) => <span key={idx}>| <span></span> {item} </span>);

  return (
    <div className="down-banner">
      <div className="marquee-track">
        <div className="marquee-content">{renderItems()}</div>
        <div className="marquee-content">{renderItems()}</div>
        <div className="marquee-content">{renderItems()}</div>
      </div>
    </div>
  );
};

export default DownBanner;
