const progress = document.querySelector('.progress');
const progressSteps = document.querySelectorAll('.steps');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.container');

let currentActive = 0;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > progressSteps.length) {
        currentActive = progressSteps.length;
    }
    update('next');
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update('prev');
});

function update(button) {
    if (button === 'next') {
        container.classList.remove('light-' + (currentActive - 1));
    } else if (button === 'prev') {
        container.classList.remove('light-' + (currentActive + 1));
    }
    container.classList.add('light-' + (currentActive));
    //progress.style.width = ((currentActive - 1) / (progressSteps.length - 1)) * 100 + '%';
    // progressSteps.forEach((step, index) => {        
    //     if (index < currentActive) {
    //         step.classList.add('active');            
    //     } else {
    //         step.classList.remove('active');
    //     }
    // });

    if (currentActive === 1) {
        prev.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
    }

    if (currentActive === progressSteps.length) {
        next.classList.remove('active');
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
        next.classList.add('active');
    }
}