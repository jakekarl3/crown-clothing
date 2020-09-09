import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_8xYVtuhddlxTZZESQA7oFaiN';

  const onToekn = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you ues the provided credit card.'
      );
    });
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