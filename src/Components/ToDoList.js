import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';

const ToDoList = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    axios.get('http://localhost:3001/posts')
      .then((response) => {
        setTodoArray(response.data);
      })
      .catch(() => {
        alert('Cannot display');
      });
  };

  const addTodo = () => {
    const newTodoObj = {
      title: title,
      imageUrl: imageUrl,
      completed: false,
    };
    axios.post('http://localhost:3001/posts', newTodoObj)
      .then(() => {
        getTodo();
        setTitle('');
        setImageUrl('');
      })
      .catch(() => {
        alert('Not posted');
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        alert('Cannot delete');
      });
  };

  const openUpdateDialog = (id) => {
    setUpdateId(id);
    setOpenDialog(true);
  };

  const closeUpdateDialog = () => {
    setUpdateId(null);
    setOpenDialog(false);
  };

  const updateTodo = () => {
    if (updateId !== null) {
      const updatedTodoObj = {
        title: title,
        imageUrl: imageUrl,
      };
  
      axios.put(`http://localhost:3001/posts/${updateId}`, updatedTodoObj)
        .then(() => {
          getTodo();
          setTitle('');
          setImageUrl('');
          closeUpdateDialog();
        })
        .catch(() => {
          alert('Cannot update');
        });
    }
  };
  
   
    
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField id="outlined-basic" label="Image URL" variant="outlined" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <Button variant="outlined" onClick={addTodo}>Add Photo</Button>
      </div>
      <div>
        <ol>
          {todoArray.map((todoItem) => (
            <li key={todoItem.id}>
              <strong>{todoItem.title}</strong>
              <br />
              <img src={todoItem.imageUrl} alt={todoItem.title} style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
              <br />
              <Button variant="outlined" onClick={() => openUpdateDialog(todoItem.id)} startIcon={<EditIcon />}>
                
              </Button>
              <Button variant="outlined" onClick={() => deleteTodo(todoItem.id)} startIcon={<DeleteIcon />}>
               
              </Button>
            </li>
          ))}
        </ol>
      </div>

      <Dialog open={openDialog} onClose={closeUpdateDialog}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
          <TextField label="Updated Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
          <TextField label="Updated Image URL" variant="outlined" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeUpdateDialog}>Cancel</Button>
          <Button onClick={updateTodo}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ToDoList;
