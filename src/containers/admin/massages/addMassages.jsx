import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectUser} from '../../../slices/userSlice'
import {loadMassages} from '../../../slices/massagesSlice'
import {Navigate} from 'react-router-dom'

import {addOneMassage} from '../../../api/massages'

import {displayMassages} from '../../../api/massages'

import axios from 'axios'
import {config} from '../../../config'

const AddMassages = (props)=>{

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [price, setPrice] = useState("")
    const [selectedFile, setFile] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(null)

    //sauvegarder un massage
    const saveCompleteMassage = ()=>{
        if(selectedFile === null){
            let datas = {
                name: name,
                description: description,
                price: price,
                duration: duration
            }

            addOneMassage(datas)
            .then((res)=>{
                displayMassages()
                .then((response)=>{
                    dispatch(loadMassages(response.result))
                    setRedirect(true)
                })
                .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))
        }else{
            let formData = new FormData()
            formData.append('image, selectedFile')

            axios({
                method: "post",
                url: `${config.api_url}/api/v1/massages/pict`,
                data: formData,
                headers:{
                    "Content-type": 'multipart/form-data',
                    'x-access-token': user.infos.token
                }
            })
            .then((response)=>{
                if(response.data.status === 200){
                    let datas = {
                        name: name,
                        description: description,
                        price: price,
                        duration: duration,
                        photo: response.data.url
                    }
                    addOneMassage(datas)
                    .then((res)=>{
                        displayMassages()
                        .then((response)=>{
                            dispatch(loadMassages(response.result))
                            setRedirect(true)
                        })
                        .catch(err=>console.log(err))
                    })
                    .catch(err=>console.log(err))
                }
                })
                .catch(err=>console.log(err))
            }

        }
    

    const onSubmitForm = ()=>{
        if(name === "" || description === "" || price === "" || duration === ""){
            setError("Tous les champs ne sont pas encore remplis")
        }else if(isNaN(duration) || isNaN(price)){
            setError("Les champs prix et durée doivent être en chiffres")
        }else{
            saveCompleteMassage()
        }
    }

    if(redirect){
        return <Navigate to="/admin" />
    }
    return(
        <section>
            <h2>Ajouter un massage</h2>
            {error !== null && <p>{error}</p>}
            <form
            className="b-form"
            onSubmit={(e)=>{
                e.preventDefault()
                onSubmitForm()
            }}
            >
            <input
            type="file"
            onChange={(e)=>{
                setFile(e.currentTarget.files[0])
            }}
            />
            <textarea
            name="description"
            onChange={(e)=>{
                setDescription(e.currentTarget.value)
            }}
            >

            </textarea>

            <input
            type="text"
            placeholder="Durée du massage"
            onChange={(e)=>{
                setDuration(e.currentTarget.value)
            }}
            />
            <input
            type="text"
            placeholder="Prix"
            onChange={(e)=>{
                setPrice(e.currentTarget.value)
            }}
            />
            <button>Enregistrer</button>
            </form>
        </section>
    )
}

export default AddMassages