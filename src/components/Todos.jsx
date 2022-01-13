import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodoError, addTodoLoading, addTodoSuccess, deleteTodoError, deleteTodoLoading, deleteTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess, updateTodoError, updateTodoLoading, updateTodoSuccess, getData } from "../features/todos/actions";
import { Link } from "react-router-dom";
import "./Todo.css"

export const Todos = () => {
    const [text, setText] = useState("");
    const { loading, todos, errors } = useSelector((state) => ({
        loading: state.todoState.loading,
        todos: state.todoState.todos,
        errors: state.todoState.errors
    }), 
    function(prev, cur){
        if(prev.loading === cur.loading &&
            prev.status === cur.status &&
            prev.todos === cur.todos){
                return true;
        }
        return false;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos(){
        // dispatch(getData());
        try{
            dispatch(getTodoLoading());
            const data = await fetch("http://localhost:3002/todos")
            .then((d) => d.json());
            dispatch(getTodoSuccess(data));
        }
        catch(err){
            dispatch(getTodoError(err));
        }
    }

    const addTodo = () => {
        dispatch(addTodoLoading());

        fetch("http://localhost:3002/todos", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                status: false,
                title: text,
            })
        })

        .then((d) => d.json())
        .then((res) => {
            dispatch(addTodoSuccess(res));
            getTodos();
        })
        .catch((err) => {
            dispatch(addTodoError(err))
        });
    }

    const deleteTodo = (id) => {
        dispatch(deleteTodoLoading());

        fetch(`http://localhost:3002/todos/${id}`, {
            method: "DELETE"
        })
        .then((d) => d.json())
        .then((res) => {
            dispatch(deleteTodoSuccess(res));
            getTodos();
        })
        .catch((err) => {
            dispatch(deleteTodoError(err))
        });
    }

    const toggleStatus = (id, title, status) => {
        dispatch(updateTodoLoading());

        fetch(`http://localhost:3002/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id,
                title,
                status: true,
            })
        })
        .then((d) => d.json())
        .then((res) => {
            console.log(res);
            dispatch(updateTodoSuccess(res));
            getTodos();
        })
        .catch((err) => {
            dispatch(updateTodoError(err))
        });
    }

    return (
        loading ? <div>Loading...</div> :
        errors ? <div>Something went wrong</div> :
        <div>
            <input
                value={text}
                type="text" 
                placeholder="Enter Todo"
                onChange={(e) => setText(e.target.value)} />

            <button onClick={() => {
                addTodo();
            }}
            >Add Todo</button>

            {todos.map(({ id, title, status}) => 
                <div className="todoBox">
                    <Link to={`/todo/${id}`} className="todoTitle">
                        <div>{title}</div>
                    </Link>

                    <Link to={`/todo/${id}/edit`} className="editBtn">
                        <div>Edit</div>
                    </Link>

                    {status ? <div className="completed">Completed</div> 
                        :
                        <button onClick={() => { toggleStatus(id, title, status) }}>Mark Complete</button>
                    }

                    <button onClick={() => { deleteTodo(id) }}>Delete</button>
                </div>     
            )}

        </div>
    )
};