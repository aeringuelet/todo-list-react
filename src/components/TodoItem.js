import React, { useState } from 'react';

const TodoItem = ({ data, setDone }) => {
    const { todo, content, date, userName, isDone, id } = data;

    const handleClick = () => {
        let changedItem = {...data, isDone: !data.isDone};
        setDone(changedItem);
    }

    let classes = 'list-group-item list-group-item-action flex-column align-items-start';
    if(isDone) {
        classes += ' active';
    }

    return (
        <div className="list-group col-md-8">
            <a className={classes} onClick={handleClick}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ todo }</h5>
                    <small>{ date }</small>
                </div>
                <p className="mb-1">{ content }</p>
                <small>{ userName }</small>
            </a>
        </div>
    );
}
 
export default TodoItem;