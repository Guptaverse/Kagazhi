import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputTitle, setTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [divs, setDivs] = useState([]);

  const deleteDiv = async (title) => {
    await axios
      .delete(`${process.env.REACT_APP_Backend_URL}delete/${title}`)
      .then((res) => {
        if (res.status === 204) {
          console.log("deleted from backend");
          createDivhandler();
        } else {
          // Handle error responses from the server
          console.log("some error");
        }
      })
      .catch((err) => {
        // Handle network errors or other exceptions
        console.log(err);
      });
  };
  const createDivhandler = async () => {
    console.log("I am inside createHandler");
    try {
      const newDivs = [];
      await axios
        .get(`${process.env.REACT_APP_Backend_URL}data`)
        .then((res) => {
          const response = res.data.data;
          response.map((item, idx) => {
            const { title, description } = item;

            console.log(title, " ", description);

            const newDiv = (
              <div key={idx} className="created-div">
                <h3>{title}</h3>
                {description}
                <button onClick={() => deleteDiv(title)}>delete</button>
              </div>
            );
            newDivs.push(newDiv);

            console.log();
          });
          setDivs(newDivs);
          setTitle("");
          setInputText("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    console.log("I am inside createHandler");
  };
  const createDiv = async () => {
    const title = inputTitle + "" + divs.length;
    const data = { title, inputText };

    await axios
      .post(process.env.REACT_APP_Backend_URL, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
    createDivhandler();
  };

  return (
    <div className="App">
      <h1>Kagazhi : Note taking app</h1>
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
      <button onClick={createDiv}>Save</button>
      {/* <button onClick={handleData}>Data</button> */}
      <div className="container">{divs}</div>
    </div>
  );
}

export default App;
