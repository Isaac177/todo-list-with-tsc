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
        <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row w-200">
                {edit ? (
                    <>
                    <input
                        type="text"
                        className="form-control"
                        style={{width: "300px"}}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                    />

                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-block w-25 mx-2"
                        onClick={(e) => {
                            e.preventDefault();
                            setTodos(todos.map((todo) => todo.id === todo.id ? {...todo, todo: editTodo} : todo));
                            setEdit(false);
                        }}
                    />
                    </>
                ) : (
                    <label className="form-check-label" style={{textDecoration: todo.isDone ? "line-through" : "", width: '400px'}}>
                        {todo.todo}
                    </label>
                )}
            </div>
            <div className="d-flex flex-row align-items-center" style={{gap: '10px'}}>
                <MdEdit
                    fill={edit ? "green" : "blue"}
                    onClick={() => {if (!edit && todo.isDone) return; setEdit(!edit)}}/>
                <MdDone
                    fill={todo.isDone ? "green" : "blue"}
                    onClick={() => handleDone(todo.id)}/>
                <VscTrash
                    fill={todo.isDone ? "red" : "blue"}
                    onClick={() => handleDelete(todo.id)}/>
            </div>
        </div>
    );
}

export default SingleTodo;