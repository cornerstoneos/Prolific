const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px';});
document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('h'));el.addEventListener('mouseleave',()=>document.body.classList.remove('h'));});
(function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(a);})();
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('sc',window.scrollY>40));
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('vis'),i*60);obs.unobserve(e.target);}});},{threshold:.06});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));
