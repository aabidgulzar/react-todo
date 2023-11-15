import ShowEachTodo from './ShowEachTodo'

function ShowTodo({tasks,deleteTodo,editTodo}) {
  const displayTasks = tasks.map((task)=>{
    return <ShowEachTodo todo = {task} key={task.id} deleteTodo={deleteTodo} editTodo={editTodo}/>
  })
  return (
   <div key={tasks.id} className='todolist'>
    {displayTasks}
   </div>
  )
}
export default ShowTodo;