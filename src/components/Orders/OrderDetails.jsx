import React from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
  const orderData = {
    orderNumber: '#ORD-2025-001234',
    orderDate: 'January 15, 2025',
    status: 'Delivered',
    items: [
      {
        id: 1,
        name: 'Monstera Deliciosa',
        description: 'Large indoor plant with split leaves',
        quantity: 1,
        price: 45.00,
        category: 'Monstera Plant'
      },
      {
        id: 2,
        name: 'White Ceramic Planter',
        description: '12" diameter with drainage holes',
        quantity: 1,
        price: 28.00,
        category: 'Ceramic Pot'
      },
      {
        id: 3,
        name: 'Mini Succulent Collection',
        description: 'Set of 3 assorted succulents',
        quantity: 1,
        price: 22.00,
        category: 'Succulent Set'
      }
    ],
    subtotal: 95.00,
    shipping: 8.99,
    tax: 8.32,
    total: 112.31,
    shippingAddress: {
      name: 'John Smith',
      street: '123 Garden Street',
      apartment: 'Apartment 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    paymentMethod: {
      type: 'Visa',
      lastFour: '4242',
      chargedDate: 'Jan 15, 2025'
    },
    timeline: [
      {
        status: 'Order Confirmed',
        date: 'Jan 15, 2025 at 2:30 PM',
        completed: true
      },
      {
        status: 'Shipped',
        date: 'Jan 16, 2025 at 10:15 AM',
        completed: true
      },
      {
        status: 'Delivered',
        date: 'Jan 18, 2025 at 3:45 PM',
        completed: true
      }
    ]
  };

  return (
    <div className="container-fluid px-4 py-4 order-details-container">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none">Orders</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Order {orderData.orderNumber}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h1 className="h2 mb-2">Order Details</h1>
                  <div className="text-muted">
                    <span>Order {orderData.orderNumber}</span>
                    <span className="mx-2">•</span>
                    <span>Placed on {orderData.orderDate}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="status-indicator"></div>
                  <span className="fw-medium">{orderData.status}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Items Ordered */}
            <div className="col-12 col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h2 className="h5 mb-0">Items Ordered</h2>
                </div>
                <div className="card-body">
                  {orderData.items.map((item, index) => (
                    <div key={item.id} className={`d-flex align-items-start ${index !== orderData.items.length - 1 ? 'mb-4 pb-4 border-bottom' : ''}`}>
                      <div className="item-image me-3">
                        {item.category}
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="h6 mb-1">{item.name}</h3>
                        <p className="text-muted mb-2 small">{item.description}</p>
                        <p className="text-muted small mb-0">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-end">
                        <p className="fw-medium mb-0">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}

                  {/* Order Summary */}
                  <div className="mt-4 pt-4 border-top">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-6">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Subtotal</span>
                          <span>${orderData.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Shipping</span>
                          <span>${orderData.shipping.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <span className="text-muted">Tax</span>
                          <span>${orderData.tax.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between pt-3 border-top">
                          <span className="h5 mb-0">Total</span>
                          <span className="h5 mb-0">${orderData.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-lg-4">
              {/* Order Status */}
              <div className="card mb-4">
                <div className="card-header">
                  <h2 className="h5 mb-0">Order Status</h2>
                </div>
                <div className="card-body">
                  {orderData.timeline.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className={`timeline-icon ${item.completed ? 'completed' : ''}`}>
                        {item.completed && <i className="fas fa-check"></i>}
                      </div>
                      <div className="flex-grow-1">
                        <p className="fw-medium mb-1">{item.status}</p>
                        <p className="text-muted small mb-0">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="card mb-4">
                <div className="card-header">
                  <h2 className="h5 mb-0">Shipping Address</h2>
                </div>
                <div className="card-body">
                  <div className="small">
                    <p className="fw-medium mb-1">{orderData.shippingAddress.name}</p>
                    <p className="mb-1">{orderData.shippingAddress.street}</p>
                    <p className="mb-1">{orderData.shippingAddress.apartment}</p>
                    <p className="mb-1">
                      {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}
                    </p>
                    <p className="mb-0">{orderData.shippingAddress.country}</p>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="card mb-4">
                <div className="card-header">
                  <h2 className="h5 mb-0">Payment Method</h2>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="visa-logo me-3">
                      VISA
                    </div>
                    <div className="small">
                      <p className="fw-medium mb-1">
                        {orderData.paymentMethod.type} ending in {orderData.paymentMethod.lastFour}
                      </p>
                      <p className="text-muted mb-0">
                        Charged on {orderData.paymentMethod.chargedDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-3">
                <button className="btn btn-dark btn-lg">
                  <i className="fas fa-box me-2"></i>
                  Reorder Items
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="fas fa-download me-2"></i>
                  Download Invoice
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="fas fa-headphones me-2"></i>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;