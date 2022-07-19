const heading = document.getElementById('watch');
/*
setInterval(() => {
  const innerText = heading.innerText;

  let number = parseInt(innerText);
  number++;

  heading.innerText = number;
}, 1000);
*/

setInterval(() => {
  //const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const date = moment().format('HH:mm:ss');
  heading.innerText = date;
}, 1000);
