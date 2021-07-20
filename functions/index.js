

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51J1XdTSDeAiXyTkgWpfIqWKDqz1JyibgpS9KEswETt3dNDy0ETlGcRlzqx9wBnoCTeLKvtf56cj17K3rkLKYvNYd004fkTwYYW"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM !! ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "INR",
  });
  //Ok -Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//firebase init >> to go cloud function
//npm i express
//npm i cors
//npm i stripe
//firebase emulators:start
//After taking the test of system
//'firebase deploy --only function' this is deploy the backend
//After firebase init
//For deployment of frontend run the 'firebase deploy --only hosting'
