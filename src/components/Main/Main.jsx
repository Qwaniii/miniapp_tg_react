import React from 'react';
import './Main.css'
import { useParams } from 'react-router-dom';


const Main = ({zodiak}) => {

    const idName = useParams()
    let option
    
    for (let key in zodiak) {
        if (idName.signName === key) {
            option = zodiak[key]
        }
    }

    return (
       <div className={'main'}>
        {option}
       </div>
    )
};

export default Main;