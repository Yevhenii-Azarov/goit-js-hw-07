const inputElem = document.querySelector('#name-input');
 const outputElem = document.querySelector('#name-output');

 inputElem.addEventListener('input', (event) => {
    event.preventDefault();
    
     const user = inputElem.value.trim();
     if (user === " ") {

         outputElem.textContent = 'Anonymous';
     }
     else {
        
        outputElem.textContent = user;
    }

 });
console.log(inputElem);