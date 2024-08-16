import React, { useEffect, useState } from 'react';
import './Sign.css'
import db from '../../DB.json' 
import { Link } from 'react-router-dom';


const Sign = ({znak, langTg}) => {


    const [srcImg, setSrcImg] = useState()
    const [srcName, setSrcName] = useState()
    const [srcDate, setSrcDate] = useState()

    useEffect(() => {
        for (let key in db) {
            if (znak === key) {
                setSrcImg(db[key]?.image)
                langTg === "ru" ? setSrcName(db[key]?.name) : setSrcName(znak[0].toUpperCase() + znak.slice(1, znak.length))
                setSrcDate(db[key]?.dates)
            }
    }}, [langTg])

    return (
       <div >
        <Link className={'sign'}
        to={`horo/${znak}`}
      >
        {srcName}
        <img  className={'img'} src={srcImg}></img>
        <span className={'date'}>{srcDate}</span>
        </Link>
       </div>
    )
};

export default Sign;