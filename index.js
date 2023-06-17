// Első feladat

var tároló = [
  [1, 2, 3],
  ['alma', 'banán', 'körte'],
  { segítő: 'János', kor: 31 },
  'Károly', 'Ricsi'
];

function keresés() {
  var név = document.getElementById('név').value;
  var válasz = document.getElementById('válasz');

  if (tároló.includes(név)) {
    válasz.textContent = 'Regisztrált tag vagy.';
    var segítő = tároló[2].segítő;
    válasz.textContent += ' A Te segítőd: ' + segítő + '( hozzá fordulhatsz segítségért)';
  } else {
    válasz.textContent = 'Nem vagy regisztrált tag.';
  }
}

// Második feladat

const számokTömb = [10, 30, 50, 70, 90, 100];

function számolás() {
  const number = parseInt(document.getElementById('szám').value);
  const következőSzám = számokTömb.find(num => num > number);
  const válasz2 = document.getElementById('válasz2');

  if (következőSzám !== undefined) {
    válasz2.textContent = 'A következő szám: ' + következőSzám;
  } else {
    válasz2.textContent = 'Nincs következő szám.';
  }
}
