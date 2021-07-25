const btn = window.document.querySelector('#btn');
const secaoCaixas = window.document.querySelector('.secaoCaixas');
const inputText = window.document.querySelector('#txtOntologia');
const warning = window.document.querySelector('.warning');

btn.addEventListener('click', () => {
    fetch('http://localhost:3333/results')
        .then(response => response.json())
        .then(json => {
            const datas = json.bindings;
            secaoCaixas.innerHTML = '';
            const inputOntologiaText = inputText.value
            
            if(inputOntologiaText === '' || inputOntologiaText === null || inputOntologiaText === undefined) {
                datas.map(ontologia => {
                    console.log(ontologia);
                    secaoCaixas.innerHTML+=`<article>
                        <h2>Nome: ${ontologia.name.value}</h2>
                        <h2>Tipo: ${ontologia.activityname.value}</h2>
                    </article>`;
                });
                warning.style.display = 'none';
            } else {
                const filtredOntology = datas.find(ontologia => ontologia.name.value == inputOntologiaText);

                if (filtredOntology === undefined) {
                    warning.style.display = 'block';
                } else {
                    warning.style.display = 'none';

                    secaoCaixas.innerHTML = `<article>
                        <h2>Nome: ${filtredOntology.name.value}</h2>
                        <h2>Tipo: ${filtredOntology.activityname.value}</h2>
                    </article>`;
                }
            }
        });
});
