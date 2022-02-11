import './App.css';
import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './Animation.css';
import './Animation.css';
import 'animate.css';


function App(){

    const [value, setValue] = useState([])
    const [newValue, setNewValue] = useState([])

    const Add = () =>{

        if (newValue.length !== 0 ) {
            setValue([...value, newValue])
            setNewValue('')
        }
        else {
        }
        document.getElementById('textInput').value = "";
    }
    const getElement = (e) => {
         setNewValue(e.target.value)
    }
    const handleRemove = (deleteIndex) =>{
        const list  = document.getElementById('mainList')

        list.addEventListener('animationend', () => {

             list.classList.add('animate__bounceOutLeft')
        } )

        setValue(value.filter((value, index)=> index !== deleteIndex));

    }

    return(

        <div className="App">
            <header>
                <form className="formToDo" onSubmit={(event => {event.preventDefault()})}>
                    <h1>What's you need to do today ?</h1>
                    <input type="text"
                           placeholder="Enter your text"
                           id="textInput"
                           onChange={getElement}
                    >
                    </input>
                    <Button variant = "outlined" onClick={Add} type="submit">Add</Button>
                </form>
            </header>
                {value.map((value, index)=>
                        <div className="mainList animate__animated animate__flipInX" key={index} id="mainList">
                            <span className="listItem">{value}</span>
                            <IconButton onClick={()=>handleRemove(index)}>
                                <DeleteIcon/>
                            </IconButton>
                        </div>
                    )
                }
        </div>
    );
}

export default App;
