(async function(){
  const el = document.getElementById('github-widget');
  if(!el) return;
  try {
    const res = await fetch('https://api.github.com/users/Mokona5901');
    if(!res.ok) throw new Error('GitHub API error');
    const u = await res.json();
    const avatar = u.avatar_url ? `${u.avatar_url}&s=96` : '';
    el.innerHTML = `
      <a class="gh-card" href="${u.html_url}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;">
        <img src="${avatar}" alt="${u.login} avatar" style="width:72px;height:72px;border-radius:8px;object-fit:cover;">
        <div>
          <div style="font-weight:600;">${u.name || u.login}</div>
          <div style="color:var(--muted,#666);margin:6px 0;">${u.bio || ''}</div>
          <div style="font-size:0.9em;color:var(--muted,#666);">Repos: ${u.public_repos} · Followers: ${u.followers}</div>
        </div>
      </a>
    `;
  } catch (err) {
    el.textContent = 'GitHub profile unavailable';
  }
})();
