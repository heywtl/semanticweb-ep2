'use strict';

const input = window.document.querySelector('.login-user');
const btn = window.document.querySelector('.btn');
const warning = window.document.querySelector('.warning');
const success = window.document.querySelector('.success');

btn.addEventListener('click', () => {
    fetch('http://localhost:3333/usuario')
    .then(response => response.json())
    .then(json => {
        if(input.value === 'lincobrabo') {
            localStorage.setItem('logged', true);
            success.style.display = 'block';
            warning.style.display = 'none';

            setTimeout(() => {
                window.location = 'http://127.0.0.1:5500/src/views/onlineshopping/index.html'
            }, 3000);
        } else {
            success.style.display = 'none';
            warning.style.display = 'block';
        }
    });
});
