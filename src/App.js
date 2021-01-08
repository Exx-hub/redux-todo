import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<TodoInput />
				<TodoList />
			</div>
		</Provider>
	);
}

export default App;

// PROVIDER ok
// STORE ok
// REDUCER ok
// ACTION TYPE ok
//ACTION CREATOR ok
