
const form = document.getElementById('candidate-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Registration successful!');

    
    window.location.href = 'login.html';
});

