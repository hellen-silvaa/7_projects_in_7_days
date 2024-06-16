// Seleciona os elementos do DOM para os relógios digital e analógico
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// Função para atualizar o relógio
function updateClock() {

    // Aqui conseguimos obter a data e hora atuais
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Atualiza o relógio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Calcula os ângulos de rotação dos ponteiros
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    // Aplica a rotação aos ponteiros do relógio analógico
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// Função para adicionar um zero à esquerda se o número for menor que 10
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função para atualizar o relógio imediatamente ao carregar a página
updateClock();
