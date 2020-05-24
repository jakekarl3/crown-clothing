import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_8xYVtuhddlxTZZESQA7oFaiN';

  const onToekn = token => {
    console.log(token);
    alert('Payment Susccessful!');
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="CROWN CLOTHING LTD."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToekn}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;