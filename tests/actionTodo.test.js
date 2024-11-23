import actionTodo from "../app/actionTodo"
import Hashids from "hashids"
test('add todo', () => {
    var hashids = new Hashids("todo", 8),
    id = hashids.encode(Date.now())
    const resAdd = actionTodo(
        {todo : "Làm bài tập",
            id : id
        }, [], "add")
      
        
    expect(resAdd).toEqual([{ todo: "Làm bài tập", id: id }]);
});
test('del todo', () => {
    const listTodo = [{
        todo : "Làm bài tập",
            id : 1
        },
        {
            todo : "Uống thuốc",
                id : 2
        }]
    const resAdd = actionTodo(
        {
            id : 1
        }, listTodo, "del")
     
        
    expect(resAdd).toEqual([ {
        todo : "Uống thuốc",
         id : 2
    }]);
});
test('add todo error', () => {
    expect(() => actionTodo(
        {
            todo : "",
            id : 1
        }, [], "add")).toThrow();
});