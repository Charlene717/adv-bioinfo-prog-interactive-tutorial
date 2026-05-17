(function(){
  const SK='advprog_lang';
  let lang=localStorage.getItem(SK)||'zh';

  function apply(l){
    lang=l; localStorage.setItem(SK,l);
    document.documentElement.lang=l==='zh'?'zh-Hant':'en';
    // Show/hide lang-specific blocks
    document.querySelectorAll('[data-lang]').forEach(el=>{
      el.style.display=el.dataset.lang===l?'':'none';
    });
    // Update simple text swaps
    document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
      el.textContent=el.dataset[l];
    });
    // Toggle button
    const btn=document.getElementById('langToggle');
    if(btn) btn.textContent=l==='zh'?'EN':'中文';
    // Fire event for charts etc
    document.dispatchEvent(new CustomEvent('langchange',{detail:{lang:l}}));
  }

  function toggle(){ apply(lang==='zh'?'en':'zh'); }
  function get(){ return lang; }

  document.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('.top-nav-inner');
    if(nav && !document.getElementById('langToggle')){
      const btn=document.createElement('button');
      btn.id='langToggle'; btn.className='lang-toggle';
      btn.textContent=lang==='zh'?'EN':'中文';
      btn.onclick=toggle; nav.appendChild(btn);
    }
    apply(lang);
  });

  // Generic helpers for tutorial pages
  window.bindTabs = function(container){
    const root = container || document;
    root.querySelectorAll('.code-tabs').forEach(group=>{
      const btns = group.querySelectorAll('.code-tab-btn');
      const panes = group.querySelectorAll('.code-tab-content');
      btns.forEach((b,i)=>{
        b.addEventListener('click',()=>{
          btns.forEach(x=>x.classList.remove('active'));
          panes.forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          if(panes[i]) panes[i].classList.add('active');
        });
      });
    });
  };
  window.bindAccordion = function(container){
    const root = container || document;
    root.querySelectorAll('.accordion-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        btn.classList.toggle('open');
        const body = btn.nextElementSibling;
        if(body) body.classList.toggle('open');
      });
    });
  };
  window.bindQuiz = function(container){
    const root = container || document;
    root.querySelectorAll('.quiz-q').forEach(q=>{
      const correct = q.dataset.correct;
      const opts = q.querySelectorAll('.quiz-opt');
      const fb_zh = q.querySelector('.quiz-feedback[data-lang="zh"]');
      const fb_en = q.querySelector('.quiz-feedback[data-lang="en"]');
      opts.forEach(opt=>{
        opt.addEventListener('click',()=>{
          if(q.dataset.answered) return;
          q.dataset.answered = '1';
          const v = opt.dataset.v;
          const ok = (v===correct);
          opts.forEach(o=>{
            if(o.dataset.v===correct) o.classList.add('correct');
            else if(o===opt && !ok) o.classList.add('wrong');
          });
          if(fb_zh){ fb_zh.classList.add('show'); fb_zh.classList.add(ok?'correct-fb':'wrong-fb'); }
          if(fb_en){ fb_en.classList.add('show'); fb_en.classList.add(ok?'correct-fb':'wrong-fb'); }
        });
      });
    });
  };
  window.bindProgressBar = function(){
    const bar = document.getElementById('progressBar');
    if(!bar) return;
    window.addEventListener('scroll',()=>{
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + '%';
    });
  };
  document.addEventListener('DOMContentLoaded',()=>{
    bindTabs();
    bindAccordion();
    bindQuiz();
    bindProgressBar();
  });

  window.I18n={apply,toggle,get};
})();
