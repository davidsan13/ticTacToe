const xMark = "X"
const oMark = 'O'

const game = (function() {
    const gameBoard = document.querySelector(".gameboard");
    const _board = [" ", " ", " ", " ", " ", " ", " ", " ", " ", ];

    const setMark = (index, mark) => {
        _board[index] = mark;
    };

    const getMark = (index) => {
        return _board[index]
    };

    function render() {
        var counter = 0;
        _board.forEach(function(item) {
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
    }    
})();

game.render()






const player = (playerName, marker) => {
    const getMark = () => {
        return marker
    }
    const getName = () => {
        return playerName
    }
    return {
        getMark,
        getName
    }
}

const displayController = (() => {
    const gridItems = document.querySelectorAll('.cell');
    gridItems.forEach(item => { 
        item.addEventListener('click', (e) => {
            // console.log(e.target.classList.add(xMark))
            let index = e.target.dataset.cell;
            // console.log(cell1)
            game.setMark(index, Player.getMark());
            e.target.textContent = game.getMark(index);
            switchPlayer(Player)
        })
    });

    let switchPlayer = currentPlayer =>
        (currentPlayer.getName() === 'player1') ? Player = player2 : Player = player1
    
    // updateBoard
    // gameOver
    

})();

// createPlayer() => {

// }
const player1 = player("player1", 'X');
const player2 = player("player2", 'O');

var Player = player1;
function switchPlayer(currentPlayer){
    if (currentPlayer.getName() == 'player1') {
        console.log('hello')
        Player = player2
        console.log(currentPlayer.getName())
    } 
    
   
}