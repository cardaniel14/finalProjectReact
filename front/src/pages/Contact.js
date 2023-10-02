import React from "react";

export default function Contact(props) {
  return (
    <main className="holder contacto">
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

            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
    </main>
  );
}
