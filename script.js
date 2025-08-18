/*
  Script for: Ezequiel Duarte · Chef Privado & Viandas
  Path: assets/js/script.js
*/
// Año dinámico en el footer
(function(){
  var y=document.getElementById('year');
  if(y){ y.textContent=new Date().getFullYear(); }
})();

// Menú móvil: toggle y cierre al hacer click en un enlace
(function(){
  var btn=document.getElementById('hamburger');
  var mobile=document.getElementById('mobile-menu');
  if(!btn || !mobile) return;
  btn.addEventListener('click', function(){
    var open=mobile.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobile.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      mobile.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();
