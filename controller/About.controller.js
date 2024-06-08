export class AboutPage {
    constructor( description) {
      this.description = description;
    }
  
    // Method to display user information on the Home page
    displayInfo() {
      document.getElementById('hero-subheading-a').textContent = this.description;
      
  
    }
  }
  
  