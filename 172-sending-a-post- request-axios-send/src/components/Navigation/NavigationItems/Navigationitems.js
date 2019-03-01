import React from  'react';
import classes from './Navigationitems.css';
import NavigationItem from './Navigationitem/Navigationitem';

const navigationitems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Check Out</NavigationItem>
    </ul>
);

export default navigationitems;