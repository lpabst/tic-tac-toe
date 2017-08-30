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
        let player = $scope.turn;
        if ($scope[player] === 'Computer'){
            let coordinates = $scope.getComputerMove();
            if ($scope.turn === 'player1'){
                $scope.board[coordinates[0]][coordinates[1]] = 'x'
                $scope.turn = 'player2';
                checkWinner()
            }else{
                $scope.board[coordinates[0]][coordinates[1]] = 'o'
                $scope.turn = 'player1';
                checkWinner();
            }
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
                    $scope.turn = 'player2'
                }else if ($scope.turn === 'player2'){
                    $scope.board[arr[0]][arr[1]] = 'o'
                    $scope.turn = 'player1'
                }
                checkWinner()
                $scope.nextTurn()
            }
        }
    }

    $scope.getComputerMove = function(){
        let row = Math.floor(Math.random() * 3)
        let column = Math.floor(Math.random() * 3)
        if ($scope.board[row][column] !== ''){
            while ($scope.board[row][column] !== ''){
                row = Math.floor(Math.random() * 3)
                column = Math.floor(Math.random() * 3)
            }
        }
        return [row, column]
    }

    function checkWinner(){
        for (var i = 0; i < 2; i ++){
            //horizontal
            if ($scope.board[i][0] === 'x' && $scope.board[i][1] === 'x' && $scope.board[i][2] === 'x'){
                setTimeout(function(){
                    alert('X won');
                    $scope.resetBoard();
                }, 20)
            }else if ($scope.board[i][0] === 'o' && $scope.board[i][1] === 'o' && $scope.board[i][2] === 'o'){
                setTimeout(function(){
                    alert('O won');
                    $scope.resetBoard();
                }, 20)
            }
            //vertical
            else if ($scope.board[0][i] === 'o' && $scope.board[1][i] === 'o' && $scope.board[2][i] === 'o'){
                setTimeout(function(){
                    alert('O won');
                    $scope.resetBoard();
                }, 20)
            }else if ($scope.board[0][i] === 'x' && $scope.board[1][i] === 'x' && $scope.board[2][i] === 'x'){
                setTimeout(function(){
                    alert('X won');
                    $scope.resetBoard();
                }, 20)
            }
            //top left to bottom right diagonal
            else if ($scope.board[0][0] === 'o' && $scope.board[1][1] === 'o' && $scope.board[2][2] === 'o'){
                setTimeout(function(){
                    alert('O won');
                    $scope.resetBoard();
                }, 20)
            }else if ($scope.board[0][0] === 'x' && $scope.board[1][1] === 'x' && $scope.board[2][2] === 'x'){
                setTimeout(function(){
                    alert('X won');
                    $scope.resetBoard();
                }, 20)
            }
            //top right to bottom left diagonal
            else if ($scope.board[2][0] === 'o' && $scope.board[1][1] === 'o' && $scope.board[0][2] === 'o'){
                setTimeout(function(){
                    alert('O won');
                    $scope.resetBoard();
                }, 20)
            }else if ($scope.board[2][0] === 'x' && $scope.board[1][1] === 'x' && $scope.board[0][2] === 'x'){
                setTimeout(function(){
                    alert('X won');
                    $scope.resetBoard();
                }, 20)
            }
        }
    }

    $scope.resetBoard = function(){
        $scope.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }


});
