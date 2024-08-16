import React from 'react';
import './List.css'
import Sign from '../Sign/Sign';

const List = ({zodiak, defaultLang}) => {

    const arrZodiak = Object.keys(zodiak)

    return (
       <div className={'list'}>
            {arrZodiak.map((znak) => (
                <Sign znak={znak} defaultLang={defaultLang} key={znak+1}/>
            ))}
       </div>
    )
};

export default List;