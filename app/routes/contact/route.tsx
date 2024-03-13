import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

/// STYLES
import type { LinksFunction } from "@remix-run/node";
import stylesContactURL from "~/styles/contact.css"
import githubIcon from '~/styles/images/github.svg'
import linkdinIcon from '~/styles/images/linkedin.svg'


export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesContactURL,
    }
  ];
};
///

export default function Contact() {

    const formRef = useRef<HTMLFormElement>(null);
    const [emailSent, setEmailSent] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (formRef.current == null) return;
        emailjs.sendForm('default_service', 'template_hxdq2ci', formRef.current, 'IoQTzWUBtnc8kyt86')
          .then((result) => {
              console.log(result.text);
              setEmailSent(true);
          }, (error) => {
              console.log(error.text);
          });
    };

    const handleClick = () => {
        setEmailSent(false);
    }

    return(
        <div className = 'container-col contact'>
            <div className = 'section'>
               <h1 className = 'title'>Get in touch!</h1> 
            </div>
            <div className = 'contact__links'>
                <h2 className = 'title'>Links</h2>
                <ul className = 'contact__links__list-wrap'>
                    <li>
                        <a
                            href="https://github.com"
                            target='_blank'
                            rel="noopener"
                            aria-label='Github'
                        >
                            <img src = {githubIcon} alt = '' />
                        </a>
                    </li>
                    <li>
                        <a
                            href = 'https://www.linkedin.com/in/thomas-n-23bb961a0/' 
                            target = '_blank'
                            rel = 'noopener'
                            aria-label = 'LinkdIn'
                        >
                            <img src = {linkdinIcon} alt = ''/>
                        </a>
                    </li>
                </ul>
            </div>
            {
              !emailSent && 
              <div className = 'section forms-container'>
                <div className = 'contact__text'>
                    <p>Send me an email with the contact form below and start a conversation.</p>
                </div>
                <form className = 'container-col contact__form' ref = { formRef } onSubmit = { sendEmail }>
                    <label className = 'contact__form__label' htmlFor = 'user_name'>Your name</label>
                    <input className = 'contact__form__input' type = "text" id = 'user_name' name = "user_name" />

                    <label className = 'contact__form__label' htmlFor = 'user_email'>Your email</label>
                    <input className = 'contact__form__input' type = "email" id = 'user_email' name = "user_email" />                    

                    <label className = 'contact__form__label' htmlFor  = 'message'>Message</label>
                    <textarea className = 'contact__form__message' id = 'message' name = "message" />    
                    <button className = 'contact__form__button' type = 'submit'>Send</button>
                </form>               
              </div>
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
        </div>
    );
}