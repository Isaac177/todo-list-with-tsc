import React from 'react';
import Input from "./components/Input";
import './App.css';
import {Todo} from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = React.useState<string>("");
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo.length > 0) {
            setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
        }
    }

    console.log(todos);
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Todo App</h1>
                            <Input todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
                            <div className="mt-4">
                                <TodoList todos={todos} setTodos={setTodos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
