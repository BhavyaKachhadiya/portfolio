export class Skill {
    constructor(name, level, colorClass = '#000') { // Optional color class for customization
      this.name = name;
      this.level = level;
      this.colorClass = colorClass; // Default empty string for optional color class
    }
  
    createSkillElement() {
      const skillContainer = document.createElement('div');
      skillContainer.classList.add('my-skill'); // Matches your existing class name
  
      const skillWrapper = document.createElement('div');
      skillWrapper.classList.add('container');
  
      const skillName = document.createElement('div');
      skillName.classList.add('skill-name'); // Add specific class for styling if needed
      skillName.style.color=this.colorClass;
      const skillNameText = document.createElement('p');
      skillNameText.textContent = this.name;
      skillName.appendChild(skillNameText);
  
      const skillLevel = document.createElement('div');
      skillLevel.classList.add('skill-no');
  
      const skillLevelText = document.createElement('p');
      skillLevelText.textContent = this.level + '%'; // Append percentage sign
      skillLevel.appendChild(skillLevelText);
  
      skillWrapper.appendChild(skillName);
      skillWrapper.appendChild(skillLevel);
  
      const skillProgress = document.createElement('div');
      skillProgress.classList.add('center-pro');
  
      const progressContainer = document.createElement('div');
      progressContainer.classList.add('process-con');
  
      const progressBar = document.createElement('div');
      progressBar.classList.add('process'); // Add color class if provided
    progressBar.style.width = this.level+"%";
    progressBar.style.backgroundColor = this.colorClass;

      progressContainer.appendChild(progressBar);
      skillProgress.appendChild(progressContainer);
  
      skillContainer.appendChild(skillWrapper);
      skillContainer.appendChild(skillProgress);
  
      return skillContainer;
    }
  }
  