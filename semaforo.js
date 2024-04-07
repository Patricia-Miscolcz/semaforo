const img = document.getElementById('img');
const buttons = document.getElementById('buttons')

let colorIndex = 0;
let intervalId=null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id](); //chamando um método de um objeto
    
}

//uma maneira resumida de fazer isso abaixo seria
//colorIndex = colorIndex <2 ? ++colorIndex: 0;
//isso é um ternário, daí não preisa usar {} aí em baixo ficaria assim

// const nextIndex = () =>colorIndex = colorIndex <2 ? ++colorIndex: 0;

const nextIndex = () =>{
    if (colorIndex <2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}


    //usar função de intervalo do js
    const changecolor=()=>{
    const colors = ['red', 'yellow', 'green'] //cria um array de cores para troca
    const color = colors[colorIndex]; 
    turnOn[color]();
    nextIndex();

}


const stopAutomatic=() =>{
    clearInterval(intervalId);
}


// event.target.id - aonde for clicado com o mouse 

// criando funções dentro de um objeto literal
// aqui tenho um objeto que contém 3 funções
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changecolor,900) //executa o código a cada intervalo dado
}

buttons.addEventListener('click', trafficLight);

