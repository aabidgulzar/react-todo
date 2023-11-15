 import { useState } from "react";
 
 function ShowTodoForm({onSubmit}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    onSubmit(title,description,date);
  };


  const handleTitle = (event)=>{
    setTitle(event.target.value)
  };

  const handleDesc = (event)=>{
    setDescription(event.target.value)
  };

  const handleDate = (event)=>{
    setDate(event.target.value)
  };

  return (
    <div className="todo-form">
    <form onSubmit={handleSubmit} className="form">
      <label className="label">Add Todo</label>
      <label className="labels">Title</label>
      <input onChange={handleTitle} className="input" required/>
      <label className="labels">Description</label>
      <textarea onChange={handleDesc} className="textarea" ></textarea>
      <label className="labels">Date</label>
      <input type="date" onChange={handleDate} className="input" required/>
      <button className="button">Save</button>
    </form>
    </div>
  )
}
export default ShowTodoForm;