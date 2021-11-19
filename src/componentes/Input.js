import React from 'react';

import '../assets/Input.css'

const Input = ({ onChange, value }) => {
    return <input className="Input" type="text" onChange={onChange} value={value}/>;
}

export default Input;