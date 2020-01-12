const cb = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const labels = Array.from(document.querySelectorAll('label'));


document.addEventListener('keydown', handleSelection);
document.addEventListener('change', crossOffItem);

function handleSelection(e) {
    if(e.key === 'Shift') {

        let firstIndex = cb.findIndex(checkbox => checkbox.checked);
        let lastIndex = cb.length - (cb.slice().reverse().findIndex(checkbox => checkbox.checked));

        if(firstIndex === -1 || lastIndex === -1)
            return;

        if(firstIndex > lastIndex) {
            let temp = firstIndex;
            firstIndex = lastIndex;
            lastIndex = temp;
        }

        for(let i = firstIndex; i < lastIndex; i++)
        {
            cb[i].checked = true;
            labels[i].classList.add('strike');

        }
    }
}

function crossOffItem(e) {
    e.srcElement.labels[0].classList.toggle('strike');
}
