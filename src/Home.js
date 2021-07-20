import React,{useState,useEffect} from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";


function Home() {
  const [{basket,user},dispatch]=useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        // .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
    else {
        setOrders([])
    }
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://img.freepik.com/free-vector/spot-light-background_1284-4685.jpg?size=626&ext=jpg"
          alt=""
        />
        {/* <>
        {!user}?  
        <h1 className="product__title">Recommendation</h1>
        <div className="home__row">
        {orders?.map((order) =>(
              <Recommend order={order}   />
          ))}
        </div>
        : 
        </> */}
        <h1 className="product__title">CAKE</h1>
        <div className="home__row">
          <br></br>
          <Product
            id="12321341"
            title="MERWANS CAKE 
            Purple Rain [1 Kg]
            "
            price={900.99}
            rating={5}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fvxtfet0pb2rxmqdodr6"
          />
          <Product
            id="12321342"
            title="Birthday Party Cake
            Bakery, Desserts, Fast Food"
            price={500.99}
            rating={5}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j6sfzolvyfjpndplxpl4"
          />
          <Product
            id="12321343"
            title="Cake Corner & Bakery
            Desserts, Bakery"
            price={495.99}
            rating={5}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v5teoo3e6szrg4qfewsq"
          />
          <Product
            id="12321344"
            title="MONGINIS
            Desserts, Bakery"
            price={200.99}
            rating={5}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fs5k6cq12pa0rnhaxvi3"
          />
          <Product
            id="12321345"
            title="Cake Corner
            Bakery, Desserts, Cafe, Combo, Indian"
            price={239.99}
            rating={4}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vofa1fb4y2dgvlao8cp3"
          />
        </div>
        <h1 className="product__title">Coffee</h1>
        <div className="home__row">
          <Product
            id="12321346"
            title="Filter Coffee Uniflask"
            price={109.99}
            rating={3}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/oigktlt4sk8vtabnsla5"
          />
          <Product
            id="12321347"
            title="Desi Filter Coffee"
            price={149.99}
            rating={5}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wpjdl9hrisi3rn3poojc"
          />
          <Product
            id="12321348"
            title="Hazelnut Cold Coffee (Frappe)"
            price={191.99}
            rating={3}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qq91tvfprntkejygwsjj"
          />
          <Product
            id="12321349"
            title="McCafe-Classic Coffee"
            price={199.99}
            rating={5}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/eusful1qjiy3zgsupvds"
          />
          <Product
            id="12321350"
            title="House Cold Coffee"
            price={250.99}
            rating={4}
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xnz7gudh8tomyp39kqgp"
          />
        </div>
        <h1 className="product__title">Pizza</h1>
        <div className="home__row">
          <Product
            id="12321351"
            title="Cheese Pizza"
            price={199.99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/chains/1/47211/37f6ce4eefbdfb4f5598ae262849b57a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          />
          <Product
            id="12321352"
            title="Paneer Pizza"
            price={499.99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/chains/1/47211/a12a66ea0cf850c8aecfe6255cc37a74.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          />
          <Product
            id="12321353"
            title="Coan Pizza"
            price={399.99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/chains/1/47211/68c10bfcc0ea3dd41d16761833d84cd6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          />
          <Product
            id="12321354"
            title="Chilii Pizza"
            price={299.99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/chains/1/47211/c2ce168c182acd647702193a23f40525.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          />
          <Product
            id="12321355"
            title="Chilii Paneer Pizza"
            price={499.99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/chains/1/47211/c2ce168c182acd647702193a23f40525.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          />
        </div>
        <h1 className="product__title">Non-veg</h1>
        <div className="home__row">
          <Product
            id="12321356"
            title="Boneless Butter Chicken"
            price={160.99}
            rating={5}
            image="https://b.zmtcdn.com/data/dish_photos/e12/680ffcf7f99d8810b1f473b619009e12.jpg?fit=around|130:130&crop=130:130;*,*"
          />
          <Product
            id="12321357"
            title="Chicken Kepsa"
            price={440.99}
            rating={5}
            image="https://b.zmtcdn.com/data/dish_photos/a82/3991ea893947c867d9d73a71953c4a82.jpg?fit=around|130:130&crop=130:130;*,*"
          />
          <Product
            id="12321358"
            title="Fried Chicken"
            price={499.99}
            rating={5}
            image="https://b.zmtcdn.com/data/dish_photos/ea7/687a6a53c28327a1d5070256d0333ea7.jpg?output-format=webp"
          />
          <Product
            id="12321359"
            title="Tandoori Chicken
            "
            price={299.99}
            rating={5}
            image="https://b.zmtcdn.com/data/dish_photos/f05/523a833eca1f9da4c05fef50c3e90f05.jpg?fit=around|130:130&crop=130:130;*,*"
          />
          <Product
            id="12321355"
            title="Chicken Handi"
            price={499.99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/8/42528/0531a13605b7152a2e9804daf63fa02d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
