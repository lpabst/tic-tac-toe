angular.module("app")
.controller("homeCtrl", function($scope) {

    $scope.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    var testBoard = [
        ['x', 'x', ''],
        ['', 'o', ''],
        ['o', '', '']
    ]
    $scope.turn = 'player1'
    var match = {
        'player1': 'x',
        'player2': 'o'
    }
    $scope.player1 = 'Human';
    $scope.player2 = 'Human';

    $scope.nextTurn = function(){
        if ($scope.getValidMove()){
            let player = $scope.turn;
            if ($scope[player] === 'Computer'){
                var coordinates = $scope.getValidMove();
                setTimeout(function(){
                    if ($scope.turn === 'player1'){
                        $scope.board[coordinates[0]][coordinates[1]] = 'x'
                        $scope.$apply();
                        if (checkWinner()){
                            return alertWinner($scope.turn)
                        }
                        $scope.turn = 'player2';
                    }else{
                        $scope.board[coordinates[0]][coordinates[1]] = 'o'
                        $scope.$apply();
                        if (checkWinner()){
                            return alertWinner($scope.turn)
                        }
                        $scope.turn = 'player1';
                    }
                    $scope.nextTurn();
                }, 500)
            }
        }else{
            return alertWinner(false)
        }        
    }

    $scope.chooseSquare = function(arr){
        let player = $scope.turn;
        if ($scope[player] === 'Computer'){
            return;
        }else{
            if ($scope.board[arr[0]][arr[1]]){
                return;
            }else{
                if ($scope.turn === 'player1'){
                    $scope.board[arr[0]][arr[1]] = 'x'
                    if (checkWinner()){
                        return alertWinner($scope.turn)
                    }
                    $scope.turn = 'player2'
                }else if ($scope.turn === 'player2'){
                    $scope.board[arr[0]][arr[1]] = 'o'
                    if (checkWinner()){
                        return alertWinner($scope.turn)
                    }
                    $scope.turn = 'player1'
                }
                $scope.nextTurn()
            }
        }
    }

    $scope.getValidMove = function(boardInput){
        let board = boardInput || $scope.board.slice();
        for (var i = 0; i < 3; i ++){
            if (board[0][i] === '' || board[1][i] === '' || board[2][i] === ''){
                if (board[1][1] === ''){
                    return [1, 1]
                }else{
                    //check for the win
                    for (var i = 0; i < 3; i++){
                        for (var j = 0; j < 3; j ++){
                            if (board[i][j] === ''){
                                let fakeBoard = [board[0].slice(), board[1].slice(), board[2].slice()]
                                fakeBoard[i][j] = match[$scope.turn]
                                if (checkWinner(fakeBoard)){
                                    return [i, j]
                                }
                            }
                        }
                    }
                    //check to block opponent's win
                    for (var i = 0; i < 3; i++){
                        for (var j = 0; j < 3; j ++){
                            if (board[i][j] === ''){
                                let fakeBoard = [board[0].slice(), board[1].slice(), board[2].slice()]
                                for (var key in match){
                                    if (key != $scope.turn){
                                        fakeBoard[i][j] = match[key];
                                        if (checkWinner(fakeBoard)){
                                            return [i, j]
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //pick a random move
                    let row = Math.floor(Math.random() * 3)
                    let column = Math.floor(Math.random() * 3)
                    if (board[row][column] !== ''){
                        while (board[row][column] !== ''){
                            row = Math.floor(Math.random() * 3)
                            column = Math.floor(Math.random() * 3)
                        }
                    }
                    // console.log('random move')
                    return [row, column]
                }
            }
        }
        // console.log('no empty squares at all')
        return false;
    }

    function checkWinner(board){
        var board = board || $scope.board;
        for (var i = 0; i <= 2; i ++){
            //horizontal
            if (board[i][0] === 'x' && board[i][1] === 'x' && board[i][2] === 'x' || board[i][0] === 'o' && board[i][1] === 'o' && board[i][2] === 'o'){
                return true;
            }
            //vertical
            else if (board[0][i] === 'o' && board[1][i] === 'o' && board[2][i] === 'o' || board[0][i] === 'x' && board[1][i] === 'x' && board[2][i] === 'x'){
                return true;
            }
        }
        //top left to bottom right diagonal
        if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o' || board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x'){
            return true;
        }
        //top right to bottom left diagonal
        else if (board[2][0] === 'o' && board[1][1] === 'o' && board[0][2] === 'o' || board[2][0] === 'x' && board[1][1] === 'x' && board[0][2] === 'x'){
            return true;
        }else{
            return false;
        }
    }

    function alertWinner(player){
        if (!player){
            var message = 'The game is a tie!'
        }else{
            var message = 'Player ' + player.substring(6) + ' wins!'
        }
        setTimeout(function(){
            alert(message);
            $scope.resetBoard();
            $scope.$apply();
        }, 20)
    }

    $scope.resetBoard = function(){
        $scope.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        $scope.nextTurn();
    }

    // checkWinner(testBoard)
    // $scope.getValidMove(testBoard)

});
