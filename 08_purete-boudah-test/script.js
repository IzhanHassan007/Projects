document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // You can later send this data to a backend with fetch or AJAX
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const feedback = document.getElementById('feedback').value;
  
    // Log the feedback
    console.log("Feedback submitted:", { name, email, product, feedback });
  
    // Show success message
    const msg = document.getElementById('success-message');
    msg.classList.add('show');
  
    // Reset form
    document.getElementById('feedback-form').reset();
  });
  