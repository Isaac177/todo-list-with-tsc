import * as React from 'react';
import {Todo} from "../model";
import {MdDone, MdEdit} from 'react-icons/md';
import {VscTrash} from "react-icons/vsc";


interface Props {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[]
}

const SingleTodo: React.FC<Props> = ({todo, setTodos, todos}: Props) => {
    const [edit, setEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

    const handleDone = (id: number) => {
        // @ts-ignore
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
    };

    const handleDelete = (id: number) => {
        // @ts-ignore
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    // @ts-ignore
    return (
        <form>
            <div className="form-check">
                {edit ? (
                    <input
                        type="text"
                        className="form-control"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                    />
                ) : (
                    <label className="form-check-label" style={{textDecoration: todo.isDone ? "line-through" : ""}}>
                        {todo.todo}
                    </label>
                )}
            </div>
            <MdEdit onClick={() => {if (!edit && todo.isDone) return; setEdit(!edit)}}/>
            <MdDone onClick={() => handleDone(todo.id)}/>
            <VscTrash onClick={() => handleDelete(todo.id)}/>
        </form>
    );
}

export default SingleTodo;