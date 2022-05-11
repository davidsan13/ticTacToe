const xMark = "X"
const oMark = 'O'

const game = (function() {
    const gameBoard = document.querySelector(".gameboard");
    let board = ["X ", "O ", " ", " ", " ", " ", " ", " ", " ", ];

    const setMark = (index, mark) => {
        board[index] = mark;
    };

    const getMark = (index) => {
        return board[index]
    };

    function render() {
        var counter = 0;
        board.forEach(function(item) {
            const newdiv = document.createElement("div");
            newdiv.innerHTML = item;
            newdiv.classList.add("cell");
            newdiv.setAttribute('data-cell', counter)
            gameBoard.appendChild(newdiv);
            counter++
            console.log(item);
        });

    }
    
    return {
        setMark,
        getMark,
        render,
        
})();

game.render()

const gridItems = document.querySelectorAll('.cell');
gridItems.forEach(item => { 
    item.addEventListener('click', (e) => {
        console.log(e.target.classList.add(xMark))
        let cell1 = e.target.dataset.cell;
        game.board[cell1] = xMark;
        game.removeCell();
        game.render();
        console.log(e.target.dataset.cell)
        
    })
});


let player = (playerName, marker) => {
    playerName
    marker
}

const displayController = () => {

}