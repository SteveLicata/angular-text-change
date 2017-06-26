var textapp = angular.module("textapp", []);

textapp.controller('textCtrl', function($scope){

  var fonts = [
    "cursive", "fantasy", "monospace", "serif", "sans-serif"
  ];

  var colors = [
    "red", "black", "orange", "blue", "purple", "white", "gray"
  ];

  var style = [
    "italic", "bold"
  ];

  $scope.randomFont = fonts[Math.floor((Math.random() * 5))];
  $scope.randomColor = colors[Math.floor((Math.random() * 7))];
  $scope.randomStyle = style[Math.floor((Math.random() * 2))]; 

});
