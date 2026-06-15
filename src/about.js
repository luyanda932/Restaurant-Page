import image1 from "../images/cheeseburger-2.jpg";

export default function loadAbout() {
  // main section
  const section = document.createElement("section");
  section.classList.add("about");

  // subheading and heading
  const sectionSubHeading = document.createElement("h3");
  sectionSubHeading.textContent = "About Us";
  sectionSubHeading.classList.add("sub-heading");
  const sectionHeading = document.createElement("h1");
  sectionHeading.textContent = "Why Choose Us?";
  sectionHeading.classList.add("heading");

  // appending subheading and heading to section
  section.appendChild(sectionSubHeading);
  section.appendChild(sectionHeading);

  // main div
  const div = document.createElement("div");
  div.classList.add("row");

  // image div
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("image");
  const img = document.createElement("img"); // image
  img.src = image1;
  imgDiv.appendChild(img); // appending image to image div
  div.appendChild(imgDiv); // appending image div to main div

  // content div
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  const contentHeading = document.createElement("h3"); // contentheading
  contentHeading.textContent = "Best Food in Town";
  const contentParagraph1 = document.createElement("p"); // first paragraph
  contentParagraph1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque. Doloremque, voluptate. Quae, quia, ipsa, aspernatur, voluptatibus, doloribus, fugiat, quos, repellendus, eaque, quaerat, quibusdam, velit, laborum, molestiae, harum, excepturi, temporibus, deleniti, voluptas, quisquam, fugit, asperiores, delectus";  const contentParagraph2 = document.createElement("p"); // second paragraph
  contentParagraph2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloremque. Doloremque, voluptate. Quae, quia, ipsa, aspernatur, voluptatibus, doloribus, fugiat, quos, repellendus, eaque, quaerat, quibusdam, velit, laborum, molestiae, harum, excepturi, temporibus, deleniti, voluptas, quisquam, fugit, asperiores, delectus.";
  contentDiv.appendChild(contentHeading); // appending contentheading to content div
  contentDiv.appendChild(contentParagraph1); // appending first paragraph to content div
  contentDiv.appendChild(contentParagraph2); // appending second paragraph to content div

  // icons container in content div
  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons-container");
  const iconDiv1 = document.createElement("div"); // first icon div
  iconDiv1.classList.add("icons");
  const icon1 = document.createElement("i"); // first icon
  icon1.classList.add("fas", "fa-shipping-fast");
  const description1 = document.createElement("span"); // first description
  description1.textContent = "Fast Delivery";
  iconDiv1.appendChild(icon1);
  iconDiv1.appendChild(description1);

  const iconDiv2 = document.createElement("div"); // second icon div
  iconDiv2.classList.add("icons");
  const icon2 = document.createElement("i"); // second icon
  icon2.classList.add("fas", "fa-dollar-sign");
  const description2 = document.createElement("span"); // second description
  description2.textContent = "Easy Payments";
  iconDiv2.appendChild(icon2);
  iconDiv2.appendChild(description2);

  const iconDiv3 = document.createElement("div"); // third icon div
  iconDiv3.classList.add("icons");
  const icon3 = document.createElement("i"); // third icon
  icon3.classList.add("fas", "fa-headset");
  const description3 = document.createElement("span"); // third description
  description3.textContent = "24/7 Service";
  iconDiv3.appendChild(icon3);
  iconDiv3.appendChild(description3);

  // appending icon divs to icons container
  iconsContainer.appendChild(iconDiv1);
  iconsContainer.appendChild(iconDiv2);
  iconsContainer.appendChild(iconDiv3);

  // appending icons container to content div
  contentDiv.appendChild(iconsContainer);

  // appending content div to main div
  div.appendChild(contentDiv);

  // appending main div to section
  section.appendChild(div);

  // appending section to document
  document.querySelector("#content").appendChild(section);
}
