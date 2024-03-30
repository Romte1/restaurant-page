const createMenuPage = () => {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const beverages = document.createElement('h2');
    const beveragesOptions = document.createElement('p');
    const dishes = document.createElement('h2');
    const dishesOptions = document.createElement('p');

    title.textContent = 'Menu';
    beverages.textContent = 'Beverages';
    beveragesOptions.innerHTML = `
<div class="section">
  <h3>Hot Beverages:</h3>
  <ul>
    <li>Coffee</li>
    <ul>
      <li>Espresso: $2.50</li>
      <li>Cappuccino: $3.00</li>
      <li>Latte: $3.50</li>
      <li>Mocha: $4.00</li>
    </ul>
    <li>Tea</li>
    <ul>
      <li>English Breakfast: $2.00</li>
      <li>Earl Grey: $2.00</li>
      <li>Green Tea: $2.00</li>
      <li>Chai Latte: $3.50</li>
    </ul>
    <li>Hot Chocolate</li>
    <ul>
      <li>Classic Hot Chocolate: $3.50</li>
      <li>White Hot Chocolate: $4.00</li>
      <li>Mexican Hot Chocolate: $4.50</li>
    </ul>
  </ul>
</div>

<div class="section">
  <h3>Cold Beverages:</h3>
  <ul>
    <li>Iced Coffees</li>
    <ul>
      <li>Iced Coffee: $3.00</li>
      <li>Iced Latte: $3.50</li>
      <li>Iced Mocha: $4.00</li>
    </ul>
    <li>Iced Teas</li>
    <ul>
      <li>Classic Iced Tea: $2.00</li>
      <li>Green Iced Tea: $2.00</li>
      <li>Fruit Infused Iced Tea: $3.00</li>
    </ul>
    <li>Smoothies</li>
    <ul>
      <li>Berry Blast: $4.00</li>
      <li>Tropical Paradise: $4.50</li>
      <li>Green Goddess: $4.50</li>
      <li>Protein Power: $5.00</li>
    </ul>
  </ul>
</div>`;
    dishes.textContent = 'Dishes';
    dishesOptions.innerHTML = `
    <div class="section">
      <h3>Appetizers:</h3>
      <ul>
        <li>Soup of the Day - $5.99</li>
        <li>Garden Salad - Mixed greens, tomatoes, cucumbers, balsamic vinaigrette - $6.99</li>
        <li>Garlic Bread - Toasted baguette with garlic butter - $4.99</li>
      </ul>
    </div>
    <div class="section">
      <h3>Main Courses:</h3>
      <ul>
        <li>Grilled Chicken Breast - Served with steamed vegetables and choice of side - $10.99</li>
        <li>Spaghetti Bolognese - Homemade meat sauce, served with garlic bread - $12.99</li>
        <li>Vegetarian Stir-Fry - Assorted vegetables stir-fried in a savory sauce, served with rice - $11.99</li>
      </ul>
    </div>

    `;

    content.appendChild(title);
    content.appendChild(beverages);
    content.appendChild(beveragesOptions);
    content.appendChild(dishes);
    content.appendChild(dishesOptions);


}
export default createMenuPage;