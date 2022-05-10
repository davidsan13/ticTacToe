const game = (function() {
    const gameBoard = document.querySelector(".gameboard");
    let board = ["X ", "O ", " ", " ", " ", " ", " ", " ", " ", ];
    console.log(gameBoard);

    
    function render() {
        var counter = 0;
        board.forEach(function(item) {
            const newdiv = document.createElement("div");
            newdiv.innerHTML = item;
            newdiv.classList.add("grid");
            newdiv.setAttribute('data-index', counter)
            gameBoard.appendChild(newdiv);
            counter++
            console.log(item);
        });

    }
    function updateBoard() {

    }
    return {
        board, 
        render,
    };
})();

game.render()

const gridItems = document.querySelectorAll('.grid');
gridItems.forEach((item) => { 
    item.addEventListener('click', (e) => {
        console.log(e.target.dataset.index)
    })
});


const player = (playerName, marker) => {
    playerName
    marker
}