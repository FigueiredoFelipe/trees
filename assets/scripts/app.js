// window.addEventListener('click', () => {
//   document.getElementById('song').play();
// });

let cb = document.querySelector('#cb');

cb.addEventListener('click', (event) => {
  console.log('val: ', cb.checked);
  if (cb.checked) {
    document.getElementById('song').play();
  } else {
    document.getElementById('song').pause();
  }
});
