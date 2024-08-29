
function data_lookup_single(data, roll) {

  let d = roll;
  if(d == null) {
    d = dice(data.length - 1);
  }

  return {roll: d, result: data[d] };
}


function data_lookup_range(data, roll) {

  let result = null;
  for(let i = 1; i <= data.length - 1; ++i) {
    let current = data[i];
    if(current[0] <= roll && roll <= current[1]) {
      result = current;
      break;
    }
  }

  return {result: result, roll: roll};
}
