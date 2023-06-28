import { useState } from "react";

const FormContact = (props) => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensajeError, setMensajeError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre.trim() === '') {
          setMensajeError('Debe ingresar un nombre')
        } else if (nombre.length <= 5) {
          setMensajeError('Debe ingresar un nombre mayor a 5 caracteres')
        } else {
          // eslint-disable-next-line react/prop-types
          props.onSubmit({nombre})
          setNombre('')
          setEmail('')
          setMensajeError('')
        }
      }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tu Nombre Completo" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <input type="email" placeholder="Tu Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <button type="submit">Contactar</button>
    </form>
    {mensajeError && <p>{mensajeError}</p>}
    </> );
}

export default FormContact;