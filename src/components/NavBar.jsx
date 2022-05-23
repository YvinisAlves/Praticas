import './style.css';
import React, { useState } from 'react';

import {ReactComponent as CogIcon} from '../icons/cog.svg';
import {ReactComponent as ChevronIcon} from '../icons/chevron.svg';
import {ReactComponent as ArrowIcon} from '../icons/arrow.svg';

import { CSSTransition } from 'react-transition-group';



export function NavBar(props){
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}
export function NavItems(props){
    const [open, setOpen] = useState(false);

    return(
        <li className="nav-item">
            <a href="#/test" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export function DropdownMenu(){

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height + 25);
    }

    function DropdownItem(props){
        return(
            <a href="#1" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className="dropdown" style={{height:menuHeight}}>

            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames= "menu-primary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon="😀">My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>} rightIcon={<ChevronIcon/>} goToMenu="settings">Settings</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames= "menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon="🎶">Audio</DropdownItem>
                    <DropdownItem leftIcon="🌡">Temperatura</DropdownItem>
                    <DropdownItem leftIcon="✨">Efeitos</DropdownItem>
                    <DropdownItem leftIcon="🎨">Visual</DropdownItem>
                    <DropdownItem leftIcon="🗺">Localização</DropdownItem>
                    <DropdownItem leftIcon="🧭">Tempo</DropdownItem>
                </div>
            </CSSTransition>

        </div>
    )
}