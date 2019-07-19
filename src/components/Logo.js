import React from 'react'
import myLogo from '../logo.png'
import './Logo.css'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={myLogo} />
        </div>
    )
}