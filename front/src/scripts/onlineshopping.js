'use strict';

const btn = window.document.querySelector('#listProducts');
const boxStoreds = window.document.querySelector('.boxStoreds');
const warning = window.document.querySelector('.warning');

btn.addEventListener('click', () => {
    fetch('http://localhost:3333/results')
    .then(response => response.json())
    .then(json => {
        const datas = json.bindings;
        console.log(datas);

        if (localStorage.getItem('logged') != 'true') {

            warning.style.display = 'block';
            boxStoreds.innerHTML = '';
            return;
        }

        datas.map(items => {
            warning.style.display = 'none';
            boxStoreds.innerHTML += `
                <article>
                    <h1>${items.name.value}</h1>
                    <h2>${items.activityname.value}</h2>
                </article>        
            `;
        });
    });
});
