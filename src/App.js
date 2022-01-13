import './App.css';
import { Login } from './components/Login';
import { Navbar } from "../src/components/Navbar";
import { Todos } from "./components/Todos";
import { Routes, Route } from "react-router-dom";
import { TodoDetails } from "../src/components/TodoDetails";
import { EditTodo } from "../src/components/EditTodo";
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path="/" element={<PrivateRoute>
          <Todos />
        </PrivateRoute>}></Route>    

        <Route path="/todo/:id" element={<PrivateRoute>
          <TodoDetails />
        </PrivateRoute>}></Route> 

        <Route path="/todo/:id/edit" element={<PrivateRoute>
          <EditTodo />
        </PrivateRoute>}></Route>  

        <Route path="/login" element={<Login />}></Route>

      </Routes>
    </div>
  );
}

export default App;
