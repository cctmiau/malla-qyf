document.addEventListener("DOMContentLoaded", () => {
  actualizarBloqueos();
});

function toggleAprobado(el) {
  if (el.classList.contains("bloqueado")) return;

  el.classList.toggle("aprobado");
  actualizarBloqueos();
}

function actualizarBloqueos() {
  const ramos = document.querySelectorAll(".ramo");
  const aprobados = new Set(
    [...ramos].filter(r => r.classList.contains("aprobado")).map(r => r.dataset.id)
  );

  document.querySelectorAll(".ramo.prereq").forEach(ramo => {
    const prereq = ramo.dataset.prereq;
    if (!aprobados.has(prereq)) {
      ramo.classList.add("bloqueado");
      ramo.classList.remove("aprobado");
    } else {
      ramo.classList.remove("bloqueado");
    }
  });
}
