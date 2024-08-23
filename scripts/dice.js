
function dice(d)
{
    let _d = 6;
    if(!isNaN(d))
        _d = d;

    return 1 + Math.floor(Math.random() * _d);
}

function dice_n(n, d) {

  let sum = 0; 
  let rolls = [];
  for(let i = 0; i < n; ++i) {
    let r = dice(d);
    sum += r;
    rolls.push(r);
  }

  return { rolls: rolls, total: sum };
}

