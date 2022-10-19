import * as React from 'react';
import {Todo} from "../model";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<TodoListProps> = ({todos, setTodos, }) => {

    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    <SingleTodo todo={todo} setTodos={setTodos} todos={todos}/>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;