import { HomePage, SocialLink } from "./controller/Home.controller.js"; // Assuming homePage.js is in the same directory
import { AboutPage } from "./controller/About.controller.js";
import { Service } from "./controller/Service.controller.js";
import { Education } from "./controller/Education.controllor.js";
import { Experience } from "./controller/Experience.controller.js";
import { Skill } from "./controller/Skill.controllor.js";

// Create social link objects (replace with your URLs and icon classes)
const socialLinks = [
  new SocialLink("fb", "https://www.facebook.com/", "fa-brands fa-facebook"),
  new SocialLink("ld", "https://www.linkedin.com/", "fa-brands fa-linkedin"),
  new SocialLink("x", "https://www.x.com/", "fa-brands fa-x-twitter"),
  new SocialLink("yt", "https://www.youtube.com/", "fa-brands fa-youtube"),
];
// Create a HomePage instance
const homePage = new HomePage(
  "Bhavya ",
  "Full Stack Website",
  socialLinks,
  "person.jpg"
);
// Call the displayInfo method to display information
homePage.displayInfo();

const About = new AboutPage("fjdfogj");
About.displayInfo();

const services = [
  new Service(
    "fa-solid fa-pager logo-service",
    "Landing Page",
    "I will make Landing page using HTML"
  ),
  new Service(
    "fa-solid fa-fill-drip logo-service",
    "UI Design",
    "I will make Landing page using Figma"
  ),
  new Service(
    "fa-solid fa-robot logo-service",
    "Automation",
    "I will do automation using Python"
  ),
];

const serviceContainer = document.querySelector(".services"); // Assuming the services container has this class
for (const service of services) {
  const serviceElement = service.createServiceElement(); // Call the method to create the element
  serviceContainer.appendChild(serviceElement);
}

const education1 = new Education(
  "Aug 2022 - Present",
  "Diploma in Computer Engineering",
  "Dr Subhash University"
);

const educationContainer = document.querySelector("#ed");

const educationElements = [education1 /* ... more education instances */];

for (const education of educationElements) {
  const educationElement = education.createEducationElement();
  educationContainer.appendChild(educationElement);
}
const skills = [
  new Skill("HTML", 30, "#f44"), // Example with color class
  new Skill("CSS", 75, "#34f"),
  new Skill("JavaScript", 80, "#fd1")
  // ... add more skills
];

const skillContainer = document.querySelector(".allskills"); // Adjust selector as needed

for (const skill of skills) {
  const skillElement = skill.createSkillElement();
  skillContainer.appendChild(skillElement);
}

const experience1 = new Experience(
  "Dec 2023 - Present",
  "Internship",
  "Hopiant Pvt. Ltd."
);


// ... add more experience instances

const experienceContainer = document.querySelector("#ex");

const experienceElements = [experience1 /* ... more experience instances */, ,];

for (const experience of experienceElements) {
  const experienceElement = experience.createExperienceElement();
  experienceContainer.appendChild(experienceElement);
}


