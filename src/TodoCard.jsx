import React from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css'

const TodoCard = (props) => {
    const {todo} = props
    const { id,title, completed } = todo;
    const history = useNavigate();
    return (
        <div className ="todo-style"
            onClick ={() => history(`/todo/${id}`)}
            >
            <h4> {title} </h4>
            <h6>{`completed : ${completed}`}</h6>
        </div>
    )

}

export default TodoCard