import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import '../styles/Todo.sass';

const Todo = ({ todos, completeTodo, removeTodo }) => {


    return todos.map((todo, index) => (


            <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row adding-row '}
            key={index}
        >
            <div  key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine

                    onClick={() => removeTodo(todo.id)}
                    className={ 'delete-icon ' }
                />

            </div>
        </div>

    ));
};

export default Todo;