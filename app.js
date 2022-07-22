// given the recipes bellow put them all on the HTML page using loops

let recipes = [
    {
        title: "Green Thai Curry",
        time: 30,
        calories:750,
        ingredients: ["350g Chicken Thigh", "1 cup (250ml) chicken or vegetable broth", "14oz coconut milk", "1 - 3 tsp fish sauce", "1 - 3 tsp white sugar ", "1/8 tsp salt", "2 Japanese eggplants or Zuccini", "2 Yukon Potato"]
    },
    {
        title: "Baccon Mac & Cheese",
        time: 40,
        calories: 500,
        ingredients: ["12oz baccon", "2 tablespoons flour", "2 1/2 cups water", "4 cups milk", "16oz short uncooked pasta", "1/2 teaspoon salt", "1/4 teaspoon","garlic powder" ,"1/4 teaspoon onion powder" ,"1/2 teaspoon smoked paprika" ,"1/4 teaspoon pepper" ,"4 cups shredded cheddar cheese" ,"1 tablespoon chopped parsley"]
    },
    {
        title: "Broccoli Pesto Pasta",
        time: 40,
        calories: 690,
        ingredients:["1 lb cooked pasta", "4 cups broccoli florets", "2 cups basil leaves, lightly packed", "2 garlic cloves", "1/4 cup pine nuts", "1 cup extra virgin olive oil", "1/2 tbsp salt", "1 cup Parmigiano-Reggiano, grated"]
    } ,
    {
        title: "Sesame Garlic Ramen Noodles",
        time: 25,
        calories: 380,
        ingredients:["3 Packs instant ramen noodles, flavor packets discarded", "1/4 cup low sodium soy sauce", "1/4 cup oyster sauce", "1 tbsp rice vinegar", "1 tbsp brown sugar, optional", "1/2-1 cup chili sauce", "1/4 cup water", "2 tbsp toasted sesame oil", "3 cloves garlic, minced", "1tbsp freshly grated ginger", "4-6 green onions, thinly sliced", "1 tbsp sesame seeds" ]
    }
]

const recipeDivFactory = (recipeObj) => {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'recipe');
    document.getElementsByClassName('recipes')[0].appendChild(newDiv);

    let newTitle = document.createElement('recipe-title');
    newTitle.setAttribute('class', 'recipe-title');
    newTitle.innerHTML = `<h1>${recipeObj.title}</h1>`;
    newDiv.appendChild(newTitle);

    let newTime = document.createElement('recipe-time');
    newTime.setAttribute('class', 'recipe-time');
    newTime.innerHTML = `<p><span class='time-span'>Time:</span> ${recipeObj.time}</p>`;
    newDiv.appendChild(newTime);

    let newCalories = document.createElement('recipe-calories');
    newCalories.setAttribute('class', 'recipe-calories');
    newCalories.innerHTML = `<p><span class='calories-span'>Calories:</span> ${recipeObj.calories}`;
    newDiv.appendChild(newCalories);

    let newList = document.createElement('ul');
    newList.setAttribute('class', 'recipe-ingredients');
    newDiv.appendChild(newList);

    recipeObj.ingredients.forEach(ingredient => {
        let newIngredient = document.createElement('li');
        newIngredient.setAttribute('class', 'recipe-ingredient');
        newIngredient.innerHTML = ingredient;
        newList.append(newIngredient);
    });
};


console.log('Hello');
recipes.forEach(recipe => recipeDivFactory(recipe));