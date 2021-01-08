import { ADD_TODO, CLEAR_ALL, DELETE_TODO, TOGGLE } from "./actionTypes";

export const addTodo = (title) => {
	return {
		type: ADD_TODO,
		payload: title,
	};
};
export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};
export const clear = () => {
	return {
		type: CLEAR_ALL,
	};
};
export const toggle = (id) => {
	return {
		type: TOGGLE,
		payload: id,
	};
};
