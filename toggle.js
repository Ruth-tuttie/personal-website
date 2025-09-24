const toggle = document.querySelector('.toggle');
const modes = document.querySelectorAll('.logo');
const light = document.querySelector('#js-light');


    modes.forEach(mode => {
      mode.addEventListener('click', () => {
        mode.classList.remove('hidden')
        mode.classList.add('hidden');
        
      })
    })


