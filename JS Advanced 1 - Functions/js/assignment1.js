/* Írj egy függvény kifejezést arrow function segítségével. A függvény neve handleClick legyen A függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, amely kattintásra kiírja a gomb szövegét a konzolra. A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőt! */



const handleClick = () => {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.addEventListener('click', () => console.log(button.textContent)));
};

handleClick();




