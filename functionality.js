document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would normally validate the login credentials
    window.location.href = 'post-login.html';
});

document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function() {
        alert('You clicked on ' + section.querySelector('h2').innerText);
    });
});

// Adding cursor trail effect
document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);
    setTimeout(() => {
        trail.remove();
    }, 500);
});
