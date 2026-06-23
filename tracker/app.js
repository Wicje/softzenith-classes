//for our tracker
// ==========================================
// 1. VARIABLES & STRINGS
// ==========================================
const studioName = "Overhorizon Studios";
let totalProjectCount = 0; 

// ==========================================
// 2. CLASSES & OBJECTS
// ==========================================
// A Blueprint for creating "Media Project" objects
class MediaProject {
  constructor(id, title, type, status) {
    this.id = id;
    this.title = title;
    this.type = type; // e.g., "Film", "Photography", "Branding", "Photoshoot"
    this.status = status; // e.g., "In Progress", "Completed", "not started"
  }

  //A method update our class
  updateStatus(newstatue) {
this.status = newsStatue;
  }

  //Array 
  const projectList = [
new mediaProject{1, "X-men:Days of Future past", "In Progress"},
    new mediaProject{2, "Jumanji", "Completed"},
  ];

//update our array property(.length)
  totalProjectCount = projectList.length;


  //Functions
  function addNewProject (title, status = "Not Started"){
//increasing project variable 
    totalProjectCount++;
    const newId = totalProjectCount;

    //create a new instance(object)
    const project = new mediaProject(newId, title, type, status);

    projectList.push();

    //refresh project
    renderProjects();
  }

  // ==========================================
// 5. DOM MANIPULATION (The Magic)
// ==========================================
function renderProjects() {
  // Grab the container element from the HTML
  const container = document.getElementById("project-container");
  
  // Clear out whatever was inside it previously
  container.innerHTML = "";

  // ARRAY METHOD: .forEach() loops through every project object in our array
  projectList.forEach((project) => {
    // DOM: Create a new <div> element dynamically
    const projectCard = document.createElement("div");
    projectCard.className = `project-card ${project.status.toLowerCase().replace(" ", "-")}`;

    // DOM: Populate the inner HTML of the card with object data
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p><strong>Type:</strong> ${project.type}</p>
      <p><strong>Status:</strong> <span class="status-badge">${project.status}</span></p>
      <button onclick="toggleProjectStatus(${project.id})">Toggle Status</button>
    `;

// DOM: Append the new card into our main container
    container.appendChild(projectCard);
  });
}

// Function to handle clicking the "Toggle Status" button
function toggleProjectStatus(id) {
  // ARRAY METHOD: .find() looks for the project object with the matching ID
  const foundProject = projectList.find(p => p.id === id);
  
  if (foundProject) {
    // Calling the OBJECT METHOD we defined in our class
    const nextStatus = foundProject.status === "In Progress" ? "Completed" : "In Progress";
    foundProject.updateStatus(nextStatus);
    
    // Re-render the UI to show the updated status
    renderProjects();
  }
}

// ==========================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================
// Wait for the browser HTML to load, then run our initial render
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  // DOM: Handle the form submission to add a new project
  const form = document.getElementById("project-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop the page from refreshing on submit
    
    // DOM: Grab values from the input fields
    const titleInput = document.getElementById("proj-title").value;
    const typeInput = document.getElementById("proj-type").value;

    if (titleInput.trim() !== "") {
      // Call our function to handle logic
      addNewProject(titleInput, typeInput);
      
      // Clear the form input
      form.reset();
    }
  });
});
