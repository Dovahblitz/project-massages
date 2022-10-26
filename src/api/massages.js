import axios from 'axios'
import {config} from '../config'
const token = window.localStorage.getItem('massages-token')

export function displayMassages(){
    return axios.get(`${config.api_url}/api/v1/massages/all`)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

export function takeOneMassage(id){
    return axios.get(`${config.api_url}/api/v1/massages/one/${id}`)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

export function addOneMassage(datas){
    return axios.post(`${config.api_url}/api/v1/massages/save`, datas, {headers: {'x-access-token':token}})
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

export function deleteOneMassage(id){
    return axios.delete(`${config.api_url}/api/v1/massages/delete${id}`, {headers: {'x-access-token': token}})
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

export function updateOneMassage(datas, id){
    return axios.put(`${config.api_url}/api/v1/massages/update${id}`, datas, {headers: {'x-access-token':token}})
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}