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

    // Número de WhatsApp (REEMPLAZÁ por el real)
    const numero = "549XXXXXXXXXX"; // ejemplo: 5492994123456

    // Enlace WhatsApp
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
  });
});


//preguntas
const preguntasRespuestas = [
  {
    pregunta: "¿Qué tipo de ropa se puede lavar?",
    respuesta: "Lavamos todo tipo de ropa: blanca, de color, delicada, de trabajo y más."
  },
  {
    pregunta: "¿Con cuánto tiempo de anticipación debo reservar?",
    respuesta: "Podés traer tu ropa sin turno previo, pero recomendamos reservar con 24hs."
  },
  {
    pregunta: "¿Tienen servicio de entrega a domicilio?",
    respuesta: "Sí, ofrecemos retiro y entrega a domicilio dentro del área local."
  },
  {
    pregunta: "¿Usan productos biodegradables?",
    respuesta: "Sí, todos nuestros productos son amigables con el medio ambiente."
  }
];

const container = document.getElementById('tarjetas-container');

preguntasRespuestas.forEach(item => {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p>${item.pregunta}</p>
      </div>
      <div class="flip-card-back">
        <p>${item.respuesta}</p>
      </div>
    </div>
  `;
  container.appendChild(card);
});

