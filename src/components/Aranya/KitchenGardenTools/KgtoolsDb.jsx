import trowel from "../../../assets/Gardentools/trowel.jpg";

const KitchenTools = () => {
  const categories = [
    { name: 'Basic Garden', bgColor: '#fff', items: [
      { name: 'Garden Trowel', price: '₹12.99', image: trowel, desc: 'Perfect for planting' },
      { name: 'Hand Cultivator', price: '₹15.99', image: trowel, desc: 'Loosen and remove weeds' },
      { name: 'Weeder Tool', price: '₹10.99', image: trowel, desc: 'Remove weeds easily' },
      { name: 'Garden Gloves', price: '₹8.99', image: trowel, desc: 'Protect your hands' },
    ]},
    { name: 'Watering Cans', bgColor: '#fff', items: [
      { name: 'Classic Metal Watering Can', price: '₹24.99', image: trowel, desc: 'Durable galvanized steel construction' },
      { name: 'Ergonomic Plastic Can', price: '₹19.99', image: trowel, desc: 'Lightweight design with comfortable grip' },
      { name: 'Decorative Copper Can', price: '₹39.99', image: trowel, desc: 'Beautiful copper finish doubles as decor' },
      { name: 'Decorative Copper Can', price: '₹39.99', image: trowel, desc: 'Beautiful copper finish doubles as decor' }
    ]},
    { name: 'Sprayers & Misters', bgColor: '#fff', items: [
      { name: 'Pressure Sprayer', price: '₹29.99', image: trowel, desc: 'High pressure for larger areas' },
      { name: 'Pressure Sprayer', price: '₹29.99', image: trowel, desc: 'High pressure for larger areas' },
      { name: 'Fine Mist Sprayer', price: '₹12.99', image: trowel, desc: 'Ultra fine mist for delicate plants' },
      { name: 'Backpack Sprayer', price: '₹49.99', image: trowel, desc: 'Professional grade for large gardens' },
    ]},
    { name: 'Cutting & Pruning Tools', bgColor: '#fff', items: [
      { name: 'Pruning Shears', price: '₹19.99', image: trowel, desc: 'Sharp, precise for healthy plant growth' },
      { name: 'Folding Pruning Saw', price: '₹28.99', image: trowel, desc: 'Compact saw for cutting thicker branches' },
      { name: 'Garden Scissors', price: '₹12.99', image: trowel, desc: 'Perfect for harvesting herbs and delicate pruning' },
      { name: 'Garden Scissors', price: '₹12.99', image: trowel, desc: 'Perfect for harvesting herbs and delicate pruning' },
    ]},
  ];

  return (
    <div className="container py-3 py-md-4 py-lg-5">
      <h2 className="text-center mb-3 mb-md-4 mb-lg-5" style={{ color: '#2c3e50' }}>Shop by Category</h2>
      <div className="row mb-3 mb-md-4 mb-lg-5 justify-content-center g-2 g-md-3 g-lg-4">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
          <i className="fas fa-tools mb-1 mb-md-2" style={{ fontSize: '1.25rem' }}></i>
          <p className="text-muted small">Basic Garden Tools</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
          <i className="fas fa-shower mb-1 mb-md-2" style={{ fontSize: '1.25rem' }}></i>
          <p className="text-muted small">Perfect Watering</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
          <i className="fas fa-spray-can mb-1 mb-md-2" style={{ fontSize: '1.25rem' }}></i>
          <p className="text-muted small">Misting & Spray Tools</p>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
          <i className="fas fa-cut mb-1 mb-md-2" style={{ fontSize: '1.25rem' }}></i>
          <p className="text-muted small">Cutting & Pruning Tools</p>
        </div>
      </div>
      {categories.map((category, index) => (
        <div key={index} className="mb-4 mb-md-5" style={{ backgroundColor: category.bgColor }}>
          <h3 className="p-2 p-md-3" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>{category.name}</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-4">
            {category.items.map((item, idx) => (
              <div key={idx} className="col">
                <div className="card h-100 border-0">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body p-2 p-md-3">
                    <h5 className="card-title" style={{ color: '#2c3e50', fontSize: '1.1rem' }}>{item.name}</h5>
                    <p className="card-text text-muted small">{item.desc}</p>
                    <p className="card-text"><strong style={{ color: '#28a745' }}>{item.price}</strong></p>
                    <a href="#" className="btn btn-success btn-sm w-100">Add to Cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KitchenTools;