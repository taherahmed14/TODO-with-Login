import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(data);
        getData();
    }, []);

    const getData = () => {
        fetch(`http://localhost:3002/todos/${id}`)
        .then((d) => d.json())
        .then((res) => {
            setData(res);
        });
    }

    const { title } = data;

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
};