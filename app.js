'use strict';

function convert() {
  const mile = document.querySelector('#mile').value;
  const km = Math.floor(mile * 1.60934);

  const result = document.querySelector('#result');
  result.innerHTML = mile + 'マイルは' + km + 'キロメートルです。';
}

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   convert();
// });

document.querySelector('#btn').addEventListener('click', () => {
  convert();
});


// function convert() {
//   const mile = document.querySelector('#mile').value;
//   const km = Math.floor(mile * 1.60934);

// const result = document.querySelector('#result');
// result.innerHTML = mile + "マイルは" + km + "キロメートルです。";
// }

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   convert();
// });