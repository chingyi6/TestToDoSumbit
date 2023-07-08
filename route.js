const todo = request('./todo');

// "list" End Point
exports.get = (route) => {
    switch(route){
        case "list":
            return { 'code': 200, 'body': todo.listTodo()};
        default:
            return { 'code':400, 'body': 'Bad Request' }
    }
}

// "add" End Point
exports.post = (route, body) => {
    switch(route) {
        case "add": 
            return todo.addTodo(body);
           // break;
        default:
            return { 'code':400, 'body': 'Bad Request' }
    }
}

// "remove" End Point
exports.put = (route) => {
    switch(route){
        case "remove":
            return todo.removeTodo();
        default:
            return { 'code':400, 'body': 'Bad Request' }  
    }
}
