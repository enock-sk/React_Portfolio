import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'service_822xp02',        // replace with your service ID
        'template_ccyxud9',       // replace with your template ID
        form.current,
        '_rybnnDyI3izMWfqV'         // 🔥 replace this
      )
      .then(
        () => {
          alert('Thankyou! Message sent successfully! WE WILL GET BACK TO YOU SOON.')
          setLoading(false)
        },
        (error) => {
          alert('Failed to send message: ' + error.text)
          setLoading(false)
        }
      )

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          {/* EMAIL */}
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ekiplangat64@gmail.com</h5>
            <a href="mailto:ekiplangat64@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          {/* WHATSAPP */}
          <article className='contact__option'>
            <RiMessengerLine className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+254724860844</h5>
            <a
              href="https://api.whatsapp.com/send?phone=254724299505"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

        </div>

        {/* CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact