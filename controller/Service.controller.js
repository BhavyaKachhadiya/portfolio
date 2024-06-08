export class Service {
  constructor(logoIcon, name, description) {
    this.logoIcon = logoIcon; // Font Awesome icon class name (e.g., "fa-solid fa-pager")
    this.name = name;
    this.description = description;
  }
  // Method to create the HTML structure for the service (optional)
  createServiceElement() {
    const service = document.createElement("div");
    service.classList.add("service");

    const serviceLogo = document.createElement("div");
    serviceLogo.classList.add("service-logo");
    const icon = document.createElement("i");
    const classListArray = this.logoIcon.split(" ");

    // Loop through the class names and add them to the icon element
    for (const className of classListArray) {
      icon.classList.add(className);
    }
    serviceLogo.appendChild(icon);

    const serviceName = document.createElement("div");
    serviceName.classList.add("service-name");
    serviceName.textContent = this.name;

    const serviceDescription = document.createElement("div");
    serviceDescription.classList.add("service-dets");
    serviceDescription.textContent = this.description;

    service.appendChild(serviceLogo);
    service.appendChild(serviceName);
    service.appendChild(serviceDescription);

    return service;
  }
}
