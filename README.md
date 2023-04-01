# To-Do-Manager
To do manager that manages users tasks. It has animated interface which is very helpful to interact with user. Credit: https://codewithcurious.com/projects/to-do-manager/

Introduction:
This Projects is about a To do manager that manages users tasks. It has animated interface which is very helpful to interact with user.It is created by using the latest tech stacks i.e. HTML5 , CSS3  and JavaScript(ES6)The logic used to create this project no too much difficult One who has basic understanding of JavaScript and familiar with JS Functions concept can understand in easy manner.You can customize this project’s animation as well as logic as per requirement. Its one of the major project you can use for your personal use as well as to present in your college.

JS Explanation:
Code for a simple to-do list web application. It has the following functionalities:

1. It fetches the necessary elements from the DOM using their respective IDs: the form, the input field, and the unordered list (ul) where the to-do items will be appended.

2. It retrieves the to-do items from the browser's local storage using the "localStorage.getItem()" method and stores them in an array called "todos".

3. It defines a function "updateLocalStorage()" that gets called every time a to-do item is added, removed, or marked as completed. This function retrieves all the list items (li) from the unordered list, loops through them and creates an object for each one containing the text content and a boolean value indicating whether it is completed or not. The array of these objects is then stringified and stored in the browser's local storage using the "localStorage.setItem()" method.

4. It defines a function "addTodo()" that takes an optional argument called "todo". This function creates a new list item and appends it to the unordered list. If the "todo" argument is passed, it sets the text content of the new list item to the "text" property of the "todo" object. If the "todo" object has a "completed" property set to true, it adds the "completed" class to the new list item. It also adds event listeners to the new list item for toggling the "completed" class and removing the item when right-clicked.

5. If there are to-do items stored in the browser's local storage, the "forEach()" method is used to loop through them and call the "addTodo()" function for each one to append it to the unordered list.

6. An event listener is added to the form that listens for a "submit" event. When the form is submitted, it calls the "addTodo()" function without any argument, which creates a new list item and appends it to the unordered list using the text content entered in the input field.
