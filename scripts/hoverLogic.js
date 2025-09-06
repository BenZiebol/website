
const boxes = document.querySelectorAll('.hover-box');
const infoBox = document.getElementById('info-box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        infoBox.innerHTML = box.dataset.text;
    });
/*
    box.addEventListener('mouseleave', () => {
        infoBox.textContent = "Hover over a project to see more info here!";
    });
*/
});