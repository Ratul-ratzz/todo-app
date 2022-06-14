import React from 'react';
import "./style.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from './Todos'
import Todo from './Todo';



const App = () => {
  return (
    <div className='"App'>     
    {/* Routing - Path take allot korar jonno nicher code ta   */}
      <Router>        
          <Routes>
            <Route exact path="/" element={<Todos />} />
            <Route path="/todo/:id" element={<Todo />} />
          </Routes>        
      </Router>
    </div>
  );
}



export default App;
