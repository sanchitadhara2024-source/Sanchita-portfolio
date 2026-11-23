(function(){
  var b=document.body, html=document.documentElement;
  if(html.classList.contains('dark-pre')) b.classList.add('dark');
  var t=document.getElementById('themeToggle');
  if(t) t.addEventListener('click',function(){b.classList.toggle('dark');try{localStorage.setItem('sanchita-theme',b.classList.contains('dark')?'dark':'light')}catch(e){}});
  var nav=document.getElementById('siteNav'), nt=document.getElementById('navToggle');
  if(nt) nt.addEventListener('click',function(){var o=nav.classList.toggle('open');nt.setAttribute('aria-expanded',o);nt.setAttribute('aria-label',o?'Close menu':'Open menu');nt.textContent=o?'✕':'☰';});
  document.querySelectorAll('.dd-btn').forEach(function(btn){btn.addEventListener('click',function(){var d=btn.parentNode;var o=d.classList.toggle('open');btn.setAttribute('aria-expanded',o);});});
  document.addEventListener('click',function(e){document.querySelectorAll('.dd.open').forEach(function(d){if(!d.contains(e.target)){d.classList.remove('open');d.querySelector('.dd-btn').setAttribute('aria-expanded','false');}});});
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var ob=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target);}});},{threshold:.1});items.forEach(function(i){ob.observe(i);});}else{items.forEach(function(i){i.classList.add('visible');});}
  document.querySelectorAll('.raci-tools').forEach(function(bar){var tb=document.getElementById(bar.dataset.table);bar.querySelectorAll('button').forEach(function(btn){btn.addEventListener('click',function(){bar.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed','false');});btn.setAttribute('aria-pressed','true');tb.dataset.filter=btn.dataset.f;});});});
  var fb=document.querySelector('.filters');
  if(fb){fb.querySelectorAll('button').forEach(function(btn){btn.addEventListener('click',function(){fb.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed','false');});btn.setAttribute('aria-pressed','true');var f=btn.dataset.f;document.querySelectorAll('.case').forEach(function(c){c.hidden=!(f==='all'||(' '+c.dataset.tags+' ').indexOf(' '+f+' ')>-1);});});});
    var h=location.hash.replace('#',''); if(h){var m=fb.querySelector('[data-f="'+h+'"]'); if(m) m.click();}}
  var form=document.getElementById('inquiryForm');
  if(form) form.addEventListener('submit',function(e){e.preventDefault();var f=e.target;var s='Advisory inquiry — '+f.org.value+' ('+f.type.value+')';var bd='Name: '+f.name.value+'\nOrganization: '+f.org.value+'\nEmail: '+f.email.value+'\nType of support: '+f.type.value+'\n\nBusiness challenge:\n'+f.msg.value;window.location.href='mailto:sanchitadhara2024@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(bd);});
})();
