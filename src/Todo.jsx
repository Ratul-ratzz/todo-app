import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

const Todo = () => {
  //useparam use kore id take access korchi
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo)
      })
  }, []);
  // console.log(todoDetails)
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`Todo id: ${todoId}`}          </h1>
          <h1>{`Todo userId: ${userId}`}      </h1>
          <h1>{`Todo title: ${title}`}        </h1>
          <h1>{`Todo completed: ${completed}`}</h1>
        </div>
      ) : (<CircularProgress />

      )}

    </div>
  );
}

export default Todo