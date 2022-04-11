import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import './pages/Junior.css'
import s from './pages/Header.module.css'

function Header() {
    return (

        <div className={s.header}>
            {/* <NavLink to={PATH.PRE_JUNIOR} className={`${s.link} ${s.active}`}> PreJunior </NavLink>*/} {/*не работает*/}
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}> PreJunior </NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}> Junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}> JuniorPlus </NavLink>
            <div className={s.item}>
                <img src="https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__12-512.png"/>
            </div>
        </div>
    )
}

export default Header

{/*   <div>      <NavLink to={PATH.PRE_JUNIOR}
                     style={(params) => {
                         return {color: params.isActive ? 'orange' : 'black'}}}
            > PreJunior </NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => isActive ? 'act' : 'default'}
            > Junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={({isActive}) => isActive ? 'act' : 'default'}
            > JuniorPlus </NavLink>  </div>
*/
}