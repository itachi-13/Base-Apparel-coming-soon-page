const form = document.getElementById('form');
const p = document.querySelectorAll('.none');
const input = document.querySelector('input');

form.addEventListener('submit', e => {
    
    const email = form['email'].value;

    if(!isValid(email)) {
        e.preventDefault();
        input.style.border = '2px solid hsl(0, 93%, 68%)';
        input.style.outline = 'none';
        p[0].style.display = 'block';
        p[1].style.display = 'block';
    }
});



function isValid(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};