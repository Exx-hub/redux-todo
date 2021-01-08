import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, CLEAR_ALL, DELETE_TODO, TOGGLE } from "./actionTypes";

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: uuidv4(),
						title: action.payload,
						completed: false,
					},
				],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload),
			};
		case CLEAR_ALL:
			return {
				todos: [],
			};
		case TOGGLE:
			return {
				...state,
				todos: state.todos.map((item) => {
					if (item.id === action.payload) {
						item.completed = !item.completed;
					}
					return item;
				}),
			};
		default:
			return state;
	}
};

export default reducer;
