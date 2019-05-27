var Todo = /** @class */ (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    TodoList.allTodos = new Array();
    return TodoList;
}());
window.onload = function () {
    var name = document.getElementById("todoName");
    var description = document.getElementById("todoDescription");
    document.getElementById('add').addEventListener('click', function () { return toAlltask(name.value, description.value); });
};
function toAlltask(task, description) {
    var todo = new TodoList();
    // Adds the task to list
    todo.createTodoItem(task, description);
    //Fetch the updated list and create a list item for UI
    var div = document.getElementById('todoList');
    var list = "<dl class = 'd1-horizontal'>";
    for (var index = 0; index < TodoList.allTodos.length; index++) {
        list = list + "<dt>" + TodoList.allTodos[index].name + '</dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    list += "</dl>";
    div.innerHTML = list;
    //Casting
    document.getElementById("TodoName").value = "";
    document.getElementById("TodoDescription").value = "";
}
