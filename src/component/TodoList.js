import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../redux/actionCreators";
import TodoItem from "./TodoItem";

function TodoList() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	return (
		<div>
			{todos.map((item) => (
				<TodoItem key={item.id} {...item} />
			))}
			{todos.length > 1 && (
				<button onClick={() => dispatch(clear())}>CLEAR LIST</button>
			)}
		</div>
	);
}

export default TodoList;
