import React, { useState } from "react";

const Todo = (props) => {

    const [button, setButton]=useState("");

    const buttonblock = (event) => {
		setButton("appear")
	}

	const buttonhidden = () => {
		setButton("")
	}

    const erase = (event) => {
		let filteredTodos = props.todos.filter((tasks,index) => index !== props.index);
		props.setTodos(filteredTodos);
	}


    return (
        <div key={props.index} className="divh4" onMouseOver={buttonblock} onMouseOut={buttonhidden}>
            <h4>{props.tasks.label}</h4>
            <button className="button" onClick={erase} id={props.index}  style={{display: (button=="appear") ? 'block':'none',}}> X </button>
		</div>
    )
}

export default Todo;