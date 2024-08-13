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
            <div className='aaa'>
            <img  className={'img'} src="../../img/aries.png"></img>
            </div>
       </div>
    )
};

export default List;