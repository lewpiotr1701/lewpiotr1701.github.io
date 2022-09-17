import '../scss/main.scss';

console.log("Hi, I'm Piotr - nice to meet you!");

fetch('https://api.github.com/users/lewpiotr1701/repos?sort=created&direction=desc')
  .then(response => response.json())
  .then(response => {
    const projectsGrid = document.querySelector('.projects-grid--js');
    for (let repository of response) {
        if (repository["homepage"]) {
            const {name, html_url, description, homepage} = repository;

            let newName = name;
            if (name == 'lewpiotr1701.github.io') {
                newName = 'portfolio';
            }

            const template = `<article class="project">
      <div class="project__upper-frame">
        <span class="project__upper-frame--circle"></span>
        <span class="project__upper-frame--circle"></span>
        <span class="project__upper-frame--circle"></span>
      </div>
      <div class="project__content-frame">
        <img src="img/github-icon-dark.svg" alt="">
        <h3 class="project__grid project__title">
          <span class="project__label">project:</span>
          <span>${newName}</span>
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span>
            &lt;<a class="project__link" href="${homepage}" title="${newName} - demo" target="_blank" rel="noopener noreferrer">
                    see here
                </a>&gt;
          </span>
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span>
            &lt;<a class="project__link" href="${html_url}" title="${newName} - source code" target="_blank" rel="noopener noreferrer">
                    source code
                </a>&gt;
          </span>
        </p>
      </div>
      </article>`;
      projectsGrid.innerHTML += template;
    }
        }
})
  .catch(error => {
  console.log(error);
})
