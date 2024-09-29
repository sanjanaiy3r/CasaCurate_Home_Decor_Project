// src/pages/Checkout.js
import React, { useEffect } from 'react';

function Checkout() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: 50000, // amount in paisa
      currency: 'INR',
      name: 'CasaCurate',
      description: 'Purchase from CasaCurate',
      handler: function(response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com'
      },
      theme: {
        color: '#003366'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout">
      <div className="container">
        <h2>Checkout</h2>
        <form className="checkout-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Address" required />
          <button type="button" onClick={handlePayment}>Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
