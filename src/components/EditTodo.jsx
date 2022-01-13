import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editTodoError, editTodoLoading, editTodoSuccess } from "../features/todos/actions";

export const EditTodo = () => {
    const [text, setText] = useState("");

    const { id } = useParams();

    const dispatch = useDispatch();

    const updateTodo = (id) => {
        dispatch(editTodoLoading());

        fetch(`http://localhost:3002/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id,
                title: text,
                status: true,
            })
        })
        .then((d) => d.json())
        .then((res) => {
            dispatch(editTodoSuccess(res));
        })
        .catch((err) => {
            dispatch(editTodoError(err))
        });
    }

    return (
        <div>
            <input
                value={text}
                type="text" 
                placeholder="Enter Todo"
                onChange={(e) => setText(e.target.value)} />

            <button onClick={() => {
                updateTodo(id);
            }}
            >Edit Todo</button>
        </div>
    )
}