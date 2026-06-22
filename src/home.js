import image1 from "../images/cheeseburger-2.jpg";
import image2 from "../images/double-cheeseburger.jpg";
import image3 from "../images/chicken-burger.jpg";
import image4 from "../images/beef-burrito-2.webp";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function loadHome() {
  const content = document.getElementById("content");

  const homeSection = document.createElement("section");

  const container = document.createElement("div");
  container.classList.add("swiper");
  container.classList.add("home-slider");

  const wrapper = document.createElement("div");
  wrapper.classList.add("swiper-wrapper");
  wrapper.classList.add("wrapper");

  const swiperPagination = document.createElement("div");
  swiperPagination.classList.add("swiper-pagination");

  let slideContent = [
    "Cheeseburger Meal",
    "A classic cheeseburger with lettuce, tomato, cheese and our special sauce served with fries and a drink.",
    image1,
  ];
  const slideDiv1 = createSlide(...slideContent);

  slideContent = [
    "Double Cheeseburger Meal",
    "A double cheeseburger with lettuce, tomato, cheese, and our special sauce served with fries and a drink.",
    image2,
  ];
  const slideDiv2 = createSlide(...slideContent);

  slideContent = [
    "Chicken Burger Meal",
    "A juicy chicken burger with lettuce, tomato, cheese, and our special sauce served with fries and a drink.",
    image3,
  ];
  const slideDiv3 = createSlide(...slideContent);

  const dishesSection = document.createElement("section");
  dishesSection.classList.add("dishes");

  const h3 = document.createElement("h3");
  h3.textContent = "Our Dishes";
  h3.classList.add("sub-heading");
  const h1 = document.createElement("h1");
  h1.textContent = "Popular Dishes";
  h1.classList.add("heading");
  dishesSection.append(h3);
  dishesSection.append(h1);
  const dishesContainer = document.createElement("div");
  dishesContainer.classList.add("dishes-container");
  
  const card1 = createDishesCard(image1, "Cheeseburger Meal", "$7.99");
  const card2 = createDishesCard(image3, "Chicken Burger Meal", "$6.99");
  const card3 = createDishesCard(image4, "Beef Burrito Meal", "$6.99");

  dishesContainer.appendChild(card1);
  dishesContainer.appendChild(card2);
  dishesContainer.appendChild(card3);
  dishesSection.appendChild(dishesContainer);

  wrapper.appendChild(slideDiv1);
  wrapper.appendChild(slideDiv2);
  wrapper.appendChild(slideDiv3);

  container.appendChild(wrapper);
  container.appendChild(swiperPagination);
  homeSection.appendChild(container);
  content.appendChild(homeSection);
  content.appendChild(dishesSection);

  // Initialize AFTER adding to the DOM
  const swiper = new Swiper(".home-slider", {
    modules: [Pagination, Navigation],

    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
}

function createSlide(item, description, img) {
  const div = document.createElement("div");
  div.classList.add("swiper-slide");
  div.classList.add("slide");
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("slide-content");
  const span = document.createElement("span");
  span.textContent = "Our Special Offers";
  const h3 = document.createElement("h3");
  h3.textContent = item;
  const p = document.createElement("p");
  p.textContent = description;
  const a = document.createElement("a");
  a.classList.add("btn");
  a.textContent = "Order Now";
  a.href = "#";
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  const slideImage = document.createElement("img");
  slideImage.src = img;
  contentDiv.appendChild(span);
  contentDiv.appendChild(h3);
  contentDiv.appendChild(p);
  contentDiv.appendChild(a);
  imageDiv.appendChild(slideImage);
  div.appendChild(contentDiv);
  div.appendChild(imageDiv);
  return div;
}

function createDishesCard(img, item, price) {
  const div = document.createElement("div");
  div.classList.add("dishes-card");
  const image = document.createElement("img");
  image.src = img;
  const name = document.createElement("h3");
  name.textContent = item;
  const itemPrice = document.createElement("span"); 
  itemPrice.textContent = price;
  const button = document.createElement("a");
  button.classList.add("btn");
  button.textContent = "Add to Cart";
  button.href = "#";
  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(itemPrice);
  div.appendChild(button);
  return div;
}
