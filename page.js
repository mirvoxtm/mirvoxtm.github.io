function downloadCV() {
    const baseUrl = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    const cvPath = baseUrl + '/res/curriculo.pdf';
    
    const button = document.getElementById('cv-button');
    const originalContent = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>Abrindo';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'curriculo.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
        button.innerHTML = originalContent;
    }, 1000);
}

function openProjects() {
    const projects = document.getElementById('projects');
    projects.scrollIntoView({ behavior: 'smooth' });
}

function openMain() {
    const main = document.getElementById('main');
    main.scrollIntoView({ behavior: 'smooth' });
}