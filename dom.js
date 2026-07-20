// Selecting Elements.
// 1. The h1 element
const h1 = document.querySelector("h1");
// alt: document.getElementsByTagName("h1")[0]
console.log("h1:", h1);

// 2. All elements with class "content"
const allContent = document.getElementsByClassName("content");
// alt: document.querySelectorAll(".content") -> returns NodeList
console.log("all.content:", allContent);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
// alt: document.querySelector("#contact-form")
console.log("form:", contactForm);

// 4. The email input
const emailInput = document.getElementById("email");
// alt: document.querySelector('input[type="email"]')
console.log("email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll(".nav-list li");
// alt: document.getElementsByTagName("li") then filter by parent
console.log("nav li:", navItems);

// 6. The first.nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("first.nav-link:", firstNavLink);

// 7. The last paragraph
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];

// alt: document.querySelector("p:last-of-type")
console.log("last p:", lastParagraph);