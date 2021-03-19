// Elements

const gallery = document.querySelector('#gallery');
const searchBox = document.querySelector('.search-container');

// Getters

const getSearchButton = () => document.querySelector('#search-submit');
const getSearchInput = () => document.querySelector('#search-input');
const getCardNames = () => document.querySelectorAll('.card-name');

// Auxiliary Functions

// createSearchBar

const createSearchBar = () => {

    const html = `<form action="#" method="get">
                    <input type="search" id="search-input" class="search-input" placeholder="Search ...">
                    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                  </form>`;  

    searchBox.insertAdjacentHTML('beforeend', html);

}

// createGallery

const createGallery = (users) => {

    users.forEach((user) => {

        const html = `<div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src=${ user.picture.medium } alt="Profile Picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${ user.name.first } ${ user.name.last }</h3>
                            <p class="card-text">${ user.email }</p>
                            <p class="card-text cap">${ user.location.city }, ${ user.location.state }</p>
                        </div>`;
        
        gallery.insertAdjacentHTML('beforeend', html);

    });
    
}

// filterUsers

const filterUsers = (value) => {
    
    getCardNames().forEach((cardName) => {

        const card = cardName.parentNode.parentNode;

        if (!(cardName.textContent.includes(value)))
            card.style.display = 'none';
        
        else
            card.style.display = '';    

    });

}

// Event Listeners

const addListeners = () => {

    const addButtonListener = () => getSearchButton().addEventListener('click', () => filterUsers(getSearchInput().value));
    const addInputListener = () => getSearchInput().addEventListener('input', (e) => filterUsers(e.target.value));
    
    // Actually Add The Event Listeners

    addButtonListener();
    addInputListener();

}

// Fetch Functions

const fetchUsers = (url) => fetch(url)
                    .then((res) => res.json());

// Activation Functions

const run = () => {

    createSearchBar();

    fetchUsers('https://randomuser.me/api/?results=12&nat=us')
        .then((users) => createGallery(users.results));

    addListeners();    

}

// Run The Script

run();