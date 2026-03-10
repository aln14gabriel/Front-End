function atualizarContador() {
    const total = document.querySelectorAll('input[type="checkbox"]').length;
    const feitas = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const contador = document.getElementById('contador');

    if (contador) {
        contador.textContent = "Concluídas: " + feitas + "/" + total;
        if (feitas === 0) {
            contador.style.color = "red";
        } else if (feitas === total) {
            contador.style.color = "green";
        } else {
            contador.style.color = "orange";
        }
    }
}

function iniciarContador() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', atualizarContador);
    });

    atualizarContador();
}

document.addEventListener("DOMContentLoaded", iniciarContador);
