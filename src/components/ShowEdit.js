import { useState } from "react";

function ShowEdit({onSubmit,todo}) {
    const [editTitle,setEditTitle] = useState(todo.title);
    const [editDesc,setEditDesc] = useState(todo.description);
    const [editDate,setEditDate] = useState(todo.date);

    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit(todo.id,editTitle,editDesc,editDate);
    };

    const handleTitle = (event)=>{
        setEditTitle(event.target.value);
    };

    const handleDesc = (event)=>{
        setEditDesc(event.target.value);
    };

    const handleDate = (event)=>{
        setEditDate(event.target.value);
    };

  return (
    <div className="task">
    <form onSubmit={handleSubmit} className="edit-task">
        <label className="fl">Edit Todo</label>
        <label className="labels">Title</label>
        <input onChange={handleTitle} value={editTitle} required/>
        <label className="labels">Description</label>
        <textarea onChange={handleDesc} value={editDesc}></textarea>
        <label className="labels">Date</label>
        <input type="date" onChange={handleDate} value={editDate} required/>
        <button>Update</button>
    </form>
    </div>
  )
}
export default ShowEdit;