const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxChecked));

let lastChecked;

function checkboxChecked(e) {
    if(e.shiftKey && this.checked) {

        let inbetween = false;

        checkboxes.forEach(checkbox => {
            if(checkbox === lastChecked || checkbox === this)
            {
                inbetween = !inbetween;
            }

            if (inbetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}
