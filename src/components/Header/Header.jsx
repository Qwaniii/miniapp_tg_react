import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const {user, onClose, back, changeLanguage} = useTelegram()

    let navigate = useNavigate()

    const backBt = () => {
        back.onClick(navigate(-1))
    }

    return (
       <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {user?.username}
        </span>
        <Button onClick={backBt} >Назад</Button>
        <Button onClick={changeLanguage} >Сменить языка</Button>
       </div>
    )
};

export default Header;