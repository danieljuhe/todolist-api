
import React, { useState, useEffect } from "react";
import '../../styles/index.css';
import Todo from "./todo";


const Home = () => {
	const [inputControler, setInputControler]=useState();
	const [todos, setTodos]=useState([]);
	const [tasks, setTasks]=useState([])

	
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

	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">todolist</p></div>
				<div className="imputdiv">
					<input type="text" className="input" value={inputControler} onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="second">{tasks.map((task,index)=>{
							return <Todo task={task}  tasks={tasks} setTasks={setTasks} index={index}/>
						})}
					</div>
					<p className="count">
						{todos.length === 0 ? <p>Nothing to do today</p>:<p>You must do {todos.length} tasks</p>}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;