// Data loading, nav toggle, year + Formspree
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  const t = document.getElementById('navToggle');
  const l = document.getElementById('navLinks');
  if(t && l){ t.addEventListener('click', ()=> l.classList.toggle('show')); }

  // Load projects
  fetch('projects.json')
    .then(r=>r.json())
    .then(items => {
      const wrap = document.getElementById('projects');
      if (!wrap) return;
      items.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <div class="thumb">
            <img src="${p.image}" alt="${p.title} project thumbnail">
            ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          <div class="actions">
            ${p.link ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener">Live</a>` : ''}
            ${p.case ? `<a class="text-link" href="${p.case}" target="_blank" rel="noopener">Case study</a>` : ''}
          </div>
        `;
        wrap.appendChild(card);
      });
    });

  // Formspree - replace YOUR_FORM_ID
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending…';
      try{
        const data = new FormData(form);
        const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if (res.ok){ form.reset(); status.textContent = 'Thanks! I will reply within a day.'; }
        else { status.textContent = 'Send error. Please email me directly.'; }
      }catch(err){ status.textContent = 'Network error.'; }
    });
  }
});
