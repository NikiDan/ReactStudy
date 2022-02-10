import './App.css';
import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './Animation.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Animation.css';

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
    }
    const getElement = (e) => {
         setNewValue(e.target.value)
    }
    const handleRemove = (deleteIndex) =>{
        console.log(deleteIndex)
        setValue(value.filter((value, index)=> index !== deleteIndex));
    }

    return(
        <div className="App">
            <header>
                <form className="formToDo" onSubmit={(event => {event.preventDefault()})}>
                    <h1>What's you need to do today ?</h1>
                    <input type="text"
                           placeholder="Enter your text"
                           onChange={getElement}
                    >
                    </input>
                    <Button variant = "outlined" onClick={Add} type="submit">Add</Button>
                </form>
            </header>
            <TransitionGroup component="div">
                {value.map((value, index)=>
                        <CSSTransition key={value} timeout={200} classNames="animation">
                            <div className="mainList" key={index}>
                                <span className="listItem">{value}</span>
                                <IconButton onClick={()=>handleRemove(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        </CSSTransition>
                    )
                }</TransitionGroup>
        </div>
    );
}

export default App;
