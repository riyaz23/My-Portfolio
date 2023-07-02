function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  function submitForm(event) {
    event.preventDefault(); // Prevent form submission and page reload
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
  
    // Display an alert with the form data
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
  
    // Reset the form after displaying the alert
    document.querySelector("form").reset();
  }
    
  // Function to handle actions on the Home page
function handleHome() {
    // Perform actions specific to the Home page
    console.log("Home page actions");
    // Add your code here
  }
  
  // Function to handle actions on the About page
  function handleAbout() {
    // Perform actions specific to the About page
    console.log("About page actions");
    // Add your code here
  }
  
  // Function to handle actions on the Skills page
  function handleSkills() {
    // Perform actions specific to the Skills page
    console.log("Skills page actions");
    // Add your code here
  }
  
  // Function to handle actions on the Courses page
  function handleCourses() {
    // Perform actions specific to the Courses page
    console.log("Courses page actions");
    // Add your code here
  }
  
  // Function to handle actions on the Works page
  function handleWorks() {
    // Perform actions specific to the Works page
    console.log("Works page actions");
    // Add your code here
  }
  
  // Function to handle navigation and call appropriate page functions
  function navigateToPage(page) {
    // Hide all sections
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      section.style.display = "none";
    });
  
    // Show the selected page
    var selectedPage = document.getElementById(page);
    selectedPage.style.display = "block";
  
    // Call the corresponding page function
    switch (page) {
      case "home":
        handleHome();
        break;
      case "about":
        handleAbout();
        break;
      case "skills":
        handleSkills();
        break;
      case "courses":
        handleCourses();
        break;
      case "works":
        handleWorks();
        break;
      default:
        break;
    }
  }
  