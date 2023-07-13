const cardsContainer = document.querySelector('.cards-container')

for ( let i = 0; i < Math.floor(Math.random() * 9) + 1; i++) {
  fetch("https://api.spoonacular.com/recipes/random?apiKey=0adc62c089b94d65bbbd11419bee9e4e")
    .then(response => response.json())
    .then(data => {
      const recipe = data.recipes[0];
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  cardsContainer.appendChild(card);

  const cardFigure = document.createElement('figure');
  const cardFigureImage = document.createElement('img');
  cardFigureImage.setAttribute('src', recipe.image);
  cardFigureImage.setAttribute('alt', recipe.title);
  cardFigure.appendChild(cardFigureImage);
  card.appendChild(cardFigure);

  const cardFigcaptionName = document.createElement('figcaption');
  cardFigcaptionName.setAttribute('class', 'recipe-name');
  cardFigcaptionName.textContent = recipe.title;
  card.appendChild(cardFigcaptionName);
  
  const recipeIngListTitle = document.createElement('h4');
  recipeIngListTitle.setAttribute('class', 'list-title')
  recipeIngListTitle.textContent = 'Ingredients:';
  card.appendChild(recipeIngListTitle);

  const recipeList = document.createElement('ul');
  recipeList.setAttribute('class', 'list');
  card.appendChild(recipeList);

  recipe.extendedIngredients.forEach((ingredient) => {
    const ingredientLi = document.createElement('li');
    ingredientLi.textContent = ingredient.original;
    recipeList.appendChild(ingredientLi);
  });

  const actionButton = document.createElement('button');
  actionButton.setAttribute('class', 'action-btn');
  actionButton.textContent = 'VIEW RECIPE';
  actionButton.addEventListener('click', () => {
    window.open(recipe.sourceUrl, '_blank');
  });
  card.appendChild(actionButton);
  
  card.style.display = 'flex';
  })
  .catch(error => alert(error));
}