import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
// import { SportsBasketball } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import {useHistory} from 'react-router-dom'

function Subtotal() {

  const history=useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              Your order qualifies for FREE Delivery! Select this option at
              checkout.
              <br></br>
              <input type="checkbox" />
              This is a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button className="proceedbutton" onClick={e=>history.push('/payment')}>Procced To checkOut</button>
    </div>
  );
}

export default Subtotal;
