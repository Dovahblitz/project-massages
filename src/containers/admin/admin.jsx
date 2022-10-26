import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectMassages} from '../../slices/massagesSlice'
import {loadMassages} from '../../slices/massagesSlice'
import {Link} from 'react-router-dom'
import {config} from '../../config'
import {deleteOneMassage} from '../../api/massages'

import {displayMassages} from '../../api/massages'

const Admin = (props)=>{
    
    const massages = useSelector(selectMassages)
    const dispatch = useDispatch()

    const onClickDeleteMassage = (id)=>{
        deleteOneMassage(id)
        .then((res)=>{
            displayMassages
            .then((response)=>{
                dispatch(loadMassages(response.result))
            })
        })
        .catch((err=>console.log(err)))
    }


return (
    <section>
        <h2>Administration</h2>
        <Link to="/addMassage">Ajouter un massage</Link>
        <h3>Mes produits</h3>
        <table className="tableMassages">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {massages.massages.length > 0 ? massages.massages.map((b)=>{
                    return <tr key={b.id}>
                        <td>{b.name}</td>
                        <td>
                            <Link to={`/editMassage/${b.id}`}>modifier</Link>
                            <button 
                                onClick={(e)=>{
                                    onClickDeleteMassage(b.id)
                                }}
                                >
                                    supprimer
                                </button>
                        </td>
                    </tr>
                }):<tr>
                    <td colSpan="3"></td>
                </tr>
            }
            </tbody>
        </table>
    </section>
)
}

export default Admin
        