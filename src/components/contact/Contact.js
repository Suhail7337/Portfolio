import {useRef} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zibvr6d', 'template_jitvroh', form.current, 'ihs1FGbAS11Ydt2u4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div className='contact'>
        <h1 className='contact-text'>Contact</h1>
        <article>
            <p>Get in touch or shoot me an email directly on<b>sunuvattoli@gmail.com</b></p>
        </article>
        <form ref={form} onSubmit={sendEmail}>
            <div className="contact-fields">
                <div className="contact-input">
                     <input type="text" 
                     name='user_name' 
                     placeholder='Name' id='name' /> 
                </div>
                <div className="contact-input">
                <input type="text" 
                name='user_email'  
                placeholder='Email' id='name' />
                </div>
                <div className="contact-msg">
                    <textarea name="message" id="message" 
                    placeholder='Message' ></textarea>
                </div>
            </div>
            <div className="contact-btn">
                <button type='submit' value="send" className='btn-msg'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact