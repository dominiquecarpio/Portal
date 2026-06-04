(function() {
  const labels = ['Initializing…','Loading resources…','Setting up portal…','Almost ready…'];
  let li = 0;
  const lbl = document.getElementById('fcBarLabel');
  const t = setInterval(() => { lbl.textContent = labels[Math.min(++li, labels.length-1)]; }, 600);
  setTimeout(() => {
    clearInterval(t); lbl.textContent = 'Ready!';
    setTimeout(() => {
      document.getElementById('fc-loader').classList.add('hide');
      setTimeout(() => document.getElementById('fc-loader').remove(), 700);
    }, 350);
  }, 2600);
})();