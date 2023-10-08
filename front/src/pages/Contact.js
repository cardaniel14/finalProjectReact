import React from "react";
import "../../src/styles/components/pages/Contact.css";

export default function Contact(props) {
  return (
    <main className="contacto">
      <div>
        <h2>Contacto rapido</h2>
        <form
          action="mailto:carlosderazo.07@gmail.com"
          method="post"
          enctype="text/plain"
          className="formulario"
        >
          <p>
            <label htmlFor="name">Nombre</label>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name Here"
            />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail Here"
            />
          </p>
          <p>
            <label htmlFor="message">Mensaje</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message Here"
            ></textarea>
            <br />
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
    </main>
  );
}
