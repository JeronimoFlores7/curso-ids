fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const main = document.querySelector("main"); 

    data.forEach(job => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML += `
        <img src="${job.logo}" alt="${job.company}">
        <div class="data">
          <p class="company">${job.company} <span class="new">NEW</span></p>
          <p class="job">${job.position} </p>
          <p class="data">
            <span class="postDate">${job.postedAt}</span> • 
            <span class="time">${job.contract}</span> • 
            <span class="place">${job.location}</span>
          </p>
          <div class="skills">
            ${job.languages.map(lang => `<button class="skill">${lang}</button>`).join('')}
            ${job.tools.map(tool => `<span class="skill">${tool}</span>`).join('')}
          </div>
        </div>
      `;

      main.appendChild(card);
    });
  })
  .catch(error => console.error("Error al cargar el JSON:", error));