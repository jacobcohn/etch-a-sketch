const gridContainer = document.querySelector('#gridContainer');

// a is the number of columns and rows
let a = 16;

gridContainer.style.cssText = `
    grid-template-columns: repeat(` + a + `, 1fr);
`;


for (let i = 0; i < (a ** 2); i++) {
    const grid = document.createElement('div');
    gridContainer.appendChild(grid);
    grid.style.cssText = 'background: white';
}