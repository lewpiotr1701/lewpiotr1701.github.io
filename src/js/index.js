import '../scss/main.scss';

console.log("Hi, I'm Piotr - nice to meet you!");

fetch('https://api.github.com/users/lewpiotr1701/repos?sort=created&direction=asc')
  .then(response => response.json())
  .then(data => {
    const projectsGrid = document.querySelector('.projects-grid--js');
    const projectsArr = [];

    for (let repository of data) {
      let { name, html_url, description, homepage, topics } = repository;

      if (name === 'lewpiotr1701.github.io') name = 'portfolio';
      if (homepage === null) homepage = '#';

      const projectObj = { name, html_url, description, homepage };

      if (topics.includes('vanilla-js')) {
        projectsArr.push(projectObj)
      } else {
        projectsArr.unshift(projectObj)
      }
    }

    console.log(projectsArr)

    for (let project of projectsArr) {

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
          <span>${project.name}</span>
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span>
          <span>${project.description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span>
            &lt;<a class="project__link" href="${project.homepage}" title="${project.name} - demo" target="_blank" rel="noopener noreferrer">
                    see here
                </a>&gt;
          </span>
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span>
            &lt;<a class="project__link" href="${project.html_url}" title="${project.name} - source code" target="_blank" rel="noopener noreferrer">
                    source code
                </a>&gt;
          </span>
        </p>
      </div>
      </article>`;

      projectsGrid.innerHTML += template;
    }
  })
  .catch(error => {
    console.log(error);
  })
