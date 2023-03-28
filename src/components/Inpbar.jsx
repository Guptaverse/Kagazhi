import React from 'react'
import TextField from '@mui/material/TextField';
import {useRef} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Inpbar = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
      <div style={{marginTop : "2%"}}>
        <TextField
          variant="outlined"
          placeholder="Write awesome things about yourself"
          multiline
          rows={3}
          rowsMax={10}
          sx={{
            width: (windowWidth.current)/3
        }}
        />
        <Fab color="primary" style={{marginTop:"17px",marginLeft:"5px",boxShadow : "none"}} aria-label="add">
          <AddIcon />
        </Fab>
  </div>
  )
}

export default Inpbar