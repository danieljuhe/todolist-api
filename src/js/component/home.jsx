import React, {useEffect, useState} from "react";


//create your first component
const Home = () => {
	
	useEffect(()=>{
		fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
		method: "PUT",
		body: JSON.stringify(todos),
		headers: {
		  "Content-Type": "application/json"
		}
	    })
	   .then(resp => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
		})
		.catch(error => {
			//manejo de errores
			console.log(error);
		});
	})

	const [inputControler, setInputControler]=useState();
	const [todos, setTodos]=useState([]);

	const inputvalue = (event) => {
		setInputControler(event.target.value)
	}

	const keypress = (event) => {
		if (event.key === 'Enter'){
			setTodos(prev => [...prev,inputControler])
			setInputControler("")
		}
	} 

	const erase = (event) => {
		let filteredTodos = todos.filter(todo => todo !== event.target.id);
		setTodos(filteredTodos);
	}
	
	return (
		<div className="main">
			<div className="toodo">
				<div className="title"><p className="ptitle">todolist</p></div>
				<div className="imputdiv">
					<input type="text" className="input" value={inputControler} onChange={inputvalue} onKeyDown={keypress}></input>
					<div className="second">{todos.map((todo,index)=>{
						return (
							<div key={index} className="divh4">
								<h4>{todo}</h4>
								<button className="button" id={todo} onClick={erase}> X </button>
							</div>
						)
					})}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
