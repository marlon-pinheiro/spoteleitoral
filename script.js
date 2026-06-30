const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');document.body.classList.toggle('menu-open',open)});
navigation?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
document.getElementById('year').textContent=new Date().getFullYear();
const items=document.querySelectorAll('.reveal');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window)){items.forEach(i=>i.classList.add('visible'))}else{const observer=new IntersectionObserver((entries,o)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>observer.observe(i))}
