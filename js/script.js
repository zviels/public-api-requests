// Elements

const gallery = document.querySelector('#gallery');

// Auxiliary Functions

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

// Fetch Functions

const fetchUsers = (url) => fetch(url)
                    .then((res) => res.json());

// Run The Script

fetchUsers('https://randomuser.me/api/?results=12&nat=us')
    .then((users) => createGallery(users.results));
