document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.getElementById('skills-container');
    const skills = ['HTML', 'CSS', 'JavaScript', 'React']; // Add more skills as needed

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });
});
