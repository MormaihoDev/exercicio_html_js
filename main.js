const form = document.getElementById('calculo-form');

function comparaNumero(campo_A, campo_B){
    const comparou = campo_B>campo_A;
    return comparou;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campo_A = document.getElementById('campoA');
    const campo_B = document.getElementById('campoB');
        if (comparaNumero(campoA.value, campoB.value) === false) {
            alert ("O formulário não esta válido para o envio");
        }else{
            alert("Parabéns -formulário esta válido!");
        }
    })

console.log(form);
