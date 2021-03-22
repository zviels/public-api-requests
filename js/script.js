// Elements

const body = document.querySelector('body');
const gallery = document.querySelector('#gallery');
const searchBox = document.querySelector('.search-container');

// Variables

const employees = [];

// Getters

const getSearchButton = () => document.querySelector('#search-submit');
const getSearchInput = () => document.querySelector('#search-input');
const getCards = () => document.querySelectorAll('.card');
const getCardNames = () => document.querySelectorAll('.card-name');
const getModalContainer = () => document.querySelector('.modal-container');
const getClosingButton = () => document.querySelector('#modal-close-btn');
const getPreviousButton = () => document.querySelector('#modal-prev');
const getNextButton = () => document.querySelector('#modal-next');

// Auxiliary Functions

// createSearchBar

const createSearchBar = () => {

    const html = `<form action="#" method="get">
                    <input type="search" id="search-input" class="search-input" placeholder="Search ...">
                    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                  </form>`;  

    searchBox.insertAdjacentHTML('beforeend', html);

}

// handleGalleryCreation

const handleGalleryCreation = (list) => {

    createGallery(list);
    addGalleryListeners();

}

// handleModalCreation

const handleModalCreation = (card) => {

    if (getModalContainer())
        getModalContainer().remove();

    const employee = getEmployee(card);
    const details = getDetails(employee);
    
    createModal(details);
    addModalListeners(card);

    if (card === gallery.firstElementChild)
        getPreviousButton().remove();
    
    if (card === gallery.lastElementChild)
        getNextButton().remove();    

}

// createGallery

const createGallery = (list) => {

    gallery.innerHTML = '';

    list.forEach((employee) => {

        if (employees.length < 12)
            employees.push(employee);

        const html = `<div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src=${ employee.picture.medium } alt="Profile Picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${ employee.name.first } ${ employee.name.last }</h3>
                            <p class="card-text">${ employee.email }</p>
                            <p class="card-text cap">${ employee.location.city }, ${ employee.location.state }</p>
                        </div>`;
        
        gallery.innerHTML += html;

    });
    
}

// createModal

const createModal = ({ image, name, email, city, phone, street, state, postCode, birthday }) => {

    const html = `<div class="modal-container">
                    <div class="modal">
                        <button type="button" id="modal-close-btn" class="modal-close-btn btn"><strong>X</strong></button>
                        <div class="modal-info-container">
                            <img class="modal-img" src=${ image } alt="Profile Picture">
                            <h3 id="name" class="modal-name cap">${ name }</h3>
                            <p class="modal-text">${ email }</p>
                            <p class="modal-text cap">${ city }</p>
                            <hr>
                            <p class="modal-text">${ phone }</p>
                            <p class ="modal-text">${ street.number } ${ street.name }, ${ city }, ${ state } ${ postCode }</p>
                            <p class="modal-text">Birthday: ${ birthday }</p>
                        </div>
                    </div>
                    <div class="modal-btn-container">
                        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                        <button type="button" id="modal-next" class="modal-next btn">Next</button>
                    </div>    
                </div>`;

    body.insertAdjacentHTML('beforeend', html);

}

// filterEmployees

const filterEmployees = (value) => {

    const filteredEmployees = employees.filter((employee) => {

        const employeeName = employee.name.first + ' ' + employee.name.last;
        return employeeName.toLowerCase().includes(value.toLowerCase());

    });

    handleGalleryCreation(filteredEmployees);

}

// getEmployee

const getEmployee = (card) => {

    const email = card.querySelector('.card-text').textContent;
    return employees.find(employee => email === employee.email);
    
}

// getDetails

const getDetails = (employee) => {

    // formatDate

    const formatDate = (date) => {

        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const year = date.getFullYear();

        return month + '/' + day + '/' + year;
        
    }

    const birthday = formatDate(new Date(employee.dob.date));

    // Get All The Required Information & Build An Object That Is Easy To Work With

    const details = {

        image: employee.picture.medium,
        name: employee.name.first + ' ' + employee.name.last,
        email: employee.email,
        city: employee.location.city,
        phone: employee.phone,
        street: { name: employee.location.street.name, number: employee.location.street.number },
        state: employee.location.state,
        postCode: employee.location.postcode,
        birthday

    }

    return details;

}

// Event Listeners

const addButtonListener = () => getSearchButton().addEventListener('click', () => filterEmployees(getSearchInput().value));
const addInputListener = () => getSearchInput().addEventListener('input', (e) => filterEmployees(e.target.value));
const addGalleryListeners = () => getCards().forEach((card) => card.addEventListener('click', () => handleModalCreation(card)));

// addModalListeners

const addModalListeners = (card) => {

    // Add An Event Listener To The Closing Button & To The Modal Container

    getClosingButton().addEventListener('click', () => getModalContainer().remove());
    getModalContainer().addEventListener('click', (e) => {

        if (e.target.className === 'modal-container')
            e.target.remove();

    });

    // Add An Event Listener To The Previous Button & To The Next Button

    getPreviousButton().addEventListener('click', () => {

        const previousCard = card.previousElementSibling;

        if (previousCard) 
            handleModalCreation(previousCard);

    });

    getNextButton().addEventListener('click', () => {

        const nextCard = card.nextElementSibling;

        if (nextCard)
            handleModalCreation(nextCard);

    });
    
}

// A Function To Actually Add The Event Listeners

const addListeners = () => {

    addButtonListener();
    addInputListener();
    addGalleryListeners();

}

// Activation Functions

const run = () => {

    createSearchBar();

    fetch('https://randomuser.me/api/?results=12&nat=us')
        .then((res) => res.json())
        .then((users) => createGallery(users.results))
        .then(() => addListeners());

}

// Run The Script

run();