import React, { useState, useEffect } from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { geolocated } from "react-geolocated";

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [employee, setEmployee] = useState([]);

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState()

  const [deliverytime, setDeliveryTime] = useState()

  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();



  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

  useEffect(() => {
    db.collection("Deliveryboy").onSnapshot((snapshot) => {
      setEmployee(
        snapshot.docs.map((doc) => ({
          // id=doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY , h:mma")}</p>
      <p><strong>Delivery Boy:</strong>Saurabh</p>
      <p><strong>Latitude :</strong> {latitude}</p>
      <p><strong>Longitude :</strong> {longitude}</p>

      <p className="order__id">
        <small><strong>ID :</strong>{order.id}</small>
        <br></br>
        <strong>Email : {user?.email}</strong>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        // decimalScale={2}
        value={order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
