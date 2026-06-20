export default function loadContact() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("contact-us");

  const subheading = document.createElement("h3");
  subheading.textContent = "Contact Us";
  subheading.classList.add("sub-heading");
  const heading = document.createElement("h1");
  heading.textContent = "Get in Touch";
  heading.classList.add("heading");
  
  const formDiv = document.createElement("div");
  const form = document.createElement("form");
  form.classList.add("contact-form");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Enter your name";
  nameInput.required = true;
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Enter your email";
  emailInput.required = true;
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  const messageInput = document.createElement("textarea");
  messageInput.name = "message";
  messageInput.placeholder = "Enter your message";
  messageInput.required = true;
  const button = document.createElement("input");
  button.type = "submit";
  button.classList.add("btn");
  button.textContent = "Submit";
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);
  form.appendChild(button);
  formDiv.append(form);

  section.appendChild(subheading);
  section.appendChild(heading);
  section.appendChild(formDiv);

  content.appendChild(section);
}
