import React from 'react'
import './testimonials.css'
import AVTA1 from '../../assets/key_1.jpg'
import AVTA2 from '../../assets/p_2.jpg'
import AVTA3 from '../../assets/p_2.jpg'
import AVTA4 from '../../assets/p_3.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data=[
  {
    avatar: AVTA1,
    name: 'Ouma Mike',
    review: 'The technical proficiency of Kiplangat ensured that despite the high volume of data the app handles, it runs smoothly and efficiently, with minimal load times and an impeccable uptime record. His ongoing support and willingness to implement feedback have made them a valued partner in our continuous effort to improve user experience.',

  },
  {
    avatar: AVTA2,
    name: 'Julius Samuel',
    review: 'Enock brilliantly executed an intuitive and seamless app that greatly simplifies the process of finding and booking parking spaces. The user interface is clean and easy to navigate, which has significantly improved our customer satisfaction rates.',

  },
  {
    avatar: AVTA3,
    name: 'Ronald Kosgei',
    review: 'Developing a user-centric budgeting app with complex functionalities was no small feat, but Sang managed it with finesse. The app’s robust features help users manage their finances with ease, proving to be a critical tool for our financial planning services.',

  },
  {
    avatar: AVTA4,
    name: 'Adolf',
    review: 'For our pool master service, Enock created a visually stunning and informative website that not only highlights our services but also makes bookings a breeze for our users. The interactive features added to enhance user engagement have been a game changer.',

  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
  <div className="client__avatar">
    <img src={avatar}/>
  </div>
  <h5 className='client__name'>{name}</h5>
    <small className='client__review'>{review}</small>
</SwiperSlide>
            )
          },)
        }
      </Swiper>
    </section>
  )
}

export default Testimonials