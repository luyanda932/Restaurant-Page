const context = import.meta.webpackContext("../images", {
  recursive: false,
  regExp: /\.(png|jpe?g|svg|webp|avif)$/,
});

const images = {};

for (const key of context.keys()) {
  images[key.replace("./", "")] = context(key);
}

export default function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const subHeading = document.createElement("h3");
  subHeading.textContent = "Our Menu";
  subHeading.classList.add("sub-heading");
  menuSection.appendChild(subHeading);

  content.appendChild(subHeading);

  const burgersHeading = document.createElement("h2");
  burgersHeading.classList.add("heading");
  burgersHeading.textContent = "Burgers";

  const burgerItems = [
    {
      name: "Cheeseburger Meal",
      price: "$7.99",
      description:
        "A classic cheeseburger with lettuce, tomato, and our special sauce with fries and a drink.",
      image: "cheeseburger-2.jpg",
    },
    {
      name: "Double Cheeseburger Meal",
      price: "$9.99",
      description:
        "A double cheeseburger with lettuce, tomato, and our special sauce.",
      image: "double-cheeseburger.jpg",
    },
    {
      name: "Chicken Burger Meal",
      price: "$6.99",
      description:
        "A juicy chicken burger with lettuce, tomato, and our special sauce.",
      image: "chicken-burger-4.avif",
    },
    {
      name: "Double Chicken Burger Meal",
      price: "$8.99",
      description:
        "A double chicken burger with lettuce, tomato, and our special sauce.",
      image: "double-chicken-burger.webp",
    },
  ];
  const burgerDiv = createDiv(burgerItems);
  menuSection.appendChild(burgersHeading);
  menuSection.appendChild(burgerDiv);

  const sidesHeading = document.createElement("h2");
  sidesHeading.textContent = "Sides";
  sidesHeading.classList.add("heading");
  const sideItems = [
    {
      name: "French Fries",
      price: "$1.49",
      description: "Crispy golden french fries.",
      image: "french-fries.jpg",
    },
    {
      name: "Onion Rings",
      price: "$0.99",
      description: "Crispy onion rings.",
      image: "onion-rings.jpg",
    },
    {
      name: "Loaded Fries",
      price: "$1.49",
      description:
        "Crispy golden fries loaded with cheese, grilled onions, and our special sauces.",
      image: "cheese-fries.png",
    },
    {
      name: "Chicken Nuggets",
      price: "$1.49",
      description: "6 fried and crispy chicken nuggets.",
      image: "chicken-nuggets-2.jpg",
    },
  ];
  const sidesDiv = createDiv(sideItems);
  menuSection.appendChild(sidesHeading);
  menuSection.appendChild(sidesDiv);

  const dessertsHeading = document.createElement("h2");
  dessertsHeading.textContent = "Desserts";
  dessertsHeading.classList.add("heading");
  const dessertItems = [
    {
      name: "Ice Cream",
      price: "$0.99",
      description: "Creamy vanilla ice cream.",
      image: "sundae.png",
    },
    {
      name: "Oreo Ice Cream",
      price: "$1.99",
      description: "Delicious Oreo ice cream.",
      image: "oreo-ice-cream.jpg",
    },
    {
      name: "Blueberry Muffin",
      price: "$1.99",
      description: "Tasty blueberry muffin.",
      image: "muffin.jpg",
    },
  ];
  const dessertsDiv = createDiv(dessertItems);
  menuSection.appendChild(dessertsHeading);
  menuSection.appendChild(dessertsDiv);

  const drinksHeading = document.createElement("h2");
  drinksHeading.textContent = "Drinks";
  drinksHeading.classList.add("heading");
  const drinkItems = [
    {
      name: "Coca-Cola",
      price: "$1.49",
      description: "Refreshing Coca-Cola.",
      image: "coca-cola.jpg",
    },
    {
      name: "Sprite",
      price: "$1.49",
      description: "Refreshing Sprite.",
      image: "sprite.avif",
    },
    {
      name: "Fanta Orange",
      price: "$1.49",
      description: "Refreshing Fanta Orange.",
      image: "fanta.png",
    },
    {
      name: "Vanilla Milkshake",
      price: "$2.49",
      description: "Creamy vanilla milkshake.",
      image: "vanilla-milkshake.jpg",
    },
    {
      name: "Chocolate Milkshake",
      price: "$2.49",
      description: "Rich chocolate milkshake.",
      image: "chocolate-milkshake.avif",
    },
    {
      name: "Strawberry Milkshake",
      price: "$2.49",
      description: "Sweet strawberry milkshake.",
      image: "strawberry-milkshake.jpg",
    },
  ];
  const drinksDiv = createDiv(drinkItems);
  menuSection.appendChild(drinksHeading);
  menuSection.appendChild(drinksDiv);

  content.appendChild(menuSection);
}

function createDiv(items) {
  const div = document.createElement("div");
  div.classList.add("menu-items");
  for (let i = 0; i < items.length; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    const image = document.createElement("img");
    console.log(images[items[i].image]);
    image.src = images[items[i].image];
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    const name = document.createElement("h3");
    name.textContent = items[i].name;
    const description = document.createElement("p");
    description.textContent = items[i].description;
    const addToCart = document.createElement("a");
    addToCart.classList.add("btn");
    addToCart.textContent = "Add to Cart";
    addToCart.href = "#";
    const price = document.createElement("span");
    price.textContent = items[i].price;

    imageDiv.appendChild(image);
    contentDiv.appendChild(name);
    contentDiv.appendChild(description);
    contentDiv.appendChild(addToCart);
    contentDiv.appendChild(price);
    itemDiv.appendChild(imageDiv);
    itemDiv.appendChild(contentDiv);
    div.appendChild(itemDiv);
  }
  return div;
}
