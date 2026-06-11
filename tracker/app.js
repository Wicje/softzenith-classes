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
  function addNewProject (title, type, status = "Not Started"){
//increasing project variable 
    totalProjectCount++;
    const newId = totalProjectCount;

    //create a new instance(object)
    const project = new mediaProject(newId, title, type, status);

    projectList.push////where we stopped
  }
