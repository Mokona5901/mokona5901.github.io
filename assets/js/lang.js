(function(){
  try{
    const switcher = document.createElement('div');
    switcher.style.position = 'fixed';
    switcher.style.right = '14px';
    switcher.style.top = '14px';
    switcher.style.zIndex = 9999;

    const btnEN = document.createElement('button');
    btnEN.textContent = 'EN';
    btnEN.style.marginRight = '6px';
    const btnFR = document.createElement('button');
    btnFR.textContent = 'FR';

    [btnEN, btnFR].forEach(b=>{
      b.style.padding = '6px 8px';
      b.style.borderRadius = '6px';
      b.style.border = 'none';
      b.style.cursor = 'pointer';
      b.style.background = 'rgba(255,255,255,0.06)';
      b.style.color = 'white';
    });

    btnEN.addEventListener('click', ()=>{
      localStorage.setItem('site_lang','en');
      location.href = '/';
    });
    btnFR.addEventListener('click', ()=>{
      localStorage.setItem('site_lang','fr');
      if (!location.pathname.startsWith('/fr')) location.href = '/fr/';
    });

    try {
      const rawPath = (location && location.pathname) ? location.pathname : '/';
      const normalized = rawPath.split('?')[0].split('#')[0];
      const rootPaths = ['', '/', '/index.html', '/index.htm', '/index'];
      const atRoot = rootPaths.includes(normalized);
      const atFr = normalized === '/fr' || normalized === '/fr/' || normalized.startsWith('/fr/');

      if (!atRoot) {
        switcher.appendChild(btnEN);
      }
      if (!atFr) {
        switcher.appendChild(btnFR);
      }
    } catch(e) {
      switcher.appendChild(btnEN);
      switcher.appendChild(btnFR);
    }
    document.addEventListener('DOMContentLoaded', ()=>{
      document.body.appendChild(switcher);
    });
  }catch(e){}
})();
