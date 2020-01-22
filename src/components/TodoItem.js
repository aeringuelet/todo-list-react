import React, { useState } from 'react';

const TodoItem = ({ data, setDone }) => {
    const { todo, content, date, userName, isDone, id } = data;

    const handleClick = () => {
        let changedItem = {...data, isDone: !data.isDone};
        setDone(changedItem);
    }

    let activeClass = "bg-secondary";
    if (isDone) {
		activeClass = "bg-success";
	}

    return (
        <div className="container d-flex justify-content-center">
            <div className={`card text-white mb-3 col-md-6 p-0 ${activeClass}`}>
                <div className="card-header" style={{cursor:'pointer'}} onClick={handleClick}>{ todo }</div>
                <div className="card-body">
                    <h4 className="card-title">{ userName } - { date }</h4>
                    <p className="card-text">{ content }</p>
                </div>
            </div>
        </div>
    );
}
 
export default TodoItem;