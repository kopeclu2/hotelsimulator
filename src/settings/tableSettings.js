const monthDays = () => {
  let array = [];
  var i;
  for (i = 1; i <= 31; i++) {
    array = [...array, i];
  }
  console.log(array);
  return array;
};
export const rowHeadersBlueTwo = [
  'Advance(non-ref)',
  'Realease pro advance',
];
export const rowHeaders = [
  'Pokoj vyssi kategorie',
  'Provize OTA',
  'Sleva pro firemni klientku',
  'Sleva pro firemni klientku "s akci"',
  'Provize/sleva CK individual',
  'Provize/sleva CK skupinove',
  'Gratuita',
];
export const rowHeadersGreenOne = [
  'Celkem pokojů',
  'Celkem prodáno',
  'Celkem zbývá',
];
export const rowHeadersGreenTwo = [
  'Prodáno standard',
  'Zbývá k prodeji stanadard',
  'Prodáno vyšší kategorie',
  'Zbývá k prodeji vyšší kategorie',
];
const headersColumn = monthDays();
export default headersColumn;
