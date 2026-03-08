// ═══ Notebook Canvas — Shared lecture page logic ═══

function updateWeekProgress(weekId) {
  if (!weekId) return;
  const checks = document.querySelectorAll('.checklist input[type=checkbox]');
  const total = checks.length;
  const done = Array.from(checks).filter(c => c.checked).length;
  const pct = total ? Math.round(100 * done / total) : 0;
  const fill = document.getElementById('weekProgressFill');
  const label = document.getElementById('weekProgressLabel');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = done + '/' + total + ' — ' + pct + '%';
  localStorage.setItem('progress-' + weekId, JSON.stringify({total:total, done:done, pct:pct}));
}

function onChecklistChange(key, checked, weekId) {
  localStorage.setItem(key, checked ? '1' : '0');
  updateWeekProgress(weekId);
}

function renderSlides(containerId, slides) {
  const el = document.getElementById(containerId);
  if (!el || !slides) return;
  let html = '';
  slides.forEach((s, i) => {
    let title, body, points, code, note;
    if (Array.isArray(s)) { title = s[0]; body = s[1]; }
    else { title = s.title; body = s.body; points = s.points; code = s.code; note = s.note; }
    html += '<div class="nb-cell"><div class="nb-cell-head"><span class="nb-num">'+(i+1)+'</span><h3 class="nb-title">'+title+'</h3></div><div class="nb-cell-body">';
    if (body) html += '<p>'+body+'</p>';
    if (points) { html += '<ul>'; points.forEach(function(p){ html += '<li>'+p+'</li>'; }); html += '</ul>'; }
    if (code) html += '<pre><code>'+code+'</code></pre>';
    if (note) html += '<div class="nb-note">'+note+'</div>';
    html += '</div></div>';
  });
  el.innerHTML = html;
}

function renderMath(containerId, equations){
  const el = document.getElementById(containerId);
  if(!el || !equations) return;
  let html = '';
  equations.forEach(m => {
    html += `<div class="math-card">
      <div class="eq-name">${m.name}</div>
      <div class="eq-formula">${m.formula}</div>
      <div class="eq-desc">${m.desc}</div>
    </div>`;
  });
  el.innerHTML = html;
}

function renderDryRun(containerId, dryrun){
  const el = document.getElementById(containerId);
  if(!el || !dryrun) return;
  let html = '';
  dryrun.forEach(d => {
    html += `<div class="dryrun"><h4>${d.title}</h4>`;
    d.steps.forEach((s,i) => {
      html += `<div class="step"><span class="step-num">${i+1}.</span><span>${s}</span></div>`;
    });
    if(d.result){
      html += `<div class="result">${d.result}</div>`;
    }
    if(d.answer){
      const uid = 'ans-'+Math.random().toString(36).substr(2,6);
      html += `<button class="toggle-btn" onclick="document.getElementById('${uid}').classList.toggle('show')">Show Answer</button>`;
      html += `<div class="hidden-answer" id="${uid}">${d.answer}</div>`;
    }
    html += '</div>';
  });
  el.innerHTML = html;
}

function renderExercises(containerId, exercises) {
  const el = document.getElementById(containerId);
  if (!el || !exercises) return;
  let html = '';
  exercises.forEach((ex, i) => {
    const eid = 'ex-' + i;
    if (ex.options) {
      html += '<div class="exercise" id="'+eid+'" data-correct="'+ex.correct+'" data-explanation="'+(ex.explanation||'').replace(/"/g,'&quot;')+'">';
      html += '<div class="q">'+(i+1)+'. '+ex.q+'</div><div class="options">';
      ex.options.forEach(function(o, j) { html += '<label><input type="radio" name="'+eid+'" value="'+j+'"> '+o+'</label>'; });
      html += '</div><button class="check-btn" onclick="checkAnswer(\''+eid+'\')">' + 'Check Answer</button>';
      html += '<div class="feedback" id="'+eid+'-fb"></div></div>';
    } else {
      html += '<div class="exercise" id="'+eid+'"><div class="q">'+(i+1)+'. '+ex.q+'</div>';
      html += '<button class="toggle-btn" onclick="this.nextElementSibling.classList.toggle(\'show\')">Reveal Answer</button>';
      html += '<div class="hidden-answer">'+(ex.answer||'')+'</div></div>';
    }
  });
  el.innerHTML = html;
}

function checkAnswer(eid) {
  const container = document.getElementById(eid);
  const selected = container.querySelector('input[name="'+eid+'"]:checked');
  const fb = document.getElementById(eid+'-fb');
  if (!selected) { fb.className = 'feedback fb-warn'; fb.textContent = 'Pick an option first.'; return; }
  const correct = parseInt(container.dataset.correct);
  const explanation = container.dataset.explanation || '';
  if (parseInt(selected.value) === correct) {
    fb.className = 'feedback fb-correct';
    fb.innerHTML = '\u2713 Correct!' + (explanation ? ' — ' + explanation : '');
  } else {
    fb.className = 'feedback fb-wrong';
    fb.innerHTML = '\u2717 Not quite. ' + explanation;
  }
}

/* ═══ Diagram rendering ═══ */
function renderDiagrams(containerId, diagrams) {
  const el = document.getElementById(containerId);
  if (!el || !diagrams) return;
  let html = '';
  diagrams.forEach(function(d) {
    html += '<div class="diagram-card">';
    html += '<h4 class="diagram-title">' + d.title + '</h4>';

    if (d.type === 'flow') {
      html += '<div class="flow-diagram">';
      d.steps.forEach(function(s, i) {
        html += '<div class="flow-node">' + s + '</div>';
        if (i < d.steps.length - 1) html += '<div class="flow-arrow">→</div>';
      });
      html += '</div>';
    }

    if (d.type === 'flow-vertical') {
      html += '<div class="flow-diagram vertical">';
      d.steps.forEach(function(s, i) {
        html += '<div class="flow-node">' + s + '</div>';
        if (i < d.steps.length - 1) html += '<div class="flow-arrow vertical">↓</div>';
      });
      html += '</div>';
    }

    if (d.type === 'architecture') {
      html += '<div class="arch-diagram">';
      d.layers.forEach(function(layer, i) {
        html += '<div class="arch-layer">';
        html += '<span class="arch-label">' + layer.label + '</span>';
        html += '<span class="arch-content">' + layer.content + '</span>';
        html += '</div>';
        if (i < d.layers.length - 1) html += '<div class="arch-arrow">↕</div>';
      });
      html += '</div>';
    }

    if (d.type === 'compare') {
      html += '<div class="compare-diagram">';
      html += '<div class="compare-col"><h5>' + d.left.heading + '</h5><ul>';
      d.left.points.forEach(function(p) { html += '<li>' + p + '</li>'; });
      html += '</ul></div>';
      html += '<div class="compare-vs">vs</div>';
      html += '<div class="compare-col"><h5>' + d.right.heading + '</h5><ul>';
      d.right.points.forEach(function(p) { html += '<li>' + p + '</li>'; });
      html += '</ul></div>';
      html += '</div>';
    }

    if (d.type === 'table') {
      html += '<div class="diagram-table-wrap"><table class="diagram-table">';
      html += '<thead><tr>';
      d.headers.forEach(function(h) { html += '<th>' + h + '</th>'; });
      html += '</tr></thead><tbody>';
      d.rows.forEach(function(row) {
        html += '<tr>';
        row.forEach(function(cell) { html += '<td>' + cell + '</td>'; });
        html += '</tr>';
      });
      html += '</tbody></table></div>';
    }

    if (d.type === 'grid') {
      html += '<div class="diagram-grid">';
      d.cells.forEach(function(c) {
        html += '<div class="grid-cell"><strong>' + c.label + '</strong><span>' + c.value + '</span></div>';
      });
      html += '</div>';
    }

    if (d.caption) html += '<p class="diagram-caption">' + d.caption + '</p>';
    html += '</div>';
  });
  el.innerHTML = html;
}

function renderChecklist(containerId, items, weekId) {
  const el = document.getElementById(containerId);
  if (!el || !items) return;
  document.body.dataset.week = weekId;
  let html = '<div class="checklist">';
  items.forEach(function(item, i) {
    const key = 'chk-' + weekId + '-' + i;
    const checked = localStorage.getItem(key) === '1' ? 'checked' : '';
    html += '<label class="chk-item"><input type="checkbox" '+checked+' onchange="onChecklistChange(\''+key+'\',this.checked,\''+weekId+'\')">' + '<span>'+item+'</span></label>';
  });
  html += '</div>';
  el.innerHTML = html;
  updateWeekProgress(weekId);
}
