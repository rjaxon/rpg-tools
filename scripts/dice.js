
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

function fudge(n) {
  let _n = n;
  if(_n == null)
    _n = 4;

  let results = dice_n(_n, 6);

  let f = {rolls: [], total: 0};
  for(let i = 0; i < results.rolls.length; ++i) {
    let current = results.rolls[i];
    switch(current) {
      case 1:
      case 2:
        f.rolls.push(-1);
        f.total -= 1;
        break;
      case 3:
      case 4:
        f.rolls.push(0);
        break;
      case 5:
      case 6:
        f.rolls.push(1);
        f.total += 1;
        break;
    }
  }

  return f;
}

// export {dice, dice_n, fudge};
