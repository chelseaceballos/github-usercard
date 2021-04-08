/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Done-zoe

    Skip to STEP 3. Done-zoe
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

//entry point here
const cards = document.querySelector(".cards");

const followersArray = [
  axios
  .get(`https://api.github.com/users/chelseaceballos`),
  axios
  .get(`https://api.github.com/users/tetondan`),
  axios
  .get(`https://api.github.com/users/dustinmyers`),
  axios
  .get(`https://api.github.com/users/justsml`),
  axios
  .get(`https://api.github.com/users/luishrd`),
  axios
  .get(`https://api.github.com/users/bigknell`)
];


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
 
Promise.all(followersArray)
  .then(person => {
    person.forEach(attrs => {
      console.log(attrs);
      cards.appendChild(createCard(attrs.data));
    });
  })
  .catch(error => {
    alert("ERROR: ", error);
  });


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker (user) {
//creating elements
const card = document.createElement('div');
const image = document.createElement('img');
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const username = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const URL = document.createElement('a')
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

//Adding class names
card.classList.add('card');
    // cardInfo.classList.add('card-info');
name.classList.add('name');
username.classList.add('username')
image.classList.add('img');

//set the content
image.src = person.avatar_url; // avatar_url not image_url
  name.textContent = person.name;
  username.textContent = person.login;
  location.textContent = `Location: ${person.location}`;
  profile.textContent = `Profile: `;
  url.href = person.html_url;
  url.textContent = `${person.html_url}`;
  followers.textContent = `Followers: ${person.followers}`;
  following.textContent = `Following: ${person.following}`;
  bio.textContent = `Bio: ${person.bio}`;


//append to the dom
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(url);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
//Return card
return card;

};

/*
  List of LS Instructors Github username's:
  https://github.com/chelseaceballos
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
