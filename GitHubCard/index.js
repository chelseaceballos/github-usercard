import axios from "axios" // installed axios from npm 
// console.log("checkout axios \n \n", axios) // check console to see if axios was successfully added

// STEP 4
const cards = document.querySelector(".cards");
/*
✅  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// console.log('1.fetch data from axios');

// axios
//   .get(`https://api.github.com/users/chelseaceballos`)
//   .then((futureData) =>{
//     //future code for when data arrives will be here
//     //can assume that data is already here
//     console.log('2. fetch data from axios', futureData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   console.log('3. fetch data from axios');




/*
✅ STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
✅
    Skip to STEP 3. 🧐 what? 
*/

/*
✅  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/ // line 5!!!

// I looked up past instructors github accounts and my mentor's github account to use in this project
// of course theres examples at the bottom of the page, silly me 

const followersArray = [
  axios
  .get(`https://api.github.com/users/ChelseaCeballos`),
  axios
  .get(`https://api.github.com/users/BrityHemming`),
  axios
  .get(`https://api.github.com/users/gcrev93`),
  axios
  .get(`https://api.github.com/users/omaddoc`),
  axios
  .get(`https://api.github.com/users/dustinmyers`)
];
// console.log(gitHubAccounts);


/*
  ✅STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
// line 69- 79 could be right under line 56, but for the sake of step 5 it is here
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
  ✅STEP 3: Create a function that accepts a single object as its only argument.
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
function createCard(person) {
  //create each element above
  const card = document.createElement('div');
  const image = document.createElement('img');
  const info = document.createElement('div');
  const name= document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const url = document.createElement('a'); // can you create an element and pass a function into it to make a new tab? window.open('a', "_blank"); ?
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  

  // add classes
  card.classList.add('card');
  name.classList.add('name');
  username.classList.add('username');
  image.classList.add('img');

  // set the content
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
  
  //APPEND
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

  // always return 
  return card;
};


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
