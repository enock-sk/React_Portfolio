import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('') // success | error | ''

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    emailjs
      .sendForm(
        'service_822xp02',
        'template_ccyxud9',
        form.current,
        '_rybnnDyI3izMWfqV'
      )
      .then(
        () => {
          setStatus('success')
          setLoading(false)
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
          setStatus('error')
          setLoading(false)
        }
      )
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
            <h5>+254724299505</h5>
            <a
              href="https://api.whatsapp.com/send?phone=254724299505"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>

          {/* STATUS MESSAGE */}
          {status === 'success' && (
            <p className="success-msg">Message sent successfully! WE WILL GET BACK YTO YOU SOON</p>
          )}
          {status === 'error' && (
            <p className="error-msg">Failed to send message. Try again later.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact