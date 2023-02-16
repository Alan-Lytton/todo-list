import React, {useState} from "react";
export const handleTodo= (todoItem, completed) =>{
    return{
        todoItem: todoItem,
        completed: completed
    }
}
const Todo = (props) => {
    const {todoList,setTodoList} = props;
    const [todo,setTodo] = useState("");
    const addTodo = (t) => {
        t.preventDefault();
        setTodoList([...todoList, handleTodo(todo,false)]);
        setTodo("");
    }

    const selectTodo = (t) => {
        setTodo(t.target.value)
    }

    return (
        <div className="APP">
            <h1 className="mt-2">Todo List</h1>
            <form onSubmit={addTodo}>
                <input type="text" name="todo" placeholder="What to do?" value={todo} onChange={selectTodo}/>
                <input type="submit" value="Add" className="btn btn-primary ms-3"/>
            </form>
        </div>
    )
}

export default Todo