import React from 'react';
import ValidateLoginCheckout from "./../components/ValidateLoginCheckout";

function Pago() {

    return (
        <div class="fondopantalla p-5">
            <h2 className="check">Checkout</h2>
            <div className="checkout">
                <ValidateLoginCheckout />
            </div>
        </div>
    );
}

export default Pago;