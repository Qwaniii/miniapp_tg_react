import React from 'react';
import './List.css'
import Sign from '../Sign/Sign';
import db from '../../DB.json' 

const List = ({zodiak}) => {

    const arrZodiak = Object.keys(zodiak)
    console.log(db.aries)

    return (
       <div className={'list'}>
            {arrZodiak.map((znak) => (
                <Sign znak={znak}/>
            ))}
            <image  className={'img'} src="../../img/aries.png"></image>
       </div>
    )
};

export default List;