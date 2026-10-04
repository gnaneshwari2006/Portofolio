const menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
