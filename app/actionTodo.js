const  actionTodo = (todo, listTodo, action) => {
    let todos = listTodo
    if(action === "add"){
        if(todo.todo === "") {
            throw new Error('div 0')
           
        }
        todos.push(todo)
    }
    else if (action === "del"){
        todos = listTodo.filter(e => e.id !== todo.id)
    }
   
    
    return todos
}
export default actionTodo