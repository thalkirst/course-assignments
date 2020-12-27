'use strict';

/*         Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.
 */

const url = './data/users.json';

function createUserEntries(firstName, lastName) {
    const container = document.querySelector('.users');
    let paragraph = document.createElement("P");
    paragraph.textContent = firstName + ' ' + lastName;
    container.appendChild(paragraph);
}

function handleList(array, source) {
    if (source = 'remote') {
        localStorage.setItem('users', JSON.stringify(array))
    }
    for (let i = 0; i < array.length; i++) {
        let firstName = array[i].firstName;
        let lastName = array[i].lastName;
        createUserEntries(firstName, lastName);
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


const getUsers = async () => {
    let data = [];
    try {
        const response = await fetch('./data/users1.json');
        if (response.status > 399) {
            alert('The application is offline');
            throw new Error('The application is offline');
        }
        data = await response.json();

    } catch (error) {
        if (localStorage.getItem('users')) {
            let array = JSON.parse(localStorage.getItem('users'))
            handleList(array, 'local');
        } else {
            alert('Localstorage is empty');
            throw new Error('Localstorage is empty');
        }

    } finally {
        return data;
    }
}

async function checkUsers(repeatCount = 10, delay = 5) {
    delay = delay * 1000;
    if (localStorage.getItem('users')) {
        let array = JSON.parse(localStorage.getItem('users'))
        handleList(array, 'local');
        repeatCount = 0;
    }
    for (let i = 1; i < repeatCount + 1; i++) {
        let array = await getUsers();
        array = array.users;
        if (array !== undefined) {
            handleList(array, 'remote');
            break;
        } else {
            sleep(delay);
        }
    }
}

checkUsers(3, 3);
