// Ejercicio 2_1 BOM Meldung. Schreibe eine Funktion die beim Start von 10-0 runterzählt und dann die Nachricht verschwindet
// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze : window.onload, setInterval(), clearInterval(), getElementsByClassName()/getElementById(), if, else if


//versiónk
const count = document.getElementById('count')
const message = document.querySelector('.message')
const disappear = () => {
    let countInterval = setInterval(() => {
        // let x = count.innerHTML
        // x--
        // count.innerHTML = x
        count.innerHTML = --count.innerHTML
        // if (x == 0) {
            if (count.innerHTML == 0){
            clearInterval(countInterval)
            message.style.opacity = 0;
        }
    }, 1000)
    console.log("test");
}
window.onload = disappear


//así:
window.onload = function() {
    let intervalo = setInterval(zaehlen, 1000);

    let count = 10
    function zaehlen() {

        count--
        document.querySelector('#count').innerHTML = `${count}`;
        if (count === 0) {
            clearInterval(intervalo)
            document.querySelector('.message').style.opacity = 0;

            document.querySelector('.message').style.transition = 'all 3s linear';
        }
}
}


//...o con addEventListener():

// window.addEventListener('load', function() {
//     let intervalo = setInterval(zaehlen, 1000);

//     let count = 10
//     function zaehlen() {

//         count--
//         document.querySelector('#count').innerHTML = `${count}`;
//         if (count === 0) {
//             clearInterval(intervalo)
//             document.querySelector('.message').style.opacity = 0;

//             document.querySelector('.message').style.transition = 'all 3s linear';
//         }
//     }
// })

