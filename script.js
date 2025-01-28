// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  
      // Update active class
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Contact form submission alert
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
  });

  // JavaScript to show the loader
function showLoader(event, link) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Show the loader
    document.getElementById('loader').style.display = 'flex';

    // Simulate loading by delaying navigation
    setTimeout(function() {
        window.location.href = link; // Redirect to the project link after the delay
    }, 2000); // 2-second delay (you can adjust this as per your preference)
}

// function toggleNavbar() {
//   const navbar = document.querySelector('.navbar');
//   navbar.classList.toggle('open'); // Toggle 'open' class to show/hide the navbar items
// }
// Toggle the navbar when the hamburger button is clicked
function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open'); // Toggle the 'open' class to show/hide the navbar items
}

