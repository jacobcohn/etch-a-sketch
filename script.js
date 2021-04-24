// all querySelectors
const gridContainer = document.querySelector('#gridContainer');
const clearBtn = document.querySelector('#clearBtn');
const sizeChanger = document.querySelector('#sizeChanger');
const sizeDisplay = document.querySelector('#sizeDisplay');
const colorOptions = document.querySelectorAll('.color');
const gridLines = document.querySelectorAll('.gridLines');
const allBtns = document.querySelectorAll('button'); 

// a is the number of columns and rows
let a = sizeChanger.value;
let allGrids;
let colorSelected = 'black';

resetGrid();

function resetGrid () {
    displaySize();
    // actually creates the columns
    gridContainer.style.cssText = `
        grid-template-columns: 0;
        grid-template-columns: repeat(` + a + `, 1fr);
        grid-template-rows: 0;
        grid-template-rows: repeat(` + a + `, 1fr);
        gap:` + gridLinesClass();
    ;
    // creates all of the divs for the grid
    gridContainer.innerHTML = '';
    for (let i = 0; i < (a ** 2); i++) {
        const oneGrid = document.createElement('div');
        gridContainer.appendChild(oneGrid);
        oneGrid.style.cssText = 'background: white';
        oneGrid.classList.toggle('one-grid');
    };
    // updates allGrid variable
    allGrids = document.querySelectorAll('.one-grid');
    return;
}

// each grid will change colors when mouse enters oneGrid
gridContainer.addEventListener('mouseenter', () => {
    allGrids.forEach(item => {
        item.addEventListener('mouseenter', e => {
            e.target.style.cssText = `background: ` + colorSelectedFunction();
        });
    });
});

// allGrids will change colors to white
// when clearBtn is clicked
clearBtn.addEventListener('click', () => {
    allGrids.forEach(item => {
        item.style.cssText = 'background: white';
    });
});

// update the sizeChanger's value when slider changes
sizeChanger.oninput = () => {
    document.innerHTML = this.value;
};

// when sizeChanger's value changes, then
// "a" will also change
sizeChanger.addEventListener('change', () => {
    a = sizeChanger.value;
    resetGrid();
});

function displaySize () {
    sizeDisplay.innerHTML = ('Size: ' + a + ' x ' + a);
    return;
};

// changes colors
colorOptions.forEach(item => {
    item.addEventListener('click', e => {
        colorSelected = e.target.value;
    });
});

function rainbow() {
    const randomNumber = Math.floor(Math.random() * 6);
    switch (randomNumber) {
        case 0:
            return('red');
        case 1:
            return('orange');
        case 2:
            return('yellow');
        case 3:
            return('green');
        case 4:
            return('blue');
        case 5:
            return('purple');
    }
};

function colorSelectedFunction () {
    if (colorSelected === 'rainbow') {
        return(rainbow());
    } else return(colorSelected);
};

// changes selected when another color is clicked
colorOptions.forEach(item => {
    item.addEventListener('click', e => {
        colorOptions.forEach(item => {
            if (item.classList.contains('selected')) {
                item.classList.toggle('selected');
            }
        });
        item.classList.toggle('selected');
    });
});

// turns grid lines on and off
gridLines.forEach(item => {
    item.addEventListener('click', e => {
        gridLines.forEach(item => item.classList.toggle('selected'));
        gridContainer.style.cssText = `
        grid-template-columns: 0;
        grid-template-columns: repeat(` + a + `, 1fr);
        grid-template-rows: 0;
        grid-template-rows: repeat(` + a + `, 1fr);
        gap: ` + gridLinesClass();
    });
});

// gives value of whichever gridLines is selected
function gridLinesClass() {
    let gridLinesClassResult;
    gridLines.forEach(item => {
        if (item.classList.contains('selected')) {
            gridLinesClassResult = item.value;
        };
    });
    return(gridLinesClassResult);
};