import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('PLANT20');
  const [formData, setFormData] = useState({
    cardNumber: '1234 5678 9012 3456',
    expiryDate: '',
    cvv: '123',
    cardholderName: 'John Doe'
  });

  // UPI specific state
  const [upiData, setUpiData] = useState({
    upiId: '',
    selectedApp: ''
  });
  const [upiVerified, setUpiVerified] = useState(false);
  const [verifyingUPI, setVerifyingUPI] = useState(false);

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
    // Reset UPI verification when switching payment methods
    if (method !== 'google') {
      setUpiVerified(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpiInputChange = (e) => {
    setUpiData({
      ...upiData,
      [e.target.name]: e.target.value
    });
    // Reset verification status when UPI ID changes
    if (e.target.name === 'upiId') {
      setUpiVerified(false);
    }
  };

  const verifyUPI = async () => {
    if (!upiData.upiId.trim()) return;

    setVerifyingUPI(true);
    // Simulate UPI verification API call
    setTimeout(() => {
      setUpiVerified(true);
      setVerifyingUPI(false);
    }, 2000);
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      setAppliedCoupon(couponCode.trim());
      setCouponCode('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPayment === 'google' && !upiVerified) {
      alert('Please verify your UPI ID first');
      return;
    }
    alert('Order completed successfully!');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Cart</li>
              <li className="breadcrumb-item">Shipping</li>
              <li className="breadcrumb-item active" aria-current="page">Payment</li>
            </ol>
          </nav>

          <h2 className="checkout-title mb-4">Checkout</h2>
        </div>
      </div>

      <div className="row">
        {/* Payment Method Section */}
        <div className="col-lg-8">
          <div className="card payment-card">
            <div className="card-body">
              <h5 className="card-title mb-4">Payment Method</h5>

              {/* Credit/Debit Card */}
              <div className="payment-option mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="credit"
                    checked={selectedPayment === 'credit'}
                    onChange={() => handlePaymentChange('credit')}
                  />
                  <label className="form-check-label payment-label" htmlFor="credit">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-credit-card me-2"></i>
                      <span>Credit/Debit Card</span>
                      <div className="card-icons ms-auto">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%23005faa'/%3E%3Ctext x='16' y='14' text-anchor='middle' fill='white' font-size='8' font-weight='bold'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="me-1" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%23eb001b'/%3E%3Ccircle cx='12' cy='10' r='6' fill='%23eb001b'/%3E%3Ccircle cx='20' cy='10' r='6' fill='%23ff5f00'/%3E%3C/svg%3E" alt="Mastercard" className="me-1" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%23016fd0'/%3E%3Ctext x='16' y='14' text-anchor='middle' fill='white' font-size='6' font-weight='bold'%3EAMEX%3C/text%3E%3C/svg%3E" alt="American Express" />
                      </div>
                    </div>
                    <small className="text-muted d-block mt-1">Pay with Visa, Mastercard, American Express</small>
                  </label>
                </div>
              </div>


              {/* UPI Pay */}
              <div className="payment-option mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="google"
                    checked={selectedPayment === 'google'}
                    onChange={() => handlePaymentChange('google')}
                  />
                  <label className="form-check-label payment-label" htmlFor="google">
                    <div className="d-flex align-items-center">
                      <span className="me-2 badge bg-success">UPI</span>
                      <span>UPI</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="text-muted d-block mt-1">Pay with UPI</small>
                      <div className="card-icons ms-auto">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%235f259f'/%3E%3Ctext x='16' y='14' text-anchor='middle' font-family='Arial' font-size='11' fill='white'%3Eपे%3C/text%3E%3C/svg%3E"
                          alt="PhonePe" className="me-1" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%230084ff'/%3E%3Ctext x='16' y='14' text-anchor='middle' font-family='Arial' font-size='8' fill='white'%3EPaytm%3C/text%3E%3C/svg%3E"
                          alt="Paytm UPI" className="me-1" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='black'/%3E%3Ctext x='16' y='14' text-anchor='middle' font-family='Arial' font-size='8' fill='white' font-weight='bold'%3ECRED%3C/text%3E%3C/svg%3E"
                          alt="Cred UPI" className="me-1" />
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%234285F4'/%3E%3Ctext x='16' y='14' text-anchor='middle' font-family='Arial' font-size='8' fill='white' font-weight='bold'%3EGPay%3C/text%3E%3C/svg%3E"
                          alt="Google Pay" className="me-1" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* PayPal */}
              <div className="payment-option mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paypal"
                    checked={selectedPayment === 'paypal'}
                    onChange={() => handlePaymentChange('paypal')}
                  />
                  <label className="form-check-label payment-label" htmlFor="paypal">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-paypal me-2 text-primary"></i>
                      <span>PayPal</span>
                    </div>
                    <small className="text-muted d-block mt-1">Pay with your PayPal account</small>
                  </label>
                </div>
              </div>

              {/* Apple Pay */}
              <div className="payment-option mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="apple"
                    checked={selectedPayment === 'apple'}
                    onChange={() => handlePaymentChange('apple')}
                  />
                  <label className="form-check-label payment-label" htmlFor="apple">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-apple me-2"></i>
                      <span>Apple Pay</span>
                    </div>
                    <small className="text-muted d-block mt-1">Pay with Touch ID or Face ID</small>
                  </label>
                </div>
              </div>


              {/* Card Details Form - Only show when credit card is selected */}
              {selectedPayment === 'credit' && (
                <div className="card-details-form">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="cardNumber" className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardholderName"
                        name="cardholderName"
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Details Form - Only show when UPI is selected */}
              {selectedPayment === 'google' && (
                <div className="upi-details-form">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="upiId" className="form-label">UPI ID</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className={`form-control ${upiVerified ? 'is-valid' : ''}`}
                          id="upiId"
                          name="upiId"
                          value={upiData.upiId}
                          onChange={handleUpiInputChange}
                          placeholder="yourname@paytm / yourname@phonepe"
                        />
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={verifyUPI}
                          disabled={verifyingUPI || !upiData.upiId.trim() || upiVerified}
                        >
                          {verifyingUPI ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Verifying...
                            </>
                          ) : upiVerified ? (
                            <>
                              <i className="fas fa-check-circle me-1"></i>
                              Verified
                            </>
                          ) : (
                            'Verify'
                          )}
                        </button>
                      </div>
                      {upiVerified && (
                        <div className="mt-2">
                          <small className="text-success">
                            <i className="fas fa-check-circle me-1"></i>
                            UPI ID verified successfully
                          </small>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* UPI App Selection */}
                  <div className="mb-4">
                    <label className="form-label">Choose UPI App</label>
                    <div className="row g-2">
                      <div className="col-6 col-md-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="upiApp"
                          id="phonepe"
                          value="phonepe"
                          onChange={handleUpiInputChange}
                        />
                        <label className="btn btn-outline-secondary d-flex flex-column align-items-center p-3 w-100" htmlFor="phonepe">
                          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%235f259f'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='Arial' font-size='16' fill='white'%3Eपे%3C/text%3E%3C/svg%3E" alt="PhonePe" className="mb-2" />
                          <small>PhonePe</small>
                        </label>
                      </div>
                      <div className="col-6 col-md-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="upiApp"
                          id="paytm"
                          value="paytm"
                          onChange={handleUpiInputChange}
                        />
                        <label className="btn btn-outline-secondary d-flex flex-column align-items-center p-3 w-100" htmlFor="paytm">
                          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230084ff'/%3E%3Ctext x='16' y='20' text-anchor='middle' font-family='Arial' font-size='12' fill='white'%3EPaytm%3C/text%3E%3C/svg%3E" alt="Paytm" className="mb-2" />
                          <small>Paytm</small>
                        </label>
                      </div>
                      <div className="col-6 col-md-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="upiApp"
                          id="gpay"
                          value="gpay"
                          onChange={handleUpiInputChange}
                        />
                        <label className="btn btn-outline-secondary d-flex flex-column align-items-center p-3 w-100" htmlFor="gpay">
                          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%234285F4'/%3E%3Ctext x='16' y='20' text-anchor='middle' font-family='Arial' font-size='12' fill='white'%3EGPay%3C/text%3E%3C/svg%3E" alt="GPay" className="mb-2" />
                          <small>Google Pay</small>
                        </label>
                      </div>
                      <div className="col-6 col-md-3">
                        <input
                          type="radio"
                          className="btn-check"
                          name="upiApp"
                          id="cred"
                          value="cred"
                          onChange={handleUpiInputChange}
                        />
                        <label className="btn btn-outline-secondary d-flex flex-column align-items-center p-3 w-100" htmlFor="cred">
                          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='black'/%3E%3Ctext x='16' y='20' text-anchor='middle' font-family='Arial' font-size='12' fill='white'%3ECRED%3C/text%3E%3C/svg%3E" alt="CRED" className="mb-2" />
                          <small>CRED</small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Coupon Code Section */}
              <div className="coupon-section">
                <h6 className="mb-3">Coupon Code</h6>
                <div className="row">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <button
                      type="button"
                      className="btn btn-dark w-100"
                      onClick={applyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                </div>
                {appliedCoupon && (
                  <div className="mt-2">
                    <small className="text-success">
                      <i className="fas fa-check-circle me-1"></i>
                      Coupon "{appliedCoupon}" applied - 20% off
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="col-lg-4">
          <div className="card order-summary-card">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>

              {/* Order Items */}
              <div className="order-item d-flex mb-3">
                <div className="item-image me-3">
                  <div className="image-placeholder bg-light rounded"></div>
                </div>
                <div className="item-details flex-grow-1">
                  <h6 className="item-name mb-1">Monstera Deliciosa</h6>
                  <small className="text-muted">Qty: 1</small>
                </div>
                <div className="item-price">
                  <span className="fw-bold">$29.99</span>
                </div>
              </div>

              <div className="order-item d-flex mb-4">
                <div className="item-image me-3">
                  <div className="image-placeholder bg-light rounded"></div>
                </div>
                <div className="item-details flex-grow-1">
                  <h6 className="item-name mb-1">Ceramic Pot</h6>
                  <small className="text-muted">Qty: 1</small>
                </div>
                <div className="item-price">
                  <span className="fw-bold">$19.99</span>
                </div>
              </div>

              <hr />

              {/* Order Totals */}
              <div className="order-totals">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>$49.98</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Discount (PLANT20)</span>
                  <span>-$9.99</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Tax</span>
                  <span>$3.60</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4 fw-bold fs-5">
                  <span>Total</span>
                  <span>$49.58</span>
                </div>
              </div>

              {/* Complete Order Button */}
              <button
                type="button"
                className="btn btn-primary btn-lg w-100 complete-order-btn"
                onClick={handleSubmit}
              >
                Complete Order
              </button>

              {/* Security Icons */}
              <div className="security-info d-flex justify-content-center align-items-center mt-3">
                <i className="fas fa-shield-alt text-success me-2"></i>
                <small className="text-muted me-3">Secure</small>
                <i className="fas fa-lock text-primary me-2"></i>
                <small className="text-muted">Protected</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;