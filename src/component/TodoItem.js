import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggle } from "../redux/actionCreators";

function TodoItem({ title, id, completed }) {
	const dispatch = useDispatch();
	return (
		<div className="todoItem">
			<input
				type="checkbox"
				value={completed}
				onChange={() => dispatch(toggle(id))}
				checked={completed}
			/>
			<p style={{ textDecoration: completed ? "line-through" : "none" }}>
				{title}
			</p>
			<button onClick={() => dispatch(deleteTodo(id))}>X</button>
		</div>
	);
}

export default TodoItem;
