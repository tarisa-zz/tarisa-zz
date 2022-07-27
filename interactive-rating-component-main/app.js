const form = document.querySelector('form');

// const checked = document.querySelector('input[type=radio]:checked');
form.addEventListener('submit', function(e){
e.preventDefault();
const checked = document.querySelector('input[type=radio]:checked');
    const rating = checked.value;
    const yrating = document.querySelector('#selected b');
    yrating.innerText = rating;
    const main = document.querySelector('#main');
    const thankyou = document.querySelector('#thankyou');
    const showhide = document.getElementsByClassName('showhide');
    console.log(showhide);
    main.setAttribute('class', 'showhide' );
    thankyou.removeAttribute('class', 'showhide' );
})