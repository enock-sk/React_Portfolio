import React from 'react'
import './services.css'
import { IoCheckmark } from "react-icons/io5";
const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
            <IoCheckmark className='service__list-icon' />
            <p>I design user interfaces that are visually appealing, intuitive, and easy to use. I design user experiences that are engaging, interactive, and memorable. I use techniques like gamification, micro-interactions, and animations to create experiences that users will love.</p>
          </li>
          {/* <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li> */}
          </ul>
        </article>
        {/* ===end of ui ux== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <IoCheckmark className='service__list-icon' />
            <p>I create custom websites that are tailored to the unique needs of each client. I use a range of technologies and platforms to build responsive, user-friendly websites that are optimized for search engines and deliver a great user experience.</p>
          </li>
          {/* <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>I create custom websites that are tailored to the unique needs of each client. I use a range of technologies and platforms to build responsive, user-friendly websites that are optimized for search engines and deliver a great user experience</p>
          </li> */}
          {/* <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li> */}
          </ul>
        </article>
        {/* end of web */}
        <article className="service">
          <div className="service__head">
          <h3>Android Development</h3>
          </div>
          <ul className='service__list'>
            <li>
            <IoCheckmark className='service__list-icon' />
            <p>I create custom Android apps that are tailored to the unique needs of each client. I use JAVA, Kotlin, Dart, and C language and platforms to build user-friendly, responsive apps that deliver a great user experience. I optimize apps for speed, performance, and user engagement.</p>
          </li>
          {/* <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li>
          <li>
            <IoCheckmark className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi saepe fugit doloribus, maiores porro suscipit laborum, dignissimos omnis placeat consequatur. Ad in ea, ab perspiciatis inventore molestias eos magni?</p>
          </li> */}
          </ul>
        </article>
        {/* end of android */}
      </div>
    </section>
  )
}

export default Services