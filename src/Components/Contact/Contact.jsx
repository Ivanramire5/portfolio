
import React from 'react'
import "./Contact.css"
const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <section id="contact" className='contactSection'>
      <div className='divContact'>
        <div className='infoContact'>
          <h2 className='contactH2'>DIRECCION</h2>
          <p className='pDireccion'>
            Los Ceibos 82 <br />
            Salta Capital
          </p>
          <h2 className='contactH2'>CORREO ELECTRONICO</h2>
          <p className='pDireccion'>
            ivanrdev5@gmail.com
          </p>
          <h2 className='contactH2'>NUMERO DE TELEFONO</h2>
          <p className='pDireccion'>
            3875702525
          </p>
        </div>
      </div>
      <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="netlifyContact">
          <h2 className="h2Contact">
            ¡Contrátame!
          </h2>
          <p className="netlifyParrafo">
            Datos a enviar
          </p>
          <div className="netlifyDiv">
            <label htmlFor="name" className="netlifyLabel">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="netlifyInput"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="divNetlify">
            <label htmlFor="email" className="netlifyCorreo">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="inputContactOne"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="netlifyDiv">
            <label
              htmlFor="message"
              className="labelMessage">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="netlifyTextarea"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="netlifyButton">
            Enviar
          </button>
      </form>
    </section>
  )
}

export default Contact