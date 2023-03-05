import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import emailJs from "@emailjs/browser";
import "./index.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_3rx9oob",
        "template_6kz5mjm",
        refForm.current,
        "7pqH3OXHij16QyDGC"
      )
      .then(
        (success) => {
          console.log(success);
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error);
          alert("Failed to send message, please try again!");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              letterClass={letterClass}
              idx={10}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Alok Ranjan Joshi,
          <br></br>
          OUTR,
          <br />
          Ghatikia,
          <br />
          Bhubanwswar, Odisha, 751003
          <br />
          <span>alokranjanjoshi07567@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[20.27393, 85.77788]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[20.27393, 85.77788]}>
              <Popup>Alok lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
