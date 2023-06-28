import { useState } from "react";
import FormContact from "../components/form/FormContact";

function Contact() {

    const [mensajeExito, setMensajeExito] = useState('')

    const handleSubmit = (user) =>{
        setMensajeExito('Gracias '+ user.nombre +', te contactaremos cuanto antes vía mail')
    }

    return (
        <>
        <FormContact onSubmit={handleSubmit}/>
        <p>{mensajeExito}</p>
        </>
     );
}

export default Contact;