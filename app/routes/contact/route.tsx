import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import type { LinksFunction } from "@remix-run/node";
import stylesContactURL from "~/styles/contact.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesContactURL,
    }
  ];
};

export default function Contact() {

    const formRef = useRef<HTMLFormElement>(null);
    const [emailSent, setEmailSent] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsSelected(true);
        if (formRef.current == null) return;
        emailjs.sendForm('default_service', 'template_hxdq2ci', formRef.current, 'IoQTzWUBtnc8kyt86')
          .then((result) => {
                console.log(result.text);
                setIsSelected(false);
                setEmailSent(true);
          }, (error) => {
                setIsSelected(false);
                console.log(error.text);
          });
    };

    const handleClick = () => {
        setEmailSent(false);
    }

    return(
        <div className = 'container-col contact'>
            <div className = 'section contact__text'>
               <h1>Get in touch!</h1> 
                {
                !emailSent && 
                <p>Send me an email with the contact form below and start a conversation.</p>
                }
            </div>
            {
              !emailSent && 
              <>                
              <div className = { isSelected ? 'selected section forms-container' : 'section forms-container' }>
                    <form className = 'container-col contact__form' ref = { formRef } onSubmit = { sendEmail }>
                        <label className = 'contact__form__label' htmlFor = 'user_name'>Your name</label>
                        <input className = 'contact__form__input' type = "text" id = 'user_name' name = "user_name" />

                        <label className = 'contact__form__label' htmlFor = 'user_email'>Your email</label>
                        <input className = 'contact__form__input' type = "email" id = 'user_email' name = "user_email" />                    

                        <label className = 'contact__form__label' htmlFor  = 'message'>Message</label>
                        <textarea className = 'contact__form__message' id = 'message' name = "message" />    
                        <button className = { isSelected ? 'contact__form__button disabled' : 'contact__form__button' } type = 'submit' disabled = { isSelected }>Send</button>
                    </form>          
                </div>
                <div className = 'tile__loader'>
                    <span className ={ isSelected ? 'loader': 'hidden' }></span> 
                </div>  
              </>
            }
            {
               emailSent &&  
               <div className = 'container-col contact__confirm section'>
                <p className = 'contact__confirm__sent'>Email sent</p>
                <p className = 'contact__confirm__text'>Thanks for getting in touch!</p>
                <p className = 'contact__confirm__text'> I will respond to your message ASAP</p>
                <button className = 'contact__form__button' onClick = { handleClick }>New Email</button>
               </div>
            } 
            <div className = 'contact__links section'>
                <h2 className = 'title'>Links</h2>
                <ul className = 'contact__links__list-wrap'>
                    <li>
                        <a
                            href="https://github.com"
                            target='_blank'
                            rel="noopener"
                            aria-label='Github'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href = 'https://www.linkedin.com/in/thomas-n-23bb961a0/' 
                            target = '_blank'
                            rel = 'noopener'
                            aria-label = 'LinkdIn'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}