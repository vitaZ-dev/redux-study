const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');
let count = 0;
number.innerText = count;
const handleAdd = () => {
  console.log('plus');
  count = count + 1;
  number.innerText = count;
}
const handleMinus = () => {
  console.log('minus');
  count = count - 1;
  number.innerText = count;
}
plus.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)