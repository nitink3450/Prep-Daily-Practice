const div = document.getElementById('data');
fetch('https://api.publicapis.org/entries')
  .then((response) => response.json())
  .then((data) => {
    data.entries.forEach(function (ele) {
      const li = document.createElement('li');
      //console.log(ele);
      li.innerText = ele.Description;
      li.style.cursor = 'pointer';

      div.appendChild(li);
    });
  });

// event bubbling is a default behaviour of javascript
// event delegation is when you attach event listner to other element who is kind of proxy for the other element

// event delegation

div.addEventListener('click', function cb(event) {
  event.target.style.color = 'green';
});

// a event happened -->eventObject dispatched -->cb(eventObject)

// Create a todolist app