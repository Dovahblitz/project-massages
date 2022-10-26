import React, {useState, useEffect} from 'react'
import {addOneUser} from "../../api/user"
import {Navigate} from 'react-router-dom'

//page permettant à l'utilisateur de créer son compte

const Register = (props)=>{

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [redirect, setRedirect] = useState(false)

    const onSubmitForm = ()=>{
        let datas = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            address: address,
            zip: zip,
            city: city,
            phone: phone
        }
        

        addOneUser(datas)
        .then((res)=>{
            if(res.status === 200){
            setRedirect(true)
            }
        })
        .catch(err=>console.log(err))
        
        
    }

    if(redirect){
        return <Navigate to="/login"/>
    }

    return (

    <section>
        
        <h2>S'enregistrer</h2>
        <p>Créez votre compte pour pouvoir prendre un rendez vous et retrouver facilement vos anciennes prestations</p>
        <form
        className="b-form"
        onSubmit={(e)=>{
            e.preventDefault()
            onSubmitForm()
        }}
        >
            <input type="text"
            placeholder="Votre prénom"
            onChange={(e)=>{
                setFirstName(e.currentTarget.value)
            }}
            required
            />

            <input type="text"
            placeholder="Votre nom"
            onChange={(e)=>{
                setLastName(e.currentTarget.value)
            }}
            required
            />

            <input type="email"
            placeholder="Votre email"
            onChange={(e)=>{
                setEmail(e.currentTarget.value)
            }}
            />

            <input type="password"
            placeholder="Votre mot de passe"
            onChange={(e)=>{
                setPassword(e.currentTarget.value)
            }}
            required
            />

            <input type="text"
            placeholder="Votre adresse"
            onChange={(e)=>{
                setAddress(e.currentTarget.value)
            }}
            required
            />

            <input type="text"
            placeholder="Votre code postal"
            onChange={(e)=>{
                setZip(e.currentTarget.value)
            }}
            required
            />

            <input type="text"
            placeholder="Votre ville"
            onChange={(e)=>{
                setCity(e.currentTarget.value)
            }}
            required
            />

            <input type="text"
            placeholder="Votre numéro de téléphone"
            onChange={(e)=>{
                setPhone(e.currentTarget.value)
            }}
            required
            />

            <input type="submit" name="Enregistrer" />
        </form>
    </section>
    )
}

export default Register