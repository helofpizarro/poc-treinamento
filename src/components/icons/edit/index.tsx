import React from 'react'


type ColorProps = {
    color: string
}

const Edit = ({ color }:ColorProps ) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V17.3284C3 16.798 3.21071 16.2893 3.58579 15.9142L15.5094 3.9906C16.3196 3.18035 17.6437 3.21517 18.4102 4.06689L20.2073 6.06369C20.9283 6.86481 20.8849 8.09318 20.109 8.84131L8.08106 20.4397C7.7083 20.7991 7.21064 21 6.69279 21H3Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 6L17.5 10.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 21H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    )
}

export default Edit 