import React , { Component } from 'react';
class Todo extends Component{
    constructor(){
        super();// this is give tghe conrtrol to  all code or we can say that this is the keyword which is used in the for make the this  global 
        this.state={
            task:[{task:'check mails' , id:1},{task:'read article',id:2},{task:'completed' ,id:3}],
        currtask:''
    }
    }
    handlechange=(e)=>{
//console.log(e.target.value)
        this.setState({
            currtask:e.target.value
        })
//console.log(currtask);

    }
handledelete=(id)=>{
     let narr=this.state.task.filter((taskObj)=>{
        return taskObj.id!=id
     })
     this.setState({
        task:[...narr]
     })
}
handleshumit=()=>{
    this.setState({
        task:[...this.state.task,{task:this.state.currtask,id:this.state.task.length+1}]
   } )
}

    render(){
        return(
            <div>
               <input type="text" value={this.state.currtask} onChange={this.handlechange} ></input>
               <button onClick={this.handleshumit}>submit</button>
             <ul>{  
                this.state.task.map((taskObj)=>(
                  <li  key={taskObj.id}>
                    <p>{taskObj.task}<button onClick={() =>  this.handledelete(taskObj.id)}>delete</button></p>
                    </li>
                ))
               }</ul>
            </div>
        );
    }
}
export const arr=[1,2,3,4,5];
export default Todo;