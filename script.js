
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");

        if (window.scrollY > 50) {
          header.classList.add("scroll");
        } else {
          header.classList.remove("scroll");
        }
      });

      const container = document.querySelector(".blog_cards");

      let scrollAmount = 0;

      function autoScroll() {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0; 
        }
      }

      setInterval(autoScroll, 20);
      const container2 = document.querySelector(".reviews_container");
      const next = document.querySelector(".next");
      const prev = document.querySelector(".prev");

      next.onclick = () => {
        container2.scrollBy({ left: 320, behavior: "smooth" });
      };

      prev.onclick = () => {
        container2.scrollBy({ left: -320, behavior: "smooth" });
      };
      function scrollToHome() {
  const section = document.getElementById("section-acceuil");
  section.scrollIntoView({
    behavior: "smooth"
  });
};
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

