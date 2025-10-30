import { useState } from 'react';
import { Router, Routes, Route } from 'react-router';
import './App.css';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <>
      <div>
        <TaskList />
       
        {/* <Routes> 
          <Route path="/" element={<TaskList/>} />
          <Route path="/details/:id" element={<TaskDetail/>} /> 
        </Routes> */}
       
      </div>
      
    </>
  )
}

export default App
