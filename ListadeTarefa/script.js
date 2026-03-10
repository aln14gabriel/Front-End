function atualizarContador() {
  const total = document.querySelectorAll('input[type="checkbox"]').length;
  const feitas = document.querySelectorAll(
    'input[type="checkbox"]:checked',
  ).length;
  const contador = document.getElementById("contador");

  contador.textContent = `Concluídas: ${feitas}/${total}`;

  if (feitas === 0) contador.style.color = "red";
  else if (feitas === total) contador.style.color = "green";
  else contador.style.color = "orange";
}

document
  .querySelectorAll('input[type="checkbox"]')
  .forEach((cb) => cb.addEventListener("change", atualizarContador));

atualizarContador();
