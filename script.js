const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

sidebar.addEventListener('mouseenter', expandMenu);
sidebar.addEventListener('mouseleave', collapseMenu);

function expandMenu() {
    sidebar.style.width = '250px'; // Adjust this value to match the desired width
    content.style.marginLeft = '250px'; // Adjust this value to match the desired width
}

function collapseMenu() {
    sidebar.style.width = '50px'; // Adjust this value to match the desired collapsed width
    content.style.marginLeft = '50px'; // Adjust this value to match the desired collapsed width
}