import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

export const ContactUs = ()=>{
    const form = useRef()

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'APjRSMNbDI92Duos9')
        .then((result)=>{
            console.log(result.text)
        }, (error)=>{
            console.log(error.text)
        });
        //clear le formulaire après envoi
        e.target.reset();
    };

    return (
        <section>
        <h3>Une question ? Ecrivez nous !</h3>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Votre nom et votre prénom</label>
            <input type="text" name="user_name" required />
            <label>Votre adresse email</label>
            <input type="email" name="user_email" required />
            <label>Votre message</label>
            <textarea name="message"  required />
            <input type="submit" value="Envoyer"/>
        </form>
        </section>
    )
}

export default ContactUs