**To-Do List Application**
A fully functional to-do list application built with vanilla JavaScript, HTML, and CSS. This project demonstrates DOM manipulation, event handling, and local storage persistence without any external libraries or frameworks.

**Project Overview**
This to-do list application allows users to manage their daily tasks efficiently. Users can add tasks, mark them as complete, delete them, and filter tasks by status. All data persists across browser sessions using the browser's localStorage API.

Live Demo: https://github.com/TefoKomane/tefo_komane_to_do_list.git

**Features**

• Add Tasks: Enter a task and click "Add" to add it to your list

• Mark Complete: Click "Complete" to mark a task as done (shows "Undo" when completed)

• Delete Tasks: Remove tasks permanently from your list

• Filter by Status: View all tasks, only active tasks, or only completed tasks

• Data Persistence: Tasks are saved to localStorage and persist even after page refresh

• Responsive Design: Works seamlessly on desktop and mobile devices

• Empty State: Displays "No tasks available" when the current filter has no tasks

**Technologies Used**
• HTML5: Semantic markup and structure

• CSS3: Styling and responsive design

• Vanilla JavaScript: DOM manipulation, event handling, and localStorage

• MDN Documentation: Only resource used for learning and implementation

**Project Structure**

**Plain Text**

tefo_komane_to_do_list/
├── index.html          # HTML structure
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file



**Using the Application**
1. Add a Task:

• Type your task in the input field

• Click the "Add" button or press Enter

• Task appears in the list



2. Mark Task Complete:

• Click "Complete" next to a task

• Task text becomes strikethrough and faded

• Button changes to "Undo" to reverse the action



3. Delete a Task:

• Click "Delete" next to a task

• Task is permanently removed from the list



4. Filter Tasks:

• Click "All" to see all tasks

• Click "Active" to see only incomplete tasks

• Click "Completed" to see only finished tasks

• Active filter button is highlighted in black



5. Data Persistence:

• Refresh the page or close the browser

• Your tasks are automatically saved and restored



**Code Highlights**
DOM Selection (querySelector )

JavaScript


const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const filterBtns = document.querySelectorAll(".filter-btn");



Creating Elements Dynamically (createElement)

JavaScript


let li = document.createElement("li");
let taskText = document.createElement("span");
let completeBtn = document.createElement("button");



Event Handling (addEventListener)

JavaScript


addBtn.addEventListener("click", function(){
    // Add task logic
});

completeBtn.addEventListener("click", function(){
    // Toggle complete status
});



Data Persistence (localStorage)

JavaScript


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



**MDN Resources Used**

This project was built using only MDN (Mozilla Developer Network) documentation:

• querySelector() - Selecting HTML elements from JavaScript

• createElement() - Creating new HTML elements dynamically

• addEventListener() - Handling user interactions (clicks, input)

• localStorage - Persisting data across browser sessions

• JSON.stringify() & JSON.parse() - Converting objects to/from JSON

• Array.filter() - Filtering tasks by status

• classList - Managing CSS classes for styling

• DOMContentLoaded - Running code after page loads

**Learning Outcomes**

Key Concepts Learned

1. DOM Manipulation: Creating, selecting, and modifying HTML elements from JavaScript

2. Event Handling: Responding to user actions like clicks and input

3. Data Persistence: Using localStorage to save and retrieve data

4. Array Methods: Using filter() to categorize tasks

5. Object-Oriented Thinking: Structuring tasks as objects with properties

6. State Management: Managing application state (tasks array, current filter)

**MDN Documentation Reflection**

The MDN documentation pages were invaluable for this project. The querySelector() documentation helped me understand how to select HTML elements and connect JavaScript to the page. The createElement() page showed me how new task items can be created directly from JavaScript instead of writing them manually in HTML. The addEventListener() documentation was crucial for understanding how button clicks trigger actions such as adding, completing, and deleting tasks. The localStorage documentation was particularly useful because it demonstrated how data can remain available even after refreshing the page. Reading the MDN examples helped me understand how the DOM works and how JavaScript interacts with HTML elements to make the application functional and interactive.

**Design Features**

• Dark Theme: Dark background with white content container for reduced eye strain

• Clean Interface: Minimalist design focusing on usability

• Visual Feedback: Completed tasks show visual distinction (strikethrough, reduced opacity)

• Active Filter Indicator: Current filter is highlighted in black

• Hover Effects: Buttons provide visual feedback on hover

• Responsive Layout: Adapts to mobile screens with stacked input and adjusted spacing

**Browser Compatibility**

• Chrome (latest)

• Firefox (latest)

• Safari (latest)

• Edge (latest)

• Mobile browsers (iOS Safari, Chrome Mobile)

**Technical Details**

Data Structure

Tasks are stored as objects with the following structure:

JavaScript


{
    id: 1234567890,        // Unique timestamp-based ID
    text: "Task description",
    completed: false       // Boolean status
}



Filter Logic

• All: Shows all tasks in the array

• Active: Filters tasks where completed === false

• Completed: Filters tasks where completed === true

State Management

• tasks array: Stores all task objects

• currentFilter string: Tracks which filter is active

• localStorage: Persists tasks array as JSON string

Deployment

This project is deployed on GitHub Pages. To deploy your own version:

1. Push your code to GitHub

2. Go to repository Settings → Pages

3. Select "Deploy from a branch"

4. Choose "main" branch

5. Wait 2-5 minutes for deployment

6.Your site will be available at https://yourusername.github.io/repository-name/

Future Enhancements

Possible improvements for future versions:

• Add task due dates and priority levels

• Implement task categories or tags

• Add dark mode toggle

• Create task edit functionality

• Add animations for better UX

• Implement task search functionality

• Add keyboard shortcuts

**License**

This project is open source and available for educational purposes.

Author

Tefo Karabo Komane

• GitHub: @TefoKomane

• Programme: ZAIO and iHub Africa Full-stack Web Development Programme

• Block: Block 1 — Week 5

**Support**
For questions or issues, please open an issue on the GitHub repository or contact the author.




Last Updated: June 2026
Version: 1.0

