import React from 'react'
import {Link, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../slices/userSlice'



const Header =(props)=>{

    const user = useSelector(selectUser)
    

    return(
        <header className="header-nav">
        <nav>
        <div className="list1">
        <Link to="/">Accueil</Link>
        <Link to="/product">Les massages</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contact">Contact</Link>
        </div>
        
        
        {user.isLogged === false ?<div className="list2">
            <Link to="/register">S'enregistrer</Link>
            <Link to="/login">Se connecter</Link>
            <Link to="/basket">Mon panier</Link>
            </div> : <div className="list2">
                {user.infos.role === "admin" && <Link to='/admin'>Administration</Link>}
                <Link to ="/profile">Mon profil</Link>
                <Link to ="/logout">Se déconnecter</Link>
                <Link to ="/basket">Mes rendez-vous</Link>
                

        </div>}
        </nav>
        <section className="header-pict">
            <div className="background-opacity"></div>
            <h1>LP Massages</h1>

        </section>
        </header>
    )
}

export default Header