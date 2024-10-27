// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(Section with ID '${sectionId}' not found.);
    }
}

// Recipe details popup (example functionality)
function showRecipeDetails(recipeId) {
    const recipe = document.getElementById(recipeId);
    if (recipe) {
        const recipeName = recipe.querySelector('h3') ? recipe.querySelector('h3').textContent : 'Recipe';
        alert(Details for ${recipeName}:\n\nIngredients and instructions will be shown here.);
    } else {
        console.error(Recipe with ID '${recipeId}' not found.);
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
});