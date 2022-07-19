//Dynamic elements

/// first way -->using methods

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  // we will append elements

  const element = document.createElement('a'); // anchor tag
  element.href = 'https://google.com';
  element.target = '_blank';
  element.innerText = 'Google.com';
  // element creation done
  // appendchild adds only one element to the existing element
  const div = document.getElementById('append');
  div.appendChild(element);
});

const btn2 = document.getElementById('btn2');

const array = ['john', 'rupert', 'joe', 'ritika', 'sahil'];
btn2.addEventListener('click', function () {
  const elementArray = [];
  /*
  const element1 = document.createElement('li');
  element.innerText = array[0];
  const element2 = document.createElement('li');
  element.innerText = array[1];

  const element3= document.createElement('li');
  element.innerText = array[2];
*/
  const div = document.getElementById('append');
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement('li');
    element.innerText = array[i];
    //div.appendChild(element);
    //
    elementArray.push(element);
  }

  //if you want to appned multiple elements at a time
  // use append

  div.append(...elementArray);
});

//You have to create a Dynamic image element and append it to div. //img
