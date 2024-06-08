export class HomePage {
    constructor(name, heroDescription, socialLinks,picture) {
      this.name = name;
      this.heroDescription = heroDescription;
      this.socialLinks = socialLinks; // Array of social link objects
      this.picture = picture;
    }
  
    // Method to display user information on the Home page
    displayInfo() {
      document.getElementById('bhavya').textContent = this.name;
      document.getElementById('stack').textContent = this.heroDescription;
  
      // Update social links (assuming socialLinks objects have URL properties)
      const socialList = document.getElementById('fb');
      for (const link of this.socialLinks) {
        const socialItem = document.createElement('li');
        socialItem.id =  link.id// Add styling class
        socialItem.classList.add('social-item'); // Add styling class
        const socialLink = document.createElement('a');
        socialLink.href = link.url; // Set the URL from the socialLinks object
        socialLink.target = "_blank"; // Open link in a new tab
        socialLink.innerHTML = `<i class="${link.iconClass}"></i>`; // Set the social media icon
        socialItem.appendChild(socialLink);
        socialList.parentNode.insertBefore(socialItem, socialList); // Insert before the existing Facebook link
      }
      // Update hero image (assuming an element with ID 'hero-img' exists)
    const heroImage = document.getElementById('person');
    heroImage.src = this.picture; // Set the image source from the imagePath property
    }
  }
  
  export class SocialLink {
    constructor(id, url, iconClass) {
    this.id = id;
      this.url = url;
      this.iconClass = iconClass; // e.g., "fa-brands fa-facebook"
    }
  }
  