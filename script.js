
const game = (function() {
    const gameBoard = document.querySelector(".gameboard");
    const _board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const setMark = (index, mark) => {
        _board[index] = mark;
    };

    const getMark = (index) => {
        return _board[index]
    };

    const getLength = () => {
        return _board.length
    }

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
        getLength,
        _board
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
    
    let player1= " ";
    let player2 = " ";
    let Player = " ";
    const messageContainer = document.querySelector(".message-container");
    const message = document.querySelector(".message");
    let gridItems = document.querySelectorAll('.cell');
    const turnMessage = document.querySelector(".headMessage");
    
    
    const turnAlert = () => {
        turnMessage.textContent = Player.getMark() + " Turn"
    }
    const createPlayers = () => {
        player1 = player("player1", "X");
        player2 = player("player2", "O");
        Player = player1;
      
    }
    
    const startGame = () => {
        createPlayers();
        turnAlert()
        for(let i=0; i<game.getLength(); i++){
            game.setMark(i, " ")  
        }
        gridItems.forEach(item => { 
            item.removeEventListener('click', handle)
            item.addEventListener('click', handle)
            index = item.dataset.cell
            item.textContent = game.getMark(index)
        });
        messageContainer.classList.remove('show')
       
    }
    const handle = (e) => {
        let index = e.target.dataset.cell;
        if(isAvailable(index)) {
            game.setMark(index, Player.getMark())
            e.target.textContent = game.getMark(index);
            if(checkWinner(Player.getMark())) {
                return endGame(false);
            } else if(isDraw()) {
                return endGame(true);
            };
            switchPlayer(Player);
        }
        turnAlert();
    }
   
    let switchPlayer = currentPlayer =>
        (currentPlayer.getName() === 'player1') ? Player = player2 : Player = player1
    
    let isAvailable = index => {
        let arrayValue = game.getMark(index)
        if (arrayValue == " ") {
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
        return [...gridItems].every(item => {
            return item.textContent == "X" || item.textContent == "O"
        })
    }

    let endGame = (draw) => {
        if(draw) {
            message.textContent = "Draw!"
        } else {
            message.textContent = Player.getMark()  +  " wins"
        }
        messageContainer.classList.add("show")
        
    }
    
    const resetButton = document.querySelector("#restartButton");
    resetButton.addEventListener('click', startGame);

    return {
        startGame,
        createPlayers
    }

    // updateBoard
    
    

})();

displayController.startGame();

// createPlayer() => {