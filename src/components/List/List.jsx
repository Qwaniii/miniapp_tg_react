import React from 'react';
import './List.css'
import Sign from '../Sign/Sign';

const List = ({zodiak}) => {

    const arrZodiak = Object.keys(zodiak)

    return (
       <div className={'list'}>
            {arrZodiak.map((znak) => (
                <Sign znak={znak} key={znak+1}/>
            ))}
       </div>
    )
};

export default List;