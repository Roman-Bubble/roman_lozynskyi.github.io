// Minimal interactivity + data loading
document.addEventListener('DOMContentLoaded', () => {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // load projects
  fetch('projects.json')
    .then(r=>r.json())
    .then(items => {
      const wrap = document.getElementById('projects');
      if (!wrap) return;
      items.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <img src="${p.image}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          <div>
            ${p.link ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener">Live</a>` : ''}
            ${p.case ? `<a style="margin-left:8px" href="${p.case}" target="_blank" rel="noopener">Case</a>` : ''}
          </div>
        `;
        wrap.appendChild(card);
      });
    });

  // simple contact form via Formspree (replace YOUR_FORM_ID)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Надсилаємо…';
      try{
        const data = new FormData(form);
        const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if (res.ok){
          form.reset();
          status.textContent = 'Дякую! Відповім протягом доби.';
        } else {
          status.textContent = 'Помилка надсилання. Напишіть на email.';
        }
      }catch(err){
        status.textContent = 'Помилка мережі.';
      }
    });
  }
});
