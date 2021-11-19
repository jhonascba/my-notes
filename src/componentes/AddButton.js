import React from 'react';

import { BiPlusCircle } from "react-icons/bi";

import '../assets/AddButton.css'

const AddButton = ({ onClick }) => {
    return <button className="Button" onClick={onClick}><BiPlusCircle/></button>;
}

export default AddButton;