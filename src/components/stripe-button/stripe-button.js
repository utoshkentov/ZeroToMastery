import React from "react";
import StripeCheckout from "react-stripe-checkout";

import './stripe-button.scss';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DDpXRBY4ihU5Lh5iaga9FWzO00rcq3fX5k';


    return (
        <StripeCheckout
            label='Pay Now'
            name='Panda Shop Ltd.'
            billingAddress
            shippingAddress
            image='panda.svg'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;