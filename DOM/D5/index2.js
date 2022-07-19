const button =document.getElementById('btn1');
button.addEventListener('click',() => {
    const image = document.createElement('img');
    // image.src="PHOTO 1MB-min.jpg"//local
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iR5RLfAPS5rvRtD9UiVdhCllb1qiwEYJ6t02WZcdmnJjdlzne4Y5XOU9paLiJEilrZ0&usqp=CAU"
    image.style.height='100px'
    image.style.width='100px'
    const div = document.getElementById('photo');
    div.appendChild(image);
})
