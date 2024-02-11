function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // JavaScript code will be added here

        // Get the comments container and the form elements
        const commentsContainer = document.getElementById('comments');
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');
    
        // Function to display a comment
        function displayComment(comment) {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <h4>${comment.name}:</h4>
                <p>${comment.comment}</p>
            `;
            commentsContainer.appendChild(commentElement);
        }
    
        // Function to submit a comment
        function submitComment(event) {
            event.preventDefault();
    
            // Get the user input
            const name = nameInput.value;
            const comment = commentInput.value;
    
            // Create a new comment object
            const newComment = { name, comment };
    
            // Display the new comment
            displayComment(newComment);
    
            // Clear the form inputs
            nameInput.value = '';
            commentInput.value = '';
        }
    
        // Add an event listener to the form to handle submission
        document.getElementById('comment-form').addEventListener('submit', submitComment);
    
        // Display any existing comments from local storage
        const existingComments = JSON.parse(localStorage.getItem('comments')) || [];
        existingComments.forEach(displayComment);
    
        // Store new comments in local storage
        function storeComments() {
            localStorage.setItem('comments', JSON.stringify(existingComments));
        }
    
        // Update the existingComments array and store it when a new comment is added
        function updateComments() {
            existingComments.push(newComment);
            storeComments();
        }
    
        // Call updateComments when a new comment is submitted
        submitComment.updateComments = updateComments;