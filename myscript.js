var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    event.preventDefault();

    var targetSection = document.querySelector(navLink.getAttribute("href"));
    var targetOffset = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
    var headingElement = targetSection.querySelector("h2");
    headingElement.classList.add("highlight-text");
    setTimeout(function() {
      headingElement.classList.remove("highlight-text");
    }, 2000);
  });
});