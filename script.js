const form = document.getElementById("form");
const input = document.getElementById("input");
const todosList = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));

// This function updates the browser's local storage with the current state of the to-do list
const updateLocalStorage = () => {
    // Get all the list items from the unordered list
    const todosElements = document.querySelectorAll("li");
    // Create an empty array to hold the to-do items
    const todos = [];
    // Loop through each list item and create an object for it with the text content and completion status
    todosElements.forEach((todoElement) => {
        todos.push({
            text: todoElement.innerText,
            completd: todoElement.classList.contains("completed"),
        });
    });
    // Store the array of to-do objects in the browser's local storage as a string
    localStorage.setItem("todos", JSON.stringify(todos));
};

// This function adds a new to-do item to the list
const addTodo = (todo) => {
    // Get the text for the to-do item from the input field
    let todoText = input.value;
    // If a to-do object is passed in, use its text property instead of the input field value
    if (todo) todoText = todo.text;
    // If there is text for the to-do item, create a new list item for it and add it to the list
    if (todoText) {
        const todoElement = document.createElement("li");
        // If the to-do object is completed, add the "completed" class to the list item
        if (todo && todo.completed) {
            todoElement.classList.add("completed");
        }
        // Set the text of the list item to the to-do item text
        todoElement.innerText = todoText;
        // Add click event listener to the list item to toggle its completion status and update local storage
        todoElement.addEventListener("click", () => {
            todoElement.classList.toggle("completed");
            updateLocalStorage();
        });
        // Add contextmenu event listener to the list item to remove it from the list and update local storage
        todoElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoElement.remove();
            updateLocalStorage();
        });
        // Add the new list item to the unordered list
        todosList.appendChild(todoElement);
        // Reset the input field value to an empty string
        input.value = "";
        // Update local storage with the new state of the to-do list
        updateLocalStorage();
    }
};

// If there are existing todos, add them to the list when the page loads
if (todos) {
    todos.forEach((todo) => addTodo(todo));
}

// Attach an event listener to the form element to listen for the "submit" event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addTodo(); // Add a new todo item to the list
});