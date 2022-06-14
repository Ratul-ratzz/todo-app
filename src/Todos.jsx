import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import { Grid } from '@mui/material';



//Fetching API - simple code
const Todos = () => {

  const [todos, setTodos] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        const responseTodos = res.data;
        setTodos(responseTodos)
      })
  }, []);

  // console.log(todos)

  return (
    /*Loading component r eta true false statement type er kaj korbe */
    // Loading part + tarpor load er por jeta dekhabe seta load hobe
    //Tarpor todos title e add koranojabe
    <>
      {todos ?
        (
          <div style={{
            display: "flex",
            flexWrap: "wrap",

          }}>
            <span>
            <div className='app'>
              <h1><u>This is the Todo list</u></h1>              
            </div>
            </span>
           
        
      


            <div className='app-2'>
              <Grid container spacing={1}>
                {todos.map((todo) => (
                  <Grid item xs={3} spacing={3}>

                    <TodoCard todo={todo} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        ) : <CircularProgress />}
      
    </>
  )
}

export default Todos;