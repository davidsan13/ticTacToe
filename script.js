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






let player = (playerName, marker) => {
    let getMark = () => {
        return marker
    }
    let getName = () => {
        return playerName
    }
    return {
        getMark,
        getName
    }
}

let displayController = (() => {
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
    let gridItems = document.querySelectorAll('.cell');
    gridItems.forEach(item => { 
        item.addEventListener('click', (e) => {
            // console.log(e.target.classList.add(xMark))
            let index = e.target.dataset.cell;
            if(isAvailable(index)) {
                game.setMark(index, Player.getMark())
                e.target.textContent = game.getMark(index);
                if(checkWinner(Player.getMark())) {
                    console.log("winner");
                    endGame(false);
                } else if(isDraw()) {
                    endGame(true);

                };
                switchPlayer(Player);
            }
            
            // console.log(cell1)
            
        })
    });

    let switchPlayer = currentPlayer =>
        (currentPlayer.getName() === 'player1') ? Player = player2 : Player = player1
    
    let isAvailable = index => {
        let arrayValue = game.getMark(index)
        if (arrayValue== " ") {
            return true
        }
        return false;
    }
     
    let checkWinner = (mark) => {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
              return gridItems[index].textContent == mark
            })
        })
    }

    let isDraw = () => {
        gridItems.every(item => {
            return item.textContent == "X" || item.textContent == "O"
        })
    }

    let endGame = (draw) => {
        if(draw) {
            message = "Draw!"
        } else {
            message = player.getMark() + "wins"
        }
    }
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