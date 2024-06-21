const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano_keys');

const playNota = (nota) => {
    const audio = new Audio(`../notas/${nota}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNota(key.getAttribute('data-nota'));

    if(key.className.includes('black')){
        key.classList.add('black-pressed');
        return;
    };
    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {
    if(key.className.includes('black')){
        key.classList.remove('black-pressed');
        return;
    };
    key.style.background = 'white';
}

keys.forEach((key) =>{
    key.addEventListener('mousedown', () => handleMouseDown(key));

    key.addEventListener('mouseup', () => handleMouseUp(key));
});

checkbox.addEventListener('change', ({target}) => {
    if(target.checked){
        switcher.classList.add('switcher-active');
        keysSection.classList.remove('disablad-keys');
        return;
    } //else {
    //     switcher.classList.remove('switcher-active');
    //     keysSection.classList.add('disablad-keys');
    // }

    switcher.classList.remove('switcher-active');
    keysSection.classList.add('disablad-keys');
});

const keyDownMapper = {

    "a": () => handleMouseDown(keys[0]),
    "w": () => handleMouseDown(keys[1]),
    "s": () => handleMouseDown(keys[2]),
    "e": () => handleMouseDown(keys[3]),
    "d": () => handleMouseDown(keys[4]),
    "f": () => handleMouseDown(keys[5]),
    "t": () => handleMouseDown(keys[6]),
    "g": () => handleMouseDown(keys[7]),
    "y": () => handleMouseDown(keys[8]),
    "h": () => handleMouseDown(keys[9]),
    "u": () => handleMouseDown(keys[10]),
    "j": () => handleMouseDown(keys[11]),
    "k": () => handleMouseDown(keys[12]),
    "o": () => handleMouseDown(keys[13]),
    "l": () => handleMouseDown(keys[14]),
    "p": () => handleMouseDown(keys[15]),
    "ç": () => handleMouseDown(keys[16]),
    "Quote": () => handleMouseDown(keys[17]),
    "[": () => handleMouseDown(keys[18]),
    "]": () => handleMouseDown(keys[19]),
    "7": () => handleMouseDown(keys[20]),
    "5": () => handleMouseDown(keys[21]),
    "9": () => handleMouseDown(keys[22]),
    "6": () => handleMouseDown(keys[23]),

};

const keyUpMapper = {

    "a": () => handleMouseUp(keys[0]),
    "w": () => handleMouseUp(keys[1]),
    "s": () => handleMouseUp(keys[2]),
    "e": () => handleMouseUp(keys[3]),
    "d": () => handleMouseUp(keys[4]),
    "f": () => handleMouseUp(keys[5]),
    "t": () => handleMouseUp(keys[6]),
    "g": () => handleMouseUp(keys[7]),
    "y": () => handleMouseUp(keys[8]),
    "h": () => handleMouseUp(keys[9]),
    "u": () => handleMouseUp(keys[10]),
    "j": () => handleMouseUp(keys[11]),
    "k": () => handleMouseUp(keys[12]),
    "o": () => handleMouseUp(keys[13]),
    "l": () => handleMouseUp(keys[14]),
    "p": () => handleMouseUp(keys[15]),
    "ç": () => handleMouseUp(keys[16]),
    "Quote": () => handleMouseUp(keys[17]),
    "[": () => handleMouseUp(keys[18]),
    "]": () => handleMouseUp(keys[19]),
    "7": () => handleMouseUp(keys[20]),
    "5": () => handleMouseUp(keys[21]),
    "9": () => handleMouseUp(keys[22]),
    "6": () => handleMouseUp(keys[23]),

};

document.addEventListener('keydown', (evento) => {
    evento.preventDefault();
    //console.log(evento.code, evento.key);
    keyDownMapper[evento.key] ? keyDownMapper[evento.key]() : keyDownMapper[evento.code]?.();
});

document.addEventListener('keyup', (evento) =>{
    keyUpMapper[evento.key] ? keyUpMapper[evento.key]() : keyUpMapper[evento.code]?.();
    //keyUpMapper[evento.key]?.();
});

//------------------------------------------------

// outar alternativa
// document.addEventListener('keydown', (evento) => {
//     switch (evento.key) {
//         case 'a':
//             keys.addEventListener('click', handleMouseDown(keys[0]));
//             break;
        
//         case 'w':
//             keys.addEventListener('click', handleMouseDown(keys[1]))
//             break;
        
//         default:
//             break;
//     }

//     //console.log(evento.key)
//     //alert('Olá mundo')
// })

//---------------------------------------------------

// outra alternativa 
// document.addEventListener('keydown', (evento) => {
//     if(evento.key == 'a'){
//         handleMouseDown(keys[0])
//     }

//     if(evento.key == 'w'){
//         handleMouseDown(keys[1])
//     }

//     //console.log(evento.key)
//     //alert('Olá mundo')
// })
