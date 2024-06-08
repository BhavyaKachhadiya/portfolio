export class Experience {
    constructor(year, title, company) {
      this.year = year;
      this.title = title;
      this.company = company;
    }
  
    createExperienceElement() {
      const experienceContainer = document.createElement('div');
      experienceContainer.classList.add('container-exper'); // Matches your existing class name
  
      const yearElement = document.createElement('div');
      yearElement.classList.add('year');
      yearElement.textContent = this.year;
  
      const titleElement = document.createElement('div');
      titleElement.classList.add('title');
      titleElement.textContent = this.title;
  
      const companyElement = document.createElement('div');
      companyElement.classList.add('at');
      companyElement.textContent = this.company;
  
      experienceContainer.appendChild(yearElement);
      experienceContainer.appendChild(titleElement);
      experienceContainer.appendChild(companyElement);
  
      return experienceContainer;
    }
  }
  