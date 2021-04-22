const gridContainer = document.querySelector('#gridContainer');

// a is the number of columns and rows
let a = 64;

gridContainer.style.cssText = `
    grid-template-columns: repeat(` + a + `, 1fr);
`;

// creates all of the divs for the grid
for (let i = 0; i < (a ** 2); i++) {
    const oneGrid = document.createElement('div');
    gridContainer.appendChild(oneGrid);
    oneGrid.style.cssText = 'background: white';
    oneGrid.classList.toggle('one-grid');
}

const allGrids = document.querySelectorAll('.one-grid');

// allGrids will change colors when mouse enters oneGrid
allGrids.forEach(item => {
    item.addEventListener('mouseenter', e => {
        e.target.style.cssText = 'background: black';
    });
});

// allGrids will change colors to white
// when clearBtn is clicked
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    allGrids.forEach(item => {
        item.style.cssText = 'background: white';
    });
});