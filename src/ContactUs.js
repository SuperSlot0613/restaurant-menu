import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";


function ContactUs() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleInfo = (e) => {
    e.preventDefault();

    db.collection("contact").doc(user?.uid).set({
      name: name,
      email: email,
      subject: subject,
      messsage: message,
    });
  };

  return (
    <div>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Us</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">get in touch</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos harum corporis fuga corrupti. Doloribus quis soluta
                nesciunt veritatis vitae nobis?
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Restaurant Menu</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">
                      Takhur Village, Kandivali East,Mumbai-400101
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">restaurant@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message Us</div>
              <form>
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit" onClick={handleInfo}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="teams" id="teams">
        <div className="max-width">
            <h2 className="title">Our Team</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                        <img src="saurabh.jpg" alt="" />
                        <div className="text">Saurabh</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="jayraj.jpeg" alt="" />
                        <div className="text">Jayraj</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="farhan.jpg" alt="" />
                        <div className="text">Farhan</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="hement.jpg" alt="" />
                        <div className="text">Krisha</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default ContactUs;
