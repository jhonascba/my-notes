import React from 'react';

import '../assets/Header.css'

const Header = ({ children }) => {
    return <header className="Header">{children}</header>;
}
 
export default Header;