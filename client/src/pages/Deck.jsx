import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'; 

import Card from './Card'

function Deck () 
{
    const [card, setCard] = useState([])

    useEffect( () => 
    {
        async function getCard()
        {
            const cardInfo = await axios.get('http://localhost:3000/propriedades')
            setPropriedades(cardInfo.data)
            console.log(cardInfo.data)
        }
        getCard()
    }, [])

    return (
        <>
        </>
    )
}



export default Deck

