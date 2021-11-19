import React, { useState } from 'react';

import Input from './Input';
import Button from './AddButton';

const AddToDo = ({ handleToDoAddition }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        const eventValue = event.target.value
        setInputValue(eventValue)
    }

    const handleButtonAddClick = () => {
        handleToDoAddition(inputValue)
        setInputValue('')
    }

    return (
        <>
            <Input onChange={handleInputChange} value={inputValue}/>
            <Button onClick={handleButtonAddClick}>ADD</Button>
        </>
    )
}

export default AddToDo