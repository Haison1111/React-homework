
var Count = 0;

const Checkcount = () =>{
   if (document.getElementsByClassName("check-box").checked == true){
    Count ++
   } else {
     Count --
   }
}


const Todolist = (props) => {
   return(  
       <div className="list">
       <input type="checkbox" className="check-box" value={props.item} onChange={Checkcount()} ></input>
       <label className="list-item"> {props.item} </label>
     </div>
   )
}

export default Todolist
export {Count}