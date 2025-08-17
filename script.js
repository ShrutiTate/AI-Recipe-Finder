document.getElementById('search-btn').addEventListener('click', () => {
    const ingredient = document.getElementById('search-input').value.trim();
    const mealResult = document.getElementById('meal-result');
    mealResult.innerHTML = '<p>Loading...</p>'; // Show loading state

    if (ingredient) {
        fetch(`/search?ingredient=${ingredient}`)
            .then(response => response.json())
            .then(data => {
                let html = '';
                if (data.meals) {
                    data.meals.forEach(meal => {
                        html += `
                            <div class="meal-item">
                                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                                <h3>${meal.strMeal}</h3>
                                <button onclick="getRecipe('${meal.idMeal}')">Get Recipe</button>
                            </div>
                        `;
                    });
                } else {
                    html = '<p>No meals found. Try another ingredient!</p>';
                }
                mealResult.innerHTML = html;
            });
    } else {
        mealResult.innerHTML = '<p>Please enter an ingredient.</p>';
    }
});

// Fetch and display the recipe details
function getRecipe(mealId) {
    fetch(`/recipe/${mealId}`)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            const mealDetails = document.getElementById('meal-details');
            mealDetails.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <p>${meal.strInstructions}</p>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <a href="${meal.strYoutube}" target="_blank">Watch Recipe</a>
                <button onclick="closeMealDetails()">Close</button>
            `;
            mealDetails.classList.remove('hidden');
        });
}

// Close the meal details modal
function closeMealDetails() {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.classList.add('hidden');
}

document.addEventListener('click', (e) => {
    if (e.target.id !== 'meal-details' && !document.getElementById('meal-details').contains(e.target)) {
        document.getElementById('meal-details').classList.add('hidden');
    }
});
