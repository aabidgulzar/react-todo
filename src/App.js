import axios from "axios";
import CreateTodo from "./components/CreateTodo";
import ShowTodo from "./components/ShowTodo";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [addTodo , setAddTodo] = useState([]);

  const fetchTodo = async ()=>{
    const response = await axios.get('http://localhost:3001/todo');
    setAddTodo(response.data);
  }

useEffect(()=>{
  fetchTodo();
},[])

  const handleSubmit = async (title ,description,date)=>{
    const response = await axios.post('http://localhost:3001/todo',{
        title:title,
        description:description,
        date:date,
    });
     const createdTodo = [...addTodo, response.data];
     setAddTodo(createdTodo);
  };





  const deleteTodo = async (id)=>{
    await axios.delete(`http://localhost:3001/todo/${id}`);
    const updatedTodo = addTodo.filter((task)=>{
      return task.id !== id;
    });
    setAddTodo(updatedTodo);
  };




  const handleEdit = async (id,editTitle,editDesc,editDate)=>{
    const response = await axios.put(`http://localhost:3001/todo/${id}`,{
      title:editTitle,
      description:editDesc,
      date:editDate
    });
    const updatedTodo = addTodo.map((task)=>{
      if(task.id === id){
        return  {...task , ...response.data}
      }
      return task;
    })
    setAddTodo(updatedTodo);
  };




  return (
    <div className="app">
      <h1>Todo List</h1>
      <CreateTodo onSubmit = {handleSubmit}/>
      <ShowTodo tasks={addTodo} className="todo-list" deleteTodo={deleteTodo} editTodo={handleEdit}/>
    </div>
  )
}

export default App;