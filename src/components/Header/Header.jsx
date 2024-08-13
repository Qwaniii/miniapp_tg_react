import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css'

const Header = () => {

    const {user, onClose, back} = useTelegram()

    const backBt = () => {
        back.onClick()
    }

    return (
       <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {user?.username}
        </span>
        <Button onClick={backBt} >Назад</Button>
       </div>
    )
};

export default Header;