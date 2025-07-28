document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsapp-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const trabajos = Array.from(form.querySelectorAll("input[name='trabajo']:checked"))
                          .map(cb => cb.value)
                          .join(", ");

    const prenda = document.getElementById("prenda").value.trim();
    const material = document.getElementById("material").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const observaciones = document.getElementById("observaciones").value.trim();

    // Validación básica
    if (!trabajos || !prenda || !material || !cantidad) {
      alert("Por favor completá todos los campos obligatorios.");
      return;
    }

    // Crear mensaje
    const mensaje = `Hola, quisiera consultar por los siguientes servicios: %0A
✅ Servicios: ${trabajos}%0A
🧺 Prenda: ${prenda}%0A
🧵 Material: ${material}%0A
📦 Cantidad: ${cantidad}%0A
📝 Observaciones: ${observaciones || 'Sin observaciones'}`;

    // Número de WhatsApp 
    const numero = "2934455076"; 

    // Enlace WhatsApp
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
  });
});


