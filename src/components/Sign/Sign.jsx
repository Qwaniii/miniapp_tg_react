import React from 'react';
import './Sign.css'
import db from '../../DB.json' 
import { Link } from 'react-router-dom';


const Sign = ({znak}) => {

    let srcImg
    let srcName
    let srcDate

    for (let key in db) {
        if (znak === key) {
            srcImg = db[key]?.image
            srcName = db[key]?.name
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