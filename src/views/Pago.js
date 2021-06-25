import React from 'react';
import ValidateLoginCheckout from "./../components/ValidateLoginCheckout";

function Pago() {

    return (
        <div className="fondopantalla p-4">
            <h2 className="check">Checkout</h2>
            <div className="checkout">
                <ValidateLoginCheckout />
            </div>
        </div>
    );
}

export default Pago;