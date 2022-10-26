import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { checkMyToken, getOneUser } from '../api/user'
import axios from 'axios'
import { selectUser } from '../slices/userSlice'
import Moment from 'moment'

const Basket = (req)=>{

    const user = useSelector(selectUser)
    const [user_id, setUser_id] = useState([])
    const [userbooking, setUserbooking] = useState([])
    console.log('userid', user_id)
    
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
    

    useEffect(()=>{
        fetchBooking()
    },[])
    

    const fetchBooking = ()=>{
        axios
        .get('https://massages-pieniazek.herokuapp.com/api/v1/appointments/all/' + user_id )
        .then((res)=>{
            setUserbooking(res.data.booking)
            console.log('res', res.data.booking)
            
            
            
         
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    return (
        <section>
            <h2>Vos rendez-vous</h2>
            
           
            
            
        </section>
        
    )
}

export default Basket