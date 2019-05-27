interface ITodo {
    name:string;
    description: string;
    completed: boolean;
}

class Todo implements ITodo {
    public name: string;
    public description: string;
    public completed: boolean;

    constructor(name: string, description: string, completed: boolean) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }

}

class TodoList {
    public static allTodos: Todo[] = new Array()

    createTodoItem(name: string, description: string):number {

        let newItem = new Todo(name, description, false);
        let totalCount: number = TodoList.allTodos.push(newItem);

        return totalCount;

    }

    allTodoItems():Todo[] {
        return TodoList.allTodos;
    }
}

window.onload = function() {
    let name = <HTMLInputElement>document.getElementById("todoName");
    let description = <HTMLInputElement>document.getElementById("todoDescription");
    document.getElementById('add').addEventListener('click', ()=>toAlltask(name.value, description.value))
}

function toAlltask(task: string, description: string){

    let todo = new TodoList();
    // Adds the task to list
    todo.createTodoItem(task, description);

    //Fetch the updated list and create a list item for UI
    let div = <HTMLDivElement>document.getElementById('todoList');
    let list = "<dl class = 'd1-horizontal'>";

    for (let index=0; index<TodoList.allTodos.length; index++) {
        list = list + "<dt>" + TodoList.allTodos[index].name +'</dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    list += "</dl>"
    div.innerHTML = list;

    //Casting
    (<HTMLInputElement>document.getElementById("TodoName")).value = "";
    (<HTMLInputElement>document.getElementById("TodoDescription")).value = "";

}

