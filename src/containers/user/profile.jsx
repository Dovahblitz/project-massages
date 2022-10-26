//profil de l'utilisateur, contenant ses informations personnelles ainsi que la possibiltié de les modifier

import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {selectUser, connectUser} from "../../slices/userSlice"

import {updateProfil, checkMyToken} from '../../api/user'

const Profil = (props)=>{

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const [msg, setMsg] = useState(null)
    const [firstname, setfirstName] = useState(user.infos.firstname)
    const [lastname, setlastName]= useState(user.infos.lastname)
    const [address, setAddress]= useState(user.infos.address)
    const [email, setEmail] = useState(user.infos.email)
    const [zip, setZip] = useState(user.infos.zip)
    const [city, setCity] = useState(user.infos.city)
    const [phone, setPhone] = useState(user.infos.phone)

    const onSubmitForm = ()=>{
        let datas = {
            firstname: firstname,
            lastname: lastname,
            address: address,
            email: email,
            zip: zip,
            city: city,
            phone: phone
        }

        console.log(datas)

       updateProfil(datas, user.infos.id)
       .then((res)=>{
        console.log(res)
        if(res.status !== 200){
            setMsg("Erreur lors de la modification")
        }else{
            checkMyToken()
            .then((res)=>{
                if(res.status !== 200){
                setMsg("erreur lors de la modification")
            }else{
                const token = window.localStorage.getItem('massages-token')
                let user = res.user[0]
                user.token = token(connectUser(user))
            }
                
            })
            .catch(err=>console.log(err))
            setMsg('Profil modifié avec succès')
        }
       })
       .catch(err=>console.log(err))
    }

    return (
        <section>
            <h1>Mes informations personnelles</h1>
            
            {msg !== null && <p>{msg}</p>}
            <form
            className="b-form"
            onSubmit={(e)=>{
                e.preventDefault()
                onSubmitForm()
            }}
            >
            <input type="text" placeholder="Votre prénom"
            defaultValue={user.infos.firstname}
            onChange={(e)=>{
                setfirstName(e.currentTarget.value)
            }}
            />

            <input type="text" placeholder="Votre nom"
            defaultValue={user.infos.lastname}
            onChange={(e)=>{
                setlastName(e.currentTarget.value)
            }}
            />

            <input type="text" placeholder="Votre adresse"
            defaultValue={user.infos.address}
            onChange={(e)=>{
                setAddress(e.currentTarget.value)
            }}
            />

            <input type="email" placeholder="Votre adresse email"
            defaultValue={user.infos.email}
            onChange={(e)=>{
                setEmail(e.currentTarget.value)
            }}
            />

            <input type="text" placeholder="Votre code postal"
            defaultValue={user.infos.zip}
            onChange={(e)=>{
                setZip(e.currentTarget.value)
            }}
            />

            <input type="text" placeholder="Votre ville"
            defaultValue={user.infos.city}
            onChange={(e)=>{
                setCity(e.currentTarget.value)
            }}
            />

            <input type="text" placeholder="Votre numéro de téléphone"
            defaultValue={user.infos.phone}
            onChange={(e)=>{
                setPhone(e.currentTarget.value)
            }}
            />

            <input type="submit" name="Enregistrer"/>
            </form>
        
        </section>
    )

}

export default Profil