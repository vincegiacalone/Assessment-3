console.log("hello world");



function handleSubmit(evt) {
    evt.preventDefault();
    alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function displayCompliment() {
    alert('You have excellent taste in pictures!');
}

let image = document.querySelector('img');

image.addEventListener('mouseover', displayCompliment);