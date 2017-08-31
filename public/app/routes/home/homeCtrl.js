angular.module("app")
.controller("homeCtrl", function($scope) {

    $scope.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    $scope.turn = 'player1'
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
                alert('That square has already been chosen');
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

    $scope.getValidMove = function(){
        let board = $scope.board;
        for (var i = 0; i < 3; i ++){
            if (board[0][i] === '' || board[1][i] === '' || board[2][i] === ''){
                // console.log('found empty square');
                if (board[1][1] === ''){
                    return [1, 1]
                }else{
                    // for (var i = 0; i < 3; i++){
                    //     for (var j = 0; j < 3; j ++){

                    //     }
                    // }
                    let row = Math.floor(Math.random() * 3)
                    let column = Math.floor(Math.random() * 3)
                    if (board[row][column] !== ''){
                        while (board[row][column] !== ''){
                            row = Math.floor(Math.random() * 3)
                            column = Math.floor(Math.random() * 3)
                        }
                    }
                    return [row, column]
                }
            }else{
                // console.log('no empty squares on row ' + i)
            }
        }
        // console.log('no empty squares at all')
        return false;
    }

    function checkWinner(){
        var board = $scope.board;
        for (var i = 0; i < 2; i ++){
            //horizontal
            if (board[i][0] === 'x' && board[i][1] === 'x' && board[i][2] === 'x' || board[i][0] === 'o' && board[i][1] === 'o' && board[i][2] === 'o'){
                return true;
            }
            //vertical
            else if (board[0][i] === 'o' && board[1][i] === 'o' && board[2][i] === 'o' || board[0][i] === 'x' && board[1][i] === 'x' && board[2][i] === 'x'){
                return true;
            }
            //top left to bottom right diagonal
            else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o' || board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x'){
                return true;
            }
            //top right to bottom left diagonal
            else if (board[2][0] === 'o' && board[1][1] === 'o' && board[0][2] === 'o' || board[2][0] === 'x' && board[1][1] === 'x' && board[0][2] === 'x'){
                return true;
            }
        }
        return false;
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



});
