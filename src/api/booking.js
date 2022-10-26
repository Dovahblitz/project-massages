import axios from 'axios'
import {config} from '../config'
const token = window.localStorage.getItem('massages-token')

export function displayBookings(){
    return axios.get(`${config.api_url}/api/v1/appointments/all`)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

//afficher les rdv d'un client en particulier 
export function takeoneAppointment(user_id){
 return axios.get(`${config.api_url}/api/v1/appointments/all/${user_id}`)
 .then((response)=>{
    return response.data
     })
 .catch((err)=>{
    return err
    })
 }

//ajouter un rdv 
export function addoneAppointment(datas){
 return axios.post(`${config.api_url}/api/v1/appointments/add`, datas, {headers: {'x-access-token':token}})
 .then((response)=>{
    return response.data
 })
 .catch((err)=>{
    return err
 })
}

//modifier un rdv 
export function editAppointment(datas,id){
    return axios.put(`${config.api_url}/api/v1/appointments/update${id}`, datas, {headers:{'x-access-token':token}})
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

//supprimer un rdv 
export function deleteAppointment(id){
    return axios.delete(`${config.api_url}/api/v1/appointments/delete${id}`,{headers:{'x-access-token':token}})
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}