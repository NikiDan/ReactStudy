import './App.css';
import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './Animation.css';
import './Animation.css';
import 'animate.css';
import CreateIcon from '@mui/icons-material/Create';


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
        setValue(value.filter((value, index)=> index !== deleteIndex));
    }
    const handleChange = (text, changeIndex) =>{
        const input = "<input type='text'>"
        const span = document.getElementById('span')
        span.innerHTML = input;
        // setValue(value.map(item => {
        //     if(item.key === changeIndex){
        //         item.text = text;
        //     }
        // }))
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
                           className="headerInput"
                    >
                    </input>
                    <Button variant = "outlined" onClick={Add} type="submit">Add</Button>
                </form>
            </header>
                {value.map((value, index)=>
                        <div className="mainList animate__animated animate__flipInX" key={index} id="mainList">
                            <div className="listItem" id="span">{value}</div>
                            <div>
                                <IconButton onClick={()=>handleChange(index)}>
                                    <CreateIcon className="createIcon"/>
                                </IconButton>
                                <IconButton onClick={()=>handleRemove(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        </div>
                    )
                }
        </div>
    );
}

export default App;
