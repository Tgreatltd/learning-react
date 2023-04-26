import { useState } from "react";


const List = () => {
const [ar, setAr] = useState(['tobi', 'tola','toba'])
const [value, setValue] = useState('');
const [list, setList] = useState(ar.map((el,i)=> <h1 key={i}>{i+1}.{el} <button onClick={( )=>change(i)}>delete</button></h1>))
const handleBox=(e)=>{
setValue(e.target.value)
}
const add =(e)=>{
 ar.push(value)
 setAr([...ar])
 setList(ar.map((el,i)=> <h1 key={i}>{i+1}.{el} <button onClick={()=>change(i)}>delete</button></h1>))
}
// const change=(k)=>{
// ar.splice(k,1)
// add()
// }
function change(r){
console.log(r);
ar.splice(r,1)
setAr([...ar])
setList(ar.map((el,i)=> <h1 key={i}>{i+1}.{el} <button onClick={()=>change(i)}>delete</button></h1>))

}
  return (
    <div> 
       <input type="text" name="todo" onInput={handleBox} />
       <button onClick={add}>Add</button>
       
       <h1 className="card p-5 mt-5 shadow">{list}</h1>
    </div>
  )
}

export default List