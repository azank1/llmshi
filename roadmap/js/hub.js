// ═══ Hub page renderer — real progress from checklists ═══
(function(){
  const grid = document.getElementById('grid');
  if(!grid) return;
  let totalItems = 0, totalDone = 0;
  WEEKS.forEach(function(w){
    const prog = JSON.parse(localStorage.getItem('progress-'+w.id)||'{"total":0,"done":0,"pct":0}');
    totalItems += prog.total; totalDone += prog.done;
    const tile = document.createElement('div');
    tile.className = 'week-tile' + (prog.pct===100?' done':'');
    tile.innerHTML =
      '<div class="wk">'+w.num+'</div>'+
      '<h3>'+w.title+'</h3>'+
      '<p>'+w.desc+'</p>'+
      '<div class="tile-progress"><div class="tile-bar"><div class="tile-fill" style="width:'+prog.pct+'%"></div></div><span class="tile-pct">'+prog.pct+'%</span></div>'+
      '<span class="badge">'+w.lectures.length+'L / '+w.labs.length+'Lab</span>';
    tile.onclick = function(){ location.href = w.page; };
    grid.appendChild(tile);
  });
  const pct = totalItems ? Math.round(100*totalDone/totalItems) : 0;
  const fill = document.getElementById('pFill');
  const label = document.getElementById('pLabel');
  if(fill) fill.style.width = pct+'%';
  if(label) label.textContent = totalDone+'/'+totalItems+' items — '+pct+'%';
})();
