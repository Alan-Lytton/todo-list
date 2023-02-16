import React from "react";
import todo from "./Todo";

const Show = (props) => {
    const {todoList,setTodoList} = props;



    const updateItem = (i) =>{
        const isChecked = todoList.map((item,index) => {
            if(i === index){
                item.completed = !item.completed
            }
            return item;
        })
        setTodoList(isChecked);
    }

    return (
        <div className="APP d-flex flex-column mt-4">
            {
                todoList.map((item,index) =>(
                            <div key={index} className="d-flex justify-content-center align-items-center">
                                <p className={`me-3 fs-3 ${item.completed ? "text-decoration-line-through":""}`}>{item.todoItem}</p>
                                <form>
                                    <input type="checkbox" className="me-3" value={item.completed} onChange={()=>updateItem(index)} />
                                    <input type="submit" value="DELETE" className="btn btn-danger"/>
                                </form>
                            </div>
                        ))
            }
        </div>
    )
}

export default Show