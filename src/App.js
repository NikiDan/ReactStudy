import './App.css';
import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App(){

    const [value, setValue] = useState([])
    const [newValue, setNewValue] = useState([''])

    const Add = (e) =>{
        setValue([...value,newValue])
        setNewValue('')

    }
    const getElement = (e) => {
        setNewValue(e.target.value)
    }
    const asd = () => {
        alert('pidor')
    }

    return(
        <div className="App">
            <header>
                <form className="formToDo" onSubmit={(event => {event.preventDefault()})}>
                    <h1>What's you need to do today ?</h1>
                    <input type="text"
                           placeholder="Enter your text"
                           onChange={getElement}
                    ></input>
                    <button onClick={Add} type="submit">Add</button>
                </form>
            </header>
            {value.map((value, index)=>
                <div className="mainList" key={index}>
                   <span className="listItem">{value}</span>
                    <DeleteIcon
                        onClick={asd}
                    />
                </div>)
            }
        </div>
    );
}

export default App;
