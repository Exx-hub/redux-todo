import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actionCreators";

function TodoInput() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		if (input) {
			dispatch(addTodo(input));
			setInput("");
		}
	};
	return (
		<form>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Add a task..."
			/>
			<button type="submit" onClick={handleClick}>
				ADD
			</button>
		</form>
	);
}

export default TodoInput;
