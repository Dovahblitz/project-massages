import React ,{useState, useEffect} from 'react'
import {addoneAppointment} from '../api/booking'
import {Navigate} from 'react-router-dom'
import { checkMyToken, getOneUser } from '../api/user'
import {useDispatch, useSelector} from "react-redux"
import { selectUser } from '../slices/userSlice'





//page permettant à l'utilisateur de prendre un rdv

const Booking = (props)=>{
    const user = useSelector(selectUser)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [name, setName] = useState("")
    const [clientname, setClientname] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [user_id, setUser_id] = useState([])
    
    useEffect(() => {
        checkMyToken()
        
        .then((res) => {
            let rdv = res.user[0].id
            setUser_id(rdv)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    },[])
    
    

    const onSubmitForm =()=>{
        let datas ={
            date: date,
            time: time,
            name: name,
            clientname: clientname,
            user_id: user_id
        
        }
        
        
        
        
        
        



        addoneAppointment(datas)
        .then((res)=>{
            if(res.status === 200){
                setRedirect(true)
            }
        })
        .catch(err=>console.log(err))
    }

    if(redirect){
        return <Navigate to='/product'/>

    }
    return (
        <section>
            <h2>Prendre un rendez-vous</h2>
            <p>Choississez le soin ainsi que la date de la prestation</p>
            <form 
            className="booking-form"
            onSubmit={(e)=>{
                e.preventDefault()
                onSubmitForm()
            }} 
            >
            <input className="clientname" type="text"
            placeholder="Votre nom et prenom"
            onChange={(e)=>{
                setClientname(e.currentTarget.value)
            }}
            />
            <div className="booking-options">
            <select id="massage-name" value={name}
                onChange={(e)=> setName(e.target.value)}>
                <option value="californien">Californien</option>
                <option value="suedois">Suedois</option>
                <option value ="ChiNeiTsang">Le Chi Nei Tsang</option>
                <option value="MDCE">Drainant cellulaire énergétique</option>
                <option value="12">12 méridiens tendino musculaires</option>
                <option value="plantaire">Réfléxologie plantaire</option>
                <option value="agee">Pour personne âgée</option>

                
            </select>
            <input className="bookingdate" type="date" id="start" name="booking-date"
            min="2022-09-26"
            max="2022-12-31"
            onChange={(e)=>{
                setDate(e.currentTarget.value)
            }}
            />
            <input className="bookinghour" type="time" id="hour" name="booking-hour"
            min="09:00" max="17:00" 
            onChange={(e)=>{
                setTime(e.currentTarget.value)
            }}
            />
            </div>
            <input type="submit" name="Selectionner"/>
                

            


            

            </form>

            
        </section>
    )
}

export default Booking