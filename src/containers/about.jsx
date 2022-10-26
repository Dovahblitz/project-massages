import React from 'react'
import image from '../image/candle-pic.jpg'

const About = (props)=>{

    return (
        <section className="about">
            <p id='about-section'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam, doloribus nisi, commodi impedit nihil veniam optio consequatur, sed iure harum enim. Veniam atque minus voluptas maiores dolores dignissimos maxime.</p>
            <img className="candlepic" src={image} alt="image"/>
        </section>
    )
}

export default About