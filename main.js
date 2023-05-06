const form = document.getElementById('form-agenda')
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
const contatos = [];
const numero = [];
const spamAprovado = '<span class= "resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class= "resultado reprovado">Reprovado</span>';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (numero.includes(inputNumeroTelefone.value)) {
        alert(`O número: ${inputNumeroTelefone.value} ja foi utilizado`);
    } else {
        contatos.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroTelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`; 
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas; 
}