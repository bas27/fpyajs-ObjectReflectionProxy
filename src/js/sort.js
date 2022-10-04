function sortByKey(arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
}

export default function orderByProps(param1, param2) {
  const ar = [];
  const tmp = [];
  for (const prop in param1) {
    if (param2.includes(prop)) {
      ar.push(
        { key: prop, value: param1[prop] },
      );
    } else {
      tmp.push(prop);
    }
  }

  sortByKey(tmp);

  for (let i = 0; i < tmp.length; i += 1) {
    ar.push(
      { key: tmp[i], value: param1[tmp[i]] },
    );
  }
  return ar;
}
