// Image paths (files live in /images)
var IM={
 "mansion": "images/mansion.jpg",
 "frame1": "images/frame1.jpg",
 "porch": "images/porch.jpg",
 "porch_in": "images/porch_in.jpg",
 "truss1": "images/truss1.jpg",
 "truss2": "images/truss2.jpg",
 "frame2": "images/frame2.jpg",
 "frame3": "images/frame3.jpg",
 "roofA_b": "images/roofA_b.jpg",
 "roofA_a": "images/roofA_a.jpg",
 "pool_b": "images/pool_b.jpg",
 "pool_a": "images/pool_a.jpg"
};
var $=function(s){return document.querySelector(s)};
var lb=$('#lb');
function setImg(el,u){var i=new Image();i.onload=function(){el.style.backgroundImage='url("'+u+'")'};i.src=u}
setImg($('#hbg'),IM.mansion);setImg($('#fr'),IM.truss1);document.querySelectorAll('[data-k]').forEach(function(i){if(IM[i.dataset.k])i.src=IM[i.dataset.k]});
// marquee
var words=['Estate Remodeling','Custom Additions','Spa Bathrooms','Decks & Porches','Roofing & Siding','Window Installation','Restoration'];
$('#mq').innerHTML=(words.map(function(w){return w+'<span>◆</span>'}).join('')).repeat(4);
// services
var S=[['Bathroom Remodeling','Spa-grade bathrooms, custom showers and flawless tile installation.','M4 12h16M6 12V6a2 2 0 0 1 4 0M5 12v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4'],
['Additions & Sunroom','Seamlessly extend your living space with light-filled sunrooms and additions.','M3 20V9l9-6 9 6v11zM9 20v-6h6v6'],
['Decks & Porches','Entertain in style with bespoke outdoor living, built to endure.','M3 18h18M5 18V8h14v10M9 8v10M15 8v10'],
['Roofing & Siding','Reroofing, siding and dormers with lasting curb appeal.','M2 12l10-8 10 8M5 10v10h14V10'],
['Windows','Premium window installation and replacement for light and efficiency.','M4 4h16v16H4zM12 4v16M4 12h16'],
['Framing & Restoration','Structural framing, renovation and restoration done right.','M4 20L20 4M4 4l16 16M2 12h20']];
$('#sg').innerHTML=S.map(function(s,i){return '<div class="card rv"><svg viewBox="0 0 24 24"><path d="'+s[2]+'"/></svg><div class="n">0'+(i+1)+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('');
// gallery
var G=[['Estate Restoration','exterior','w h','mansion'],['Custom Framing','interior','','frame1'],['Porch & Sunroom','outdoor','','porch'],['Re-Roofing','exterior','w','roofA_a'],['Roof Structure','exterior','','truss2'],['Two-Story Build','interior','h','frame3'],['Timber Rafters','interior','','truss1'],['Open-Plan Framing','interior','w','frame2'],['Poolside Re-Roof','exterior','','pool_a'],['Porch Interiors','interior','','porch_in']];
$('#gal').innerHTML=G.map(function(g,i){return '<div class="t '+g[2]+'" data-k="'+g[1]+'" data-i="'+i+'" style="--g:url('+IM[g[3]]+') center/cover"><span><small>'+g[1]+'</small>'+g[0]+'</span></div>'}).join('');
document.querySelectorAll('.t').forEach(function(t){t.onclick=function(){var g=G[t.dataset.i];$('#lt').textContent=g[0];$('#lc').textContent=g[1];$('#li').src=IM[g[3]];lb.classList.add('on')}});
lb.onclick=function(e){if(e.target===lb)lb.classList.remove('on')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
$('#ft').onclick=function(e){var f=e.target.dataset.f;if(!f)return;document.querySelectorAll('#ft button').forEach(function(b){b.classList.toggle('on',b===e.target)});document.querySelectorAll('.t').forEach(function(t){t.classList.toggle('x',f!=='all'&&t.dataset.k!==f)})};
// scroll-driven before/after
(function(){var w=$('#tfw'),cm=document.querySelectorAll('.cmp');function u(){var r=w.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight)));
cm.forEach(function(c,i){c.style.setProperty('--p',Math.max(0,Math.min(1,(p-.08-i*.06)/.76))*100+'%')});var q=Math.max(0,Math.min(1,(p-.08)/.8));$('#tpi').style.width=q*100+'%';$('#s1').style.opacity=q<.5?1:.35;$('#s2').style.opacity=q>=.5?1:.35}
addEventListener('scroll',u,{passive:true});addEventListener('resize',u);u()})();
// reveal + counters + process line
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
 e.target.querySelectorAll&&e.target.querySelectorAll('[data-c]').forEach(function(n){var to=+n.dataset.c,s=performance.now();(function f(t){var p=Math.min(1,(t-s)/1600);n.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)});
 if(e.target.id==='pc')e.target.style.setProperty('--w','100%')}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%3)*.1+'s';io.observe(el)});
// scroll effects
var nav=$('#nav'),hb=$('#hbg'),pr=$('#prog');
addEventListener('scroll',function(){var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;pr.style.width=(y/h*100)+'%';nav.classList.toggle('s',y>60);if(y<innerHeight)hb.style.transform='translateY('+(y*.25)+'px) scale(1.05)'},{passive:true});
// tilt cards
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateY('+x*8+'deg) rotateX('+(-y*8)+'deg) translateY(-8px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
// cursor
var cu=$('#cur');addEventListener('mousemove',function(e){cu.style.left=e.clientX+'px';cu.style.top=e.clientY+'px';cu.classList.toggle('h',!!e.target.closest('a,button,.t,summary,.ba'))});
// menu, theme, form
$('#menu').onclick=function(){$('#links').classList.toggle('on')};
document.querySelectorAll('.links a').forEach(function(a){a.onclick=function(){$('#links').classList.remove('on')}});
$('#tg').onclick=function(){var r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;r.dataset.theme=dark?'light':'dark'};
$('#fm').onsubmit=function(e){e.preventDefault();$('#ok').style.display='block';e.target.reset()};
// preloader
addEventListener('load',function(){setTimeout(function(){$('#pre').classList.add('go');document.body.classList.add('ready')},1300)});
