import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {selectUser, connectUser} from '../slices/userSlice'
import {selectMassages, loadMassages} from '../slices/massagesSlice'
import {Navigate, useParams} from 'react-router-dom'
import {updateProfil, checkMyToken} from '../api/user'
import {displayMassages} from '../api/massages'

//HOC de controle des datas et de la securite 

const RequireDataAuth = (props)=>{

    const params = useParams()
    const user = useSelector(selectUser)
    const allMassages = useSelector(selectMassages)
    const dispatch = useDispatch()
    const Child = props.child

    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        //chargement des massages s'ils n'ont pas chargé dans redux
        if(allMassages.massages.length ===0){
            displayMassages()
            .then((res)=>{
                if(res.status === 200){
                    console.log(res)
                    dispatch(loadMassages(res.result))
                }
            })
            .catch(err=>console.log(err))
        }

        //si l'utilisateur n'est pas connecté
        if(user.isLogged === false){
            const token = window.localStorage.getItem('massages-token')
            if(token === null && props.auth){
                setRedirect(true)
            }else{
                checkMyToken()
                .then((response)=>{
                    if(response.status !==200){
                        if(props.auth === true){
                            setRedirect(true)
                        }
                    }else{
                        let user = response.user[0]
                        user.token = token
                        dispatch(connectUser(user))
                    }
                })
                .catch(err=>console.log(err))
            }
        }
    }, [props])

    if(redirect){
        return <Navigate to='/login'/>
    }
    return (<Child {...props} params={params}/>)
}

export default RequireDataAuth