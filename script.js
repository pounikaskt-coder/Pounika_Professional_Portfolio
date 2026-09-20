const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
const progress=document.getElementById('progress');

const savedTheme=localStorage.getItem('pounika-theme');
if(savedTheme) root.dataset.theme=savedTheme;
themeToggle.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  if(next==='light') delete root.dataset.theme; else root.dataset.theme='dark';
  localStorage.setItem('pounika-theme',next);
});
menuToggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',open);
});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
window.addEventListener('scroll',()=>{
  const doc=document.documentElement;
  const pct=doc.scrollTop/(doc.scrollHeight-doc.clientHeight)*100;
  progress.style.width=`${pct}%`;
},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
