function loadContent(page) {
    fetch(`https://raw.githubusercontent.com/tribbletinkerer/world-citizens-org/main/content/${page}.md`)
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = marked.parse(text);
        })
        .catch(error => console.error('Error:', error));
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent(e.target.dataset.page);
    });
});

loadContent('home');
