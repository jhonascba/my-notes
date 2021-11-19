import React from 'react';

import { BiXCircle } from 'react-icons/bi'

import '../assets/Todo.css'

const ToDo = ({ toDo, handleToDoClick, handleToDoDelete }) => {
    return (
        <div className="Todo-container" style={toDo.completed ? {borderLeft: '6px solid royalblue'} : {}}>
            <div className="Todo-container-item" onClick={() => handleToDoClick(toDo.id)}>
                {toDo.title}
            </div>
            <div>
                <BiXCircle className="Todo-container-button" onClick={() => handleToDoDelete(toDo.id)}/>
            </div>
        </div>
    )
}

export default ToDo