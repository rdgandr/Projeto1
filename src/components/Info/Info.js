import React from 'react'
import './info.css'

export function Info ({label, value}){
    return(
        <div className="info" >
            <p className='info-label' >{label}</p>
            <p className='info-value' >{value}</p>
        </div>
    )
}