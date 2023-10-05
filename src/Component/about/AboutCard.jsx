import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../coursesData'
import './About.css'
import AWrapper from './AWrapper';

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container box">
          <div className="left row">
            <img src='./images/coursesdetails.jpeg' />
          </div>
          <div className="right row">
           <Title subtitle='learn anything' title='learn best from best institute' />
           <div className="items">{homeAbout.map((val)=>(
            <div className="item box">
              <div className="img">
                <img src={val.cover} />
              </div>
              <div className="text">
                <h2>{val.title}</h2>
                <h2>{val.desc}</h2>
              </div>
            </div>
           ))}

           </div>
          </div>
        </div> 
      </section>
      <AWrapper/>
    </>

  )
}

export default AboutCard