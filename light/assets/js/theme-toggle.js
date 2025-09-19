// Light -> Dark redirect for multi-folder template
(function(){
  function getDarkUrl(){
    try{
      const href = window.location.href;
      if (href.includes('/light/')) return href.replace('/light/','/dark/');
      if (href.includes('%2Flight%2F')) return href.replace('%2Flight%2F','%2Fdark%2F');
      const url = new URL(href);
      url.pathname = url.pathname.replace('/light/','/dark/');
      return url.toString();
    }catch(e){
      return window.location.href;
    }
  }
  document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('theme-toggle');
    if(!btn) return;
    btn.addEventListener('click', function(){
      try{ localStorage.setItem('preferredTheme','dark'); }catch(e){}
      btn.querySelector('.icon').textContent = '🌙';
      window.location.href = getDarkUrl();
    });
  });
})();
