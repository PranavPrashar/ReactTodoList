import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault(); // by doing this we are making sure that the page does not refresh when we are pressing the button. 

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), // this is done so that the id of the submit is random, and very unlikly that the ID will be the same for some elements 
            text: input
        });
        setInput(''); // by doing this once we have done the function and added the text box will be cleared
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Update your item'
                        value={input} name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <button className='todo-button'>Update Item </button>
                </>
            ) : (
                    <>
                        <input
                            type='text'
                            placeholder='Add a ToDo Task'
                            value={input} name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button'>Add Todo</button>
                    </>
                )}

        </form>

    );
}

export default TodoForm
