// Import stylesheets
import './style.css';

// Write Javascript code!
const app = document.getElementById('app');

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  // Begin accessing JSON data
  var data = JSON.parse(this.response);
  
  // Check if request status was successful
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      const title = document.createElement('h2');
      title.textContent = movie.title;
      const description = document.createElement('p');
      description.textContent = movie.description;

      const image = document.createElement('img');
      // Create a random number between 0 and 200
      let randNum = Math.floor(Math.random() * 201);
      console.log(randNum)
      let src = `https://picsum.photos/id/${randNum}/500/200`;
      image.setAttribute('src', src);

      app.appendChild(card);
      card.appendChild(cardBody);
      cardBody.appendChild(image);
      cardBody.appendChild(title);
      cardBody.appendChild(description);

    })
  } else {
    // Request was no successful, console log error.
    console.log('error');
  }
}

// Send request
request.send();