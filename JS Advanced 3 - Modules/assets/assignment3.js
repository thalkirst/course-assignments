        'use strict';

        /*         Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
        Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
        Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.
         */

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

        async function getUsers() {
            await fetch('./assets/users.json')
                .then(response => response.json())
                .then(data => handleList(data.users, 'remote'));
        }

        function checkUsers() {
            if (localStorage.getItem('users')) {
                let array = JSON.parse(localStorage.getItem('users'))
                handleList(array, 'local');
            } else {
                getUsers();
            }
        }

        export {
            checkUsers as checkUsers,
            createUserEntries as createUserEntries,
            getUsers as getUsers,
            handleList as handleList
        }
