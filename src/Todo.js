import React from 'react';

function Todo(props) {
    return (
        <div className={`todo ${props.todo.favorite ? 'selected' : ''}`}>
            <div className="favorite">
                <button onClick={() => props.makeFavorite(props.index)}><i className="fa fa-star" aria-hidden="true"> </i></button>
            </div>
            <div className="todo-text">
                {props.todo.text}
            </div>
            <div className="actions">
                <button onClick={() => props.deleteTodo(props.index)}><i className="fa fa-times" aria-hidden="true"> </i></button>
            </div>
        </div>
    );
}

export default Todo;