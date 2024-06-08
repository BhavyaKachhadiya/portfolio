export class Education {
    constructor(year, title, institution) {
      this.year = year;
      this.title = title;
      this.institution = institution;
    }
  
    createEducationElement() {
      const educationContainer = document.createElement('div');
      educationContainer.classList.add('container-edu');
  
      const yearElement = document.createElement('div');
      yearElement.classList.add('year');
      yearElement.textContent = this.year;
  
      const titleElement = document.createElement('div');
      titleElement.classList.add('title');
      titleElement.textContent = this.title;
  
      const institutionElement = document.createElement('div');
      institutionElement.classList.add('at');
      institutionElement.textContent = this.institution;
  
      educationContainer.appendChild(yearElement);
      educationContainer.appendChild(titleElement);
      educationContainer.appendChild(institutionElement);
  
      return educationContainer;
    }
  }
  