import React, {useState} from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { themeOptionLight, themeOptionDark } from "./Welcome";

export const themeOptionDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8c52ff',
    },
    secondary: {
      main: '#ff66ca',
      contrastText: '#ffffff',
    },
  }
});

//Hooks para los estados iniciales de las tareas
export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <ThemeProvider theme={themeOptionDark}>
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Escribe tu tarea...' />
    <button type="submit" className='todo-btn' fullWidth color="secondary" sx={{ mt: 5, mb: 5 }}>Añadir tarea</button>
  </form>
  </ThemeProvider>
  )
}
