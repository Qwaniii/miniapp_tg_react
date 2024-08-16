import React from 'react';
import './List.css'
import Sign from '../Sign/Sign';

const List = ({zodiak, langTg}) => {

    const arrZodiak = Object.keys(zodiak)

    return (
       <div className={'list'}>
            {arrZodiak.map((znak) => (
                <Sign znak={znak} langTg={langTg} key={znak+1}/>
            ))}
       </div>
    )
};

export default List;