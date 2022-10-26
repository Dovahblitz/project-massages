import React, {useState, useEffect} from 'react'
import {loginUser} from '../../api/user'
import {Navigate} from 'react-router-dom'

const Login = (props)=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [redirect, setRedirect] = useState(false)

    const onSubmitForm = ()=>{
        let datas = {
            email: email,
            password: password
        }
        

        loginUser(datas)
        .then((res)=>{
            if(res.status === 200){
                
                window.localStorage.setItem('massages-token', res.token)
                setRedirect(true)
                
            }
        })
        .catch(err=>console.log(err))
    }
    
    if(redirect){
        return <Navigate to="/" />
    }
    return (
        <section>
            <h2>Se connecter</h2>
            <p>Connectez vous pour accéder à votre profil</p>
            <form
            className="b-form"
            onSubmit={(e)=>{
                e.preventDefault()
                onSubmitForm()
            }}
            >
              <input type="email"
              placeholder="Votre email"
              onChange={(e)=>{
                setEmail(e.currentTarget.value)
              }}  
              required
              />

              <input type="password"
              placeholder="Votre mot de passe"
              onChange={(e)=>{
                setPassword(e.currentTarget.value)
              }}
              required
              />

              <input type="submit" name="Enregistrer" />
              
            </form>
        </section>
    )
}

export default Login