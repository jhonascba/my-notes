import React from 'react';

import ToDo from './ToDo';

const ToDos = ({ toDos, handleToDoClick, handleToDoDelete }) => {
    return (
        <>
            {toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} handleToDoClick={handleToDoClick} handleToDoDelete={handleToDoDelete}/>)}
        </>
    )
}
 
export default ToDos;