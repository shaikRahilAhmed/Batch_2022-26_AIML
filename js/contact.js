
// Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        // For demo, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received.\n\nIn a real implementation, this would be sent to a server for processing.`);
        
        // Clear form
        contactForm.reset();
      });
    }
  });
  