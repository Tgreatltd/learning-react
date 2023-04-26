import React, { useState } from 'react'

const Todo = () => {
const [todos, settodos] = useState([])
const [task, settask] = useState('')
const [list, setlist] = useState()
function handleTask(e){
settask(e.target.value)
console.log(settask);
}
let show=()=>{
    let li=todos.map((el,i)=><tr key={i}>
    <td align='center'>{el.name}</td>
    <td align='center'>{el.done ?'Completed':'Unfinished'}</td>  
    <td align='center'><button onClick={()=>change(i)}>{el.done?'undo':'done'}</button></td>
</tr>)
setlist(li);
}
function add(){
    todos.push({name:task, done:false})
    show()
    console.log(todos);
}
function change(k){
console.log(k);
console.log(todos[k].done);
if (todos[k].done==false) {
    todos[k].done=true
    
} else{
todos[k].done=false
}
show()
}

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" onInput={handleTask} />
      <button className='' onClick={add}>Add</button>
  <table className='name' border={2}>
    <thead >
        <tr>
            <th align='center'>name</th>
            <th align='center'>status</th>
            <th align='center'>Action</th>
        </tr>
    </thead>
    <tbody>
        {list}
    </tbody>
  </table>
    </div>
  )
}

export default Todo