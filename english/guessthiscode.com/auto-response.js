// do f=false to stop
f = true;

setInterval(() => { 
  if (f) { $(".btn-answers").click(); gistIndex += 1; refreshUI(); }
}, 200)
