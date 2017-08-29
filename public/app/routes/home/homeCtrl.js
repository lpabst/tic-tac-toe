angular.module("app")
.controller("homeCtrl", function($scope) {

    $scope.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    $scope.turn = 'x'

  $scope.chooseSquare = function(arr){
      if ($scope.board[arr[0]][arr[1]]){
        alert('That square has already been chosen');
      }else{
        if ($scope.turn === 'x'){
            $scope.board[arr[0]][arr[1]] = 'x'
            $scope.turn = 'o'
        }else if ($scope.turn === 'o'){
            $scope.board[arr[0]][arr[1]] = 'o'
            $scope.turn = 'x'
        }
        checkWinner()
      }
    
  }

  function checkWinner(){
      for (var i = 0; i < 2; i ++){
          //horizontal
        if ($scope.board[i][0] === 'x' && $scope.board[i][1] === 'x' && $scope.board[i][2] === 'x'){
            setTimeout(function(){alert('X won')}, 20)
        }else if ($scope.board[i][0] === 'o' && $scope.board[i][1] === 'o' && $scope.board[i][2] === 'o'){
            setTimeout(function(){alert('O won')}, 20)
        }
        //vertical
        else if ($scope.board[0][i] === 'o' && $scope.board[1][i] === 'o' && $scope.board[2][i] === 'o'){
            setTimeout(function(){alert('O won')}, 20)
        }else if ($scope.board[0][i] === 'x' && $scope.board[1][i] === 'x' && $scope.board[2][i] === 'x'){
            setTimeout(function(){alert('X won')}, 20)
        }
        //top left to bottom right diagonal
        else if ($scope.board[0][0] === 'o' && $scope.board[1][1] === 'o' && $scope.board[2][2] === 'o'){
            setTimeout(function(){alert('O won')}, 20)
        }else if ($scope.board[0][0] === 'x' && $scope.board[1][1] === 'x' && $scope.board[2][2] === 'x'){
            setTimeout(function(){alert('X won')}, 20)
        }
        //top right to bottom left diagonal
        else if ($scope.board[2][0] === 'o' && $scope.board[1][1] === 'o' && $scope.board[0][2] === 'o'){
            setTimeout(function(){alert('O won')}, 20)
        }else if ($scope.board[2][0] === 'x' && $scope.board[1][1] === 'x' && $scope.board[0][2] === 'x'){
            setTimeout(function(){alert('X won')}, 20)
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
