import React, { useState } from 'react';
import "./Cart.css"

const CenteredCartSidebar = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      size: 'Large',
      price: 89.99,
      quantity: 1,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b3bd8b359e-f2e0e924f4da238e6070.png'
    },
    {
      id: 2,
      name: 'Snake Plant',
      size: 'Medium',
      price: 34.99,
      quantity: 2,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a9749355c5-8b44a0d366d332d493e6.png'
    }
  ]);

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== itemId));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 12.00;
  const tax = subtotal * 0.086;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Shopping Cart */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
              <div className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.size}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <button 
                          className="w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        >
                          <span className="text-sm">−</span>
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          className="w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        >
                          <span className="text-sm">+</span>
                        </button>
                      </div>
                      <span className="font-bold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-xl font-bold text-green-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CenteredCartSidebar;