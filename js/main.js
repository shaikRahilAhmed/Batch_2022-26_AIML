
// Main JavaScript for AIML Department Website

// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  }
  
  // Tab functionality for memories page
  function openTab(evt, tabName) {
    // Don't execute if we're not on the memories page
    if (!document.getElementById(tabName)) return;
    
    // Hide all tab content
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }
    
    // Remove "active" class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
    
    // Show the selected tab and mark the button as active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  // Close sidebar when clicking outside of it
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('mySidebar');
    const sidebarButton = document.querySelector('nav button');
    
    // If sidebar is open and click is outside sidebar and not on the toggle button
    if (sidebar && 
        sidebar.style.width === '250px' && 
        !sidebar.contains(event.target) && 
        event.target !== sidebarButton) {
      sidebar.style.width = '0';
    }
  });
  