const profesionales = [
  {
    nombre: "Dra. Ana Gómez",
    especialidad: "Psicología Clínica",
    ciudad: "Asunción",
    foto: "img/ana.jpg",
    contacto: "https://wa.me/595972409087",
    facebook: "https://www.facebook.com/frank.torres.98",
    instagram: "https://www.instagram.com/detodo_unpocopy25",
    tiktok: "https://tiktok.com/@anagomezpsico",
    descripcion: "Psicóloga con más de 10 años de experiencia en terapias individuales, familiares y de pareja.",
    experiencia: "Hospital Nacional, Centro Psicológico Arapy",
    educacion: "Universidad Nacional de Asunción",
    idiomas: "Español, Inglés"
  },
  {
    nombre: "Lic. Josias Cáceres",
    especialidad: "Psicología Laboral",
    ciudad: "Ñemby",
    foto: "img/josias.jpeg",
    contacto: "https://wa.me/595971859221",
    facebook: "https://www.facebook.com/frank.torres.98",
    instagram: "https://instagram.com/mario.nutri",
    tiktok: "https://tiktok.com/@nutritorres",
    descripcion: "Especialista en nutrición deportiva y control de peso. Atención personalizada.",
    experiencia: "Club Olimpia, Centro Nutricional Balance",
    educacion: "Universidad Católica",
    idiomas: "Español, Portugués"
  },
  {
    nombre: "Dra. Carolina Díaz",
    especialidad: "Psicopedagoga",
    ciudad: "Capiatá",
    foto: "img/carolina.jpeg",
    contacto: "https://wa.me/595972409087",
    facebook: "https://www.facebook.com/frank.torres.98",
    instagram: "https://instagram.com/carodps",
    tiktok: "https://tiktok.com/@carodps",
    descripcion: "Psicopedagoga con experiencia en dificultades de aprendizaje y desarrollo cognitivo.",
    experiencia: "Consultorio EducaMás, Escuela Don Bosco",
    educacion: "Universidad Autónoma",
    idiomas: "Español"
  },
{
    nombre: "Lic. Pablo Granados",
    especialidad: "Pediatra",
    ciudad: "Fernando de la Mora",
    foto: "img/pablo.jpg",
    contacto: "https://wa.me/595972409087",
    facebook: "https://www.facebook.com/frank.torres.98",
    instagram: "https://instagram.com/carodps",
    tiktok: "https://tiktok.com/@carodps",
    descripcion: "Psicopedagoga con experiencia en dificultades de aprendizaje y desarrollo cognitivo.",
    experiencia: "Consultorio EducaMás, Escuela Don Bosco",
    educacion: "Universidad Autónoma",
    idiomas: "Español"
  }

];

const contenedor = document.getElementById("profesionales");

function mostrarProfesionales(lista) {
  contenedor.innerHTML = "";
  lista.forEach((p, i) => {
    contenedor.innerHTML += `
      <div class="card" onclick="mostrarDetalle(${i})">
        <img src="${p.foto}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.especialidad} <br><small>${p.ciudad}</small></p>
        <a href="${p.contacto}" target="_blank"><i class="fab fa-whatsapp"></i> Contactar</a>
      </div>
    `;
  });

  if (lista.length === 0) {
    contenedor.innerHTML = `<p>No se encontraron profesionales.</p>`;
  }
}

function mostrarProfesionales(lista) {
  contenedor.innerHTML = "";
  lista.forEach((p) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";

    tarjeta.innerHTML = `
      <img src="${p.foto}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>${p.especialidad} <br><small>${p.ciudad}</small></p>
      <a href="${p.contacto}" target="_blank"><i class="fab fa-whatsapp"></i> Contactar</a>
      <button class="ver-mas">Ver más</button>
    `;

    // Agregamos el evento click al botón "Ver más"
    tarjeta.querySelector(".ver-mas").addEventListener("click", () => {
      mostrarDetalle(p); // Pasamos el objeto profesional directamente
    });

    contenedor.appendChild(tarjeta);
  });

  if (lista.length === 0) {
    contenedor.innerHTML = `<p>No se encontraron profesionales.</p>`;
  }
}

function mostrarDetalle(p) {
  const detalle = document.getElementById("perfil-detallado");
  detalle.innerHTML = `
    <img src="${p.foto}" alt="${p.nombre}">
    <h2>${p.nombre}</h2>
    <p><strong>Especialidad:</strong> ${p.especialidad}</p>
    <p><strong>Ciudad:</strong> ${p.ciudad}</p>
    <p><strong>Descripción:</strong> ${p.descripcion}</p>
    <p><strong>Experiencia:</strong> ${p.experiencia}</p>
    <p><strong>Educación:</strong> ${p.educacion}</p>
    <p><strong>Idiomas:</strong> ${p.idiomas}</p>
    <div class="redes">
      <a href="${p.facebook}" target="_blank">Facebook</a>
      <a href="${p.instagram}" target="_blank">Instagram</a>
      <a href="${p.tiktok}" target="_blank">TikTok</a>
      <a href="${p.contacto}" target="_blank">WhatsApp</a>
    </div>
    <a href="#" class="boton-volver" onclick="cerrarDetalle()">← Volver al listado</a>
  `;
  detalle.classList.remove("oculto");
  contenedor.classList.add("oculto");
}


function mostrarDetalle(p) {
  const detalle = document.getElementById("perfil-detallado");
  detalle.innerHTML = `
    <img src="${p.foto}" alt="${p.nombre}">
    <h2>${p.nombre}</h2>
    <p><strong>Especialidad:</strong> ${p.especialidad}</p>
    <p><strong>Ciudad:</strong> ${p.ciudad}</p>
    <p><strong>Descripción:</strong> ${p.descripcion}</p>
    <p><strong>Experiencia:</strong> ${p.experiencia}</p>
    <p><strong>Educación:</strong> ${p.educacion}</p>
    <p><strong>Idiomas:</strong> ${p.idiomas}</p>
    <div class="redes">
      <a href="${p.facebook}" target="_blank">Facebook</a>
      <a href="${p.instagram}" target="_blank">Instagram</a>
      <a href="${p.tiktok}" target="_blank">TikTok</a>
      <a href="${p.contacto}" target="_blank">WhatsApp</a>
    </div>
    <a href="#" class="boton-volver" onclick="cerrarDetalle()">← Volver al listado</a>
  `;
  detalle.classList.remove("oculto");
  contenedor.classList.add("oculto");
}



function cerrarDetalle() {
  document.getElementById("perfil-detallado").classList.add("oculto");
  contenedor.classList.remove("oculto");
}

document.getElementById("buscador").addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase();
  const filtrados = profesionales.filter(p =>
    p.nombre.toLowerCase().includes(valor) ||
    p.especialidad.toLowerCase().includes(valor) ||
    p.ciudad.toLowerCase().includes(valor)
  );
  mostrarProfesionales(filtrados);
});

mostrarProfesionales(profesionales);
