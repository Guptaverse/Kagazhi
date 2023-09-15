import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputTitle, setTitle] = useState('');
  const [inputText, setInputText] = useState('');
  const [divs, setDivs] = useState([]);


  const handleData = async()=>{
    await axios.get(`${process.env.REACT_APP_Backend_URL}data`)
    .then((res)=>{
      if (Array.isArray(res.data)) {
        res.data.map((item) => {
          console.log(item.title);
           // Make sure to return the mapped item if needed
        })}
    })
    .catch((err)=>{
      console.error("Error",err)
    })
  }
  const createDiv = async() => {
    const title = inputTitle + "" +divs.length;
    const data = {title,inputText}
    if (inputText && inputTitle) {
      // Create a new div element
      const newDiv = (
        <div key={divs.length} className="created-div">
          <h3>{`${inputTitle} #${1+divs.length}`}</h3>
          {inputText}
        </div>
      );

      // Update the divs array with the new div
      setDivs([newDiv,...divs]);

      // Clear the input field
      setInputText('');

    }
    await axios.post(process.env.REACT_APP_Backend_URL,data)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.error("Error",err)
    })

    
  };

  return (
    <div className="App">
      <h1>Dynamic Div Creator (React)</h1>
      <input
        type="text"
        placeholder="Enter title"
        value={inputTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={createDiv}>Create Div</button>
      <button onClick={handleData}>Data</button>
      <div className="container">{divs}</div>
    </div>
  );
}

export default App;
