const tocadiscos = document.getElementById('tocadiscos');
const disco = document.getElementById('disco');
const aguja = document.getElementById('aguja');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrar-modal');
const sound = document.getElementById('sound');

// Tocadiscos animación
tocadiscos.addEventListener('click', () => {
  modal.style.display = 'flex';
  sound.play();
  aguja.classList.add('activa');
  disco.classList.add('girando');
});

cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
  aguja.classList.remove('activa');
  disco.classList.remove('girando');
});

// Carrusel con flechas
const carrusel = document.getElementById('carrusel');
const btnLeft = document.querySelector('.carrusel-btn.left');
const btnRight = document.querySelector('.carrusel-btn.right');

btnLeft.addEventListener('click', () => {
  carrusel.scrollBy({ left: -240, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  carrusel.scrollBy({ left: 240, behavior: 'smooth' });
});

// Autoplay cada 3s
setInterval(() => {
  carrusel.scrollBy({ left: 240, behavior: 'smooth' });
}, 3000);
