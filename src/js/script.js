const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

new TypeIt(".typing", {
  speed: 100,
  loop: true,
})
  .type("Freelance developer", { delay: 2000 })
  .delete(38)
  .type("WEB developer", { delay: 2000 })
  .move(-9)
  .delete(10)
  .move(-3, { delay: 2000 })
  .type("Frontend ", { delay: 2000 })
  .move(12)
  .delete(12)
  .go();

const counters = document.querySelectorAll(".progress__percent"),
  lines = document.querySelectorAll(".progress__bar span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href").substring(1);

    const target = document.getElementById(id);

    const topOffset = target.offsetTop;

    const scrollOptions = {
      top: topOffset,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
  });
});
