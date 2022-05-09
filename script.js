(function() {
    const gameBoard = document.querySelector(".gameboard");
    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " ", ];
    console.log(gameBoard);

    board.forEach(function(item) {
        const newdiv = document.createElement("div");
        newdiv.innerHTML = item;
        newdiv.classList.add("div");
        gameBoard.appendChild(newdiv);
        console.log(item);
    });
})();

player