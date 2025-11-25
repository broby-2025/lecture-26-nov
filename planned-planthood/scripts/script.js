console.log('Hejsan');

setupPage();

function setupPage() {
    const plantRefs = document.querySelectorAll('.plant');
    plantRefs.addEventListener('click', eventFunction);

}

function eventFunction(e) {
    if(e.target.tagName === 'BTN') {
        removePlant(e.currentTarget);
    }
}

function removePlant(element) {
    element.remove();
}