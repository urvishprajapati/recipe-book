// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID '${sectionId}' not found.`);
    }
}

// Recipe details popup (example functionality)
function showRecipeDetails(recipeId) {
    const recipe = document.getElementById(recipeId);
    if (recipe) {
        const recipeName = recipe.querySelector('h3') ? recipe.querySelector('h3').textContent : 'Recipe';
        const recipeDescription = recipe.querySelector('.description') ? recipe.querySelector('.description').textContent : 'No description available.';
        const recipeIngredients = recipe.querySelector('.ingredients') ? recipe.querySelector('.ingredients').textContent : 'Ingredients not available.';
        const recipeInstructions = recipe.querySelector('.instructions') ? recipe.querySelector('.instructions').textContent : 'Instructions not available.';

        // Displaying recipe details in an alert or modal (Example)
        alert(`
            Details for ${recipeName}:
            \n\nDescription: ${recipeDescription}
            \n\nIngredients: ${recipeIngredients}
            \n\nInstructions: ${recipeInstructions}
        `);
    } else {
        console.error(`Recipe with ID '${recipeId}' not found.`);
    }
}

// Add event listeners to ensure the functions are only called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Assign click event for all 'View Recipe' buttons
    document.querySelectorAll('.recipe-card button').forEach(button => {
        button.addEventListener('click', (event) => {
            const recipeId = event.target.closest('.recipe-card').id;
            showRecipeDetails(recipeId);
        });
    });

    // Assign click event to the 'Discover Recipes' button
    const discoverButton = document.querySelector('.hero-section button');
    if (discoverButton) {
        discoverButton.addEventListener('click', () => scrollToSection('recipes'));
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from submitting to the server
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Check if all fields are filled
            if (name && email && message) {
                alert(`Thank you, ${name}! We will get back to you soon at ${email}.`);
            } else {
                alert('Please fill out all fields before submitting.');
            }
        });
    }
});
