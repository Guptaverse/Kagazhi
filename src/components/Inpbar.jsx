import React from 'react'
import TextField from '@mui/material/TextField';
import {useRef} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Inpbar = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
      <div style={{marginTop : "2%",display : "flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <TextField
          variant="outlined"
          placeholder="Write awesome things about yourself"
          multiline
          rows={3}
          rowsMax={10}
          sx={{
            width: (windowWidth.current)/3,
            backgroundColor: "#ccc76e",
            "& .MuiInputBase-root": {
              color: '#ffff'},
              "& label.Mui-focused" :{
                color: "#ccc76e",
              },
              "& .MuiOutlinedInput-root" :{
                "&.Mui-focused fieldset" :{
                  borderWidth:"none",
                  borderColor: "#ccc76e",
                  borderRadius:"10px",
                }
              }
            
        }}
        />
        <Fab style={{marginTop:"17px",marginLeft:"5px",boxShadow : "none",backgroundColor:"#ccc76e",color:"white"}} aria-label="add">
          <AddIcon />
        </Fab>
  </div>
  )
}

export default Inpbar