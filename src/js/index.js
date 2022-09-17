import '../scss/main.scss';

fetch('https://api.github.com/users/lewpiotr1701/repos?sort=created&direction=desc')
  .then(response => response.json())
  .then(response => {
    const projectsGrid = document.querySelector('.projects-grid--js');
    for (let repository of response) {
        if (repository["homepage"]) {
            const {name, html_url, description, homepage} = repository;
            const myTemplate = `<article class="project">
      <div class="project__upper-frame">
        <span class="project__upper-frame--circle"></span>
        <span class="project__upper-frame--circle"></span>
        <span class="project__upper-frame--circle"></span>
      </div>
      <div class="project__content-frame">
        <img src="../assets/img/github-icon-dark.svg" alt="">
        <h3 class="project__grid project__title">
          <span class="project__label">project:</span>
          <span>${name}</span>
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span>
            &lt;<a class="project__link" href="${homepage}" title="${name} - demo">see here</a>&gt;
          </span>
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span>
            &lt;<a class="project__link" href="${html_url}" title="${name} - source code">source code</a>&gt;
          </span>
        </p>
      </div>
      </article>`;
      projectsGrid.innerHTML += myTemplate;
    }
        }
})
  .catch(error => {
  console.log(error);
})
