const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

sidebar.addEventListener('mouseenter', expandMenu);
sidebar.addEventListener('mouseleave', collapseMenu);

function expandMenu() {
    sidebar.style.width = '30%'; // Adjust this value to match the desired width
    content.style.marginLeft = '30%'; // Adjust this value to match the desired width
}

function collapseMenu() {
    sidebar.style.width = '15%'; // Adjust this value to match the desired collapsed width
    content.style.marginLeft = '15%'; // Adjust this value to match the desired collapsed width
}