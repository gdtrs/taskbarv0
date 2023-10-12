import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { icon } from '@fortawesome/fontawesome-svg-core';
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  //Este es el componetente de las tareas como tal. 
  //Tienen su estado (completas o no) y los íconos para borrar/editar
  
  //Intenté algo raro con los grids, 
  //si da mucho problema se puede pasar a divs y no debería haber problema
  return (
    <Grid container spacing={0.5}>
    <Grid item xs={10} className="Todo" onClick={() => toggleComplete(task.id)}>
        <p className={`${task.completed ? 'completed' : ""}`} >{task.task}</p>   
    </Grid>
    <Grid item xs={2}>
        <FontAwesomeIcon className="icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </Grid>
   </Grid>
  )
}
