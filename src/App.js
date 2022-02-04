import './App.css';
import React, {useState} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function App() {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Введите какой-то текст')

    function increment(){
       setLikes(likes + 1);
    }

    function decrement(){
        setLikes(likes - 1);
    }
  return (
    <div className="App">
      <h1>{likes}</h1>
        <h1>{value}</h1>
        <input type="text"
               value={value}
               onChange={event => setValue(event.target.value)}
        />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
        <Stack spacing={2}>
            <Pagination count={999} />
        </Stack>
    </div>
  );
}

export default App;
