const  actionTodo = (todo, listTodo, action) => {
    let todos = listTodo
    if(action === "add"){
        if(!todo || todo.todo === "") {
            throw new Error('Vui lòng nhập việc làm')
           
        }
        todos.push(todo)
    }
    else if (action === "del"){
        todos = listTodo.filter(e => e.id !== todo.id)
    }
   
    return todos
}
export default actionTodo