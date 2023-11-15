import ShowEdit from "./ShowEdit";
import { EditSvg } from "./Svg";
import { DeleteSvg } from "./Svg";
import { useState } from "react";

function ShowEachTodo({todo,deleteTodo,editTodo}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = ()=>{
    deleteTodo(todo.id);
  };

  const handleEdit = ()=>{
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id,editTitle,editDesc,editDate)=>{
    setShowEdit(false);
    editTodo(id,editTitle,editDesc,editDate);
  }


  let content = <div className="task">
  
  <div className="div">  
    <button className="edit" onClick={handleEdit}>
        <EditSvg />
    </button> 
    <button className="delete" onClick={handleDelete}>
        <DeleteSvg />
    </button>
  </div>
  <p className="title">{todo.title}</p>
  <p className="cont">Description</p>
  <p className="description">{todo.description}</p>
  <p className="date">{todo.date}</p>
  
</div>;

if(showEdit){
  content = <ShowEdit onSubmit = {handleSubmit} todo = {todo}/>
}

  return (
    <div className="todos">{content}</div>
  )
}
export default ShowEachTodo;