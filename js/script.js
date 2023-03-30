let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hoursNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg)`
        minuteArrow.style = `transform: rotate(${minutes}deg)`
        hourArrow.style = `transform: rotate(${hours}deg)`
        
        hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        
        setTimeout(() => clock(),1000);
}
clock()


// Рекурсия - это когда функция вызывет саму себя
// setTimeout() - создает нам задержку, время задержки указывается в миллисекундах


// let i = 0;

// function rek() {
//     if(i < 100){
//         console.log(i);
//         i++
//         setTimeout(() => rek(), 1000);
//     }
// }
// rek()


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        remoteActiv()
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}

function remoteActiv() {
    for (let x = 0; x < links.length; x++) {
        links[x].classList.remove('active')
        tabs[x].classList.remove('active')
    }
}







let secc = document.querySelector('.stopwatch__seconds'),
    min = document.querySelector('.stopwatch__minutes'),
    hourr = document.querySelector('.stopwatch__hours'),
    stopp = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');


stopp.addEventListener('click', function() {
    if (stopp.innerHTML == 'start') {
        stopp.innerHTML = 'stop';
        let i = 0; 
        setTimeout(() => {
           stopWatch(this,i)
        }, 1000);

        span.classList.add('active_clear')

    }else if(stopp.innerHTML == 'stop') {
        stopp.innerHTML = 'clear'
    }else {
        stopp.innerHTML = 'start'
        secc.innerHTML = 0;
        min.innerHTML = 0;
        hourr.innerHTML = 0;

        span.classList.remove('active_clear')

    }
})


function stopWatch(btn, i) {
    if (stopp.innerHTML == 'stop') {
        if (i == 59) {
            i = 0;
            secc.innerHTML = i;
            if (min.innerHTML == 59) {
                min.innerHTML = 0;
                hourr.innerHTML++;
            }else{
                min.innerHTML++;
            }
        }else{
            i++;
            secc.innerHTML = i;
        }
        setTimeout(() => {
            stopWatch(btn, i)
        }, 1000);
    }
}

