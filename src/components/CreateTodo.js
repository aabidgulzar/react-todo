import { useState } from "react";
import ShowTodoForm from "./ShowTodoForm"

function CreateTodo({onSubmit}) {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (title,description,date)=>{
        setShowForm(!showForm);
        
        onSubmit(title,description,date);
    };

    const closeForm = (e)=>{
        setShowForm(!showForm);
    }

    let content = '';

    if(showForm){
        content = <ShowTodoForm onSubmit={handleSubmit}/>
    }
  return (
    <div className="todo-section">
      <button onClick = {closeForm} className="show-form">
        <abbr title="Click to Close or Open Add todo">+</abbr>
      </button>
      {content}
    </div>
  )
};

export default CreateTodo;