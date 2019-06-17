const monthDays = () => {
  let array = [];
  var i;
  for (i = 1; i <= 31; i++) {
    array = [...array, i];
  }
  console.log(array);
  return array;
};
export const rowHeaders = [
  'Pokoj vyssi kategorie',
  'Provize OTA',
  'Sleva pro firemni klientku',
  'Sleva pro firemni klientku "s akci"',
  'Provize/sleva CK individual',
  'Provize/sleva CK skupinove',
  'Gratuita',
];
const headersColumn = monthDays();
export default headersColumn;
