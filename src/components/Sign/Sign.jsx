import React from 'react';
import './Sign.css'
import db from '../../DB.json' 
import { Link } from 'react-router-dom';
import { useTelegram } from '../../hooks/useTelegram';


const Sign = ({znak}) => {

    const {lang} = useTelegram()

    let srcImg
    let srcName
    let srcDate

    for (let key in db) {
        if (znak === key) {
            srcImg = db[key]?.image
            lang === "ru" ? srcName = db[key]?.name : srcName = znak[0].toUpperCase() + znak.slice(1, znak.length)
            srcDate = db[key]?.dates
        }
    }

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