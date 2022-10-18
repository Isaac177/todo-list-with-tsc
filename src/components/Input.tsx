import * as React from 'react';

interface InputProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;
}


const Input: React.FC <InputProps> = ({todo, setTodo, handleAddTodo}) => {
    return (
        <form onSubmit={handleAddTodo}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </div>
            <button className="btn btn-primary btn-block">Add Todo</button>
        </form>
    );
}

export default Input;