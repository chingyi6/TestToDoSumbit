// Arrary that store todo list
var todos = [] ;

// Function that can add a task
exports.addTodo = (body) => {
    var newitem = (JSON.parse(body)).name;

    var idTodo = (function(n) {
        return function() {
          n += 1;
          return n;
        }
      }(-1));

    var todo = {
        'id': idTodo,
        'task' : newitem
    }
    
    todos.push(todo);

    return {'code': 201, 'body': todos};
    //console.log(todos)
}

// Function that can remove a designated item from the array

exports.removeTodo = () => {
    if (todos.length > 0 ){
        todos.pop();
        return {'code': 201, 'body': 'Last item remove Success'};
    }
    return {'code': 404, 'body': 'No item exist in the list'};
}

// Function that can list the tasks in the array with the JSON format

exports.listTodo = () => {
    return todos;
}
