import orderByProps from '../js/sort';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const expected = [
  { key: 'name', value: 'мечник' },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
  { key: 'level', value: 2 },
];

test('тестируем результат сортировки свойств объекта', () => {
  expect(orderByProps(obj, ['name'])).toEqual(expected);
});
