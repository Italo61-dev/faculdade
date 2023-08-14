const logArea = document.getElementById("logArea");
const buttons = {
    moveUp: document.getElementById("moveUp"),
    moveDown: document.getElementById("moveDown"),
    moveLeft: document.getElementById("moveLeft"),
    moveRight: document.getElementById("moveRight"),
    grab: document.getElementById("grab"),
    release: document.getElementById("release"),
    pause: document.getElementById("pause"),
    showLog: document.getElementById("showLog")
};

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const keyCode = event.keyCode || event.which; // Obter o código da tecla
    
    switch (keyCode) {
        case 38: // Código da tecla "ArrowUp"
            logOperation("Movendo para cima");
            break;
        case 40: // Código da tecla "ArrowDown"
            logOperation("Movendo para baixo");
            break;
        case 37: // Código da tecla "ArrowLeft"
            logOperation("Movendo para esquerda");
            break;
        case 39: // Código da tecla "ArrowRight"
            logOperation("Movendo para direita");
            break;
        case 80: // Código da tecla "P"
            logOperation("Pegando objeto");
            break;
        case 83: // Código da tecla "S"
            logOperation("Soltando objeto");
            break;
        case 17: // Código da tecla "Control"
            logOperation("Pausando");
            break;
        case 76: // Código da tecla "L"
            displayLog();
            break;
    }
});

buttons.showLog.addEventListener("click", displayLog);

function logOperation(operation) {
    const logEntry = document.createElement("p");
    logEntry.textContent = operation;
    logArea.appendChild(logEntry);
}

function displayLog() {
    logArea.style.display = "block";
}
