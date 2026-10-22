"use strict";
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("main-nav");
menuButton.addEventListener("click", () => {
  const opened = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menu.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
}));
const filters = document.querySelectorAll("[data-filter]");
const courses = document.querySelectorAll(".course");
filters.forEach(btn => btn.addEventListener("click", () => {
  const choice = btn.dataset.filter;
  filters.forEach(item => {
    const selected = item === btn;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  courses.forEach(card => { card.hidden = choice !== "all" && card.dataset.group !== choice; });
}));
document.querySelectorAll(".choose").forEach(button => button.addEventListener("click", () => {
  document.getElementById("course").value = button.dataset.course;
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  document.getElementById("name").focus({preventScroll:true});
}));
document.getElementById("request-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const course = document.getElementById("course").value;
  const status = document.getElementById("form-status");
  const valid = name.length >= 2 && course.length > 0;
  status.classList.toggle("error", !valid);
  status.textContent = valid
    ? `Рахмат, ${name}! «${course}» сабагын тандадыңыз. Бул окуу формасы, билдирүү жөнөтүлгөн жок.`
    : "Атыңызды (эки тамгадан кем эмес) жана сабакты тандаңыз.";
});
