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
async function fetchRepositories() {
  const username = 'DivyanshJais';
  const token = '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';

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const repositories = await response.json();
    const repositoriesContainer = document.getElementById('repositories');

    repositories.forEach((repo) => {
      const repoElement = document.createElement('div');
      repoElement.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;
      repositoriesContainer.appendChild(repoElement);
    });
  } catch (error) {
    console.log('Error fetching repositories:', error);
  }
}
fetchRepositories();


