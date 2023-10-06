import React from 'react'
import './Hero.css'
import Title from '../../common/heading/Heading'


const Hero = () => {
  return (
    <>
   <section className="hero">
    <div className="container">
        <div className="row">
            <Title subtitle='WELCOME TO ASHOVAN IT' title='EXPLORE YOUR CAREER HERE....'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, optio nostrum quidem consequatur minus veritatis praesentium inventore eaque amet doloribus voluptatibus quasi itaque, ipsa necessitatibus sit dignissimos beatae dolores neque!</p>
           <div className="button">
            <button className="primary-btn">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <button  >
                VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
            </button>
            </div> 
        </div>
    </div>
   </section>
   <div className='margin'></div>
    </>
  )
}

export default Hero