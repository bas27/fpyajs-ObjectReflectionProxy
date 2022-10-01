const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

// orderByProps(obj, ["name", "level"])

function sortByKey(arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
}

function orderByProps(param1, param2) {
  const ar = [];
  const tmp = [];
  for (const prop in param1) {
    if (obj.hasOwnProperty(prop)) {
      if (param2.includes(prop)) {
        ar.push(
          { key: prop, value: param1[prop] },
        );
      } else {
        tmp.push(prop);
      }
    }
  }

  sortByKey(tmp);

  for (let i = 0; i < tmp.length; i++) {
    ar.push(
      { key: tmp[i], value: obj[tmp[i]] },
    );
  }
  return ar;
}

console.log(orderByProps(obj, ['name', 'good']));
