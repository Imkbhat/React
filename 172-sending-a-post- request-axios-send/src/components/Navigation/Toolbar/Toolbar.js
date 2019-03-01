import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div >
          <Logo />
        </div>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
    </header>

);

export default toolbar;