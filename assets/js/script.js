// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const btn = document.getElementById('hamburger');
const mobile = document.getElementById('mobile-menu');

function closeMobile(){
  mobile.classList.remove('open');
  document.body.classList.remove('no-scroll');
  btn?.setAttribute('aria-expanded','false');
}

if (btn && mobile){
  btn.addEventListener('click', ()=>{
    const willOpen = !mobile.classList.contains('open');
    mobile.classList.toggle('open', willOpen);
    document.body.classList.toggle('no-scroll', willOpen);
    btn.setAttribute('aria-expanded', String(willOpen));
  });

  // Cerrar al hacer click en un link
  mobile.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', closeMobile);
  });

  // Cerrar si se cambia a escritorio
  window.addEventListener('resize', ()=>{
    if (window.innerWidth > 768) closeMobile();
  });
}

// Animaciones reveal
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('animated'); io.unobserve(e.target); }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Animación de máquina de escribir para el quote
const brandQuote = document.getElementById("brandQuote");
if (brandQuote) {
  const text = `"La obsesión vence al talento" — Filosofía que guía cada creación culinaria`;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      brandQuote.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // velocidad de escritura
    }
  }

  typeWriter();
}

