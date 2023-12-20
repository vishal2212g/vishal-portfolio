import React, { useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false);
const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service', 'template_ew6331p ', form.current, '1S')

    emailjs.sendForm(process.env.EMAIL_URL)
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <div className="contact-from">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span> Contact me</span>

                    <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
                </div>
            </div>

            <div className="c-right">
        <form ref= {form} onSubmit= {sendEmail}>
            <input type='text' name='user_name' className='user' placeholder='Name'/>

            <input type='email' name='user_email' className='user' placeholder='Email'/>


            <textarea name='message' className='user' placeholder='Message'/>
    
            <input type='submit' value='Send' className='button'/>


<span>{done && "Thanks for contactin me"}</span>
            <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
        </form>
    </div>
        </div>
    
  
    )
}

export default Contact;