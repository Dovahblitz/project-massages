import React from "react"
import image1 from '../image/glass-home.jpg'
import image2 from '../image/candles-home.jpg'
import image3 from "../image/soap-home.jpg"
import image4 from '../image/candles2-home.jpg'
import image5 from '../image/oil-home.jpg'


const Home = (props)=>{
    return(
        <section className="home-text">
        <h2>Bienvenue sur LP massages !</h2>
        <div className="catalog">
        
            <p>Consultez nos différents <a href={"/product"}>massages</a> afin de trouver celui qui vous conviendra le mieux</p>
            <img className="img-right" src={image5} alt="image" />
        </div>
        <div className="account">
            <p>Vous pouvez <a href={"/register"}>créer un compte</a> afin de prendre rendez-vous en ligne et d'accéder à la liste de vos rendez-vous</p>
            <img className="img-left" src={image2} alt="image" />
        </div>
        <div className="connect">
            <p>Si vous avez déja un compte, <a href={"/login"}>connectez vous</a> pour réserver un massage ou voir vos prochains rendez-vous</p>
            <img className="img-right" src={image3} alt="image" />
        </div>
        <div className="contact">
            <p>N'hésitez pas à <a href={"/contact"}>nous contacter</a> via le formulaire si vous avez la moindre question sur les prestations</p>
            <img className="img-left" src={image4} alt="image"/>
        </div>
        </section>
    )
}

export default Home