import React, { useState } from 'react';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [isLoading, setIsLoading] = useState(false);
  
  // Order details
  const orderTotal = 2999;
  const customerDetails = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    address: '123 Green Street, Plant City'
  };

  // Load Razorpay script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle Online Payment (Razorpay)
  const handleOnlinePayment = async () => {
    setIsLoading(true);
    
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load. Please check your connection.');
      setIsLoading(false);
      return;
    }

    const options = {
      key: 'rzp_test_9WyJHdXXXXXXXX', // Replace with your Razorpay key
      amount: orderTotal * 100, // Amount in paise
      currency: 'INR',
      name: 'Your Store Name',
      description: 'Order Payment',
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        setIsLoading(false);
        // Handle success - redirect or update UI
      },
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      theme: {
        color: '#3B82F6',
      },
      modal: {
        ondismiss: function() {
          setIsLoading(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Handle Cash on Delivery
  const handleCOD = () => {
    alert('Order placed successfully! You will pay on delivery.');
    // Handle COD order placement
  };

  const handleSubmit = () => {
    if (selectedPayment === 'online') {
      handleOnlinePayment();
    } else {
      handleCOD();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Checkout</h2>
      
      {/* Order Summary */}
      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '30px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Order Total: ₹{orderTotal.toLocaleString()}</h3>
        <p style={{ margin: '5px 0', color: '#666' }}>Name: {customerDetails.name}</p>
        <p style={{ margin: '5px 0', color: '#666' }}>Email: {customerDetails.email}</p>
        <p style={{ margin: '5px 0', color: '#666' }}>Phone: {customerDetails.phone}</p>
        <p style={{ margin: '5px 0', color: '#666' }}>Address: {customerDetails.address}</p>
      </div>

      {/* Payment Methods */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>Select Payment Method</h3>
        
        {/* Cash on Delivery */}
        <div 
          style={{ 
            border: selectedPayment === 'cod' ? '2px solid #3B82F6' : '1px solid #ddd',
            borderRadius: '8px', 
            padding: '15px', 
            marginBottom: '15px', 
            cursor: 'pointer',
            backgroundColor: selectedPayment === 'cod' ? '#f0f8ff' : 'white'
          }}
          onClick={() => setSelectedPayment('cod')}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={selectedPayment === 'cod'}
              onChange={() => setSelectedPayment('cod')}
              style={{ marginRight: '10px' }}
            />
            <div>
              <strong>Cash on Delivery</strong>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                Pay when your order is delivered
              </p>
            </div>
          </div>
        </div>

        {/* Online Payment */}
        <div 
          style={{ 
            border: selectedPayment === 'online' ? '2px solid #3B82F6' : '1px solid #ddd',
            borderRadius: '8px', 
            padding: '15px', 
            cursor: 'pointer',
            backgroundColor: selectedPayment === 'online' ? '#f0f8ff' : 'white'
          }}
          onClick={() => setSelectedPayment('online')}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="payment"
              value="online"
              checked={selectedPayment === 'online'}
              onChange={() => setSelectedPayment('online')}
              style={{ marginRight: '10px' }}
            />
            <div>
              <strong>Online Payment</strong>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                Pay using Cards, UPI, Net Banking, Wallets
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: isLoading ? '#ccc' : '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => {
          if (!isLoading) e.target.style.backgroundColor = '#2563EB';
        }}
        onMouseOut={(e) => {
          if (!isLoading) e.target.style.backgroundColor = '#3B82F6';
        }}
      >
        {isLoading ? 'Processing...' : 
         selectedPayment === 'cod' ? 'Place Order (COD)' : 'Pay Now'}
      </button>

      {/* Security Note */}
      {selectedPayment === 'online' && (
        <p style={{ 
          textAlign: 'center', 
          marginTop: '15px', 
          fontSize: '12px', 
          color: '#666' 
        }}>
          🔒 Secured by Razorpay
        </p>
      )}
    </div>
  );
};

export default CheckoutPage;