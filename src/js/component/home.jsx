
import React, { useState, useEffect } from "react";
import '../../styles/index.css';
import Todo from "./todo";


const Home = () => {
	const [inputControler, setInputControler]=useState();
	const [todos, setTodos]=useState([]);
	const [tasks, setTasks]=useState([])
	const [button, setButton]=useState("");

	
	useEffect(()=>{
		fetch("https://assets.breatheco.de/apis/fake/todos/user/danij")
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setTasks(response)
		})
	})

	const inputvalue = (event) => {
		setInputControler(event.target.value)
	}

	const keypress = (event) => {
		if (event.key === 'Enter'){
			setTasks([...tasks,inputControler])
			setInputControler("")
		}
	} 

    const buttonblock = () => {
		setButton("appear")
	}

	const buttonhidden = () => {
		setButton("")
	}

    const erase = () => {
		let filteredTask = tasks.filter((task,index) => index !== index);
		setTasks(filteredTask);
	}

	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">todolist</p></div>
				<div className="imputdiv">
					<input type="text" className="input" value={inputControler} onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="second">{tasks.map((task,index)=>{
							 return (
								<div key={index} className="divh4" onMouseOver={buttonblock} onMouseOut={buttonhidden}>
									<h4>{task.label}</h4>
									<button className="button" onClick={erase} id={index}  style={{display: (button=="appear") ? 'block':'none',}}> X </button>
								</div>
							)
						})}
					</div>
					<p className="count">
						{tasks.length === 0 ? <p>Nothing to do today</p>:<p>You must do {tasks.length} tasks</p>}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;