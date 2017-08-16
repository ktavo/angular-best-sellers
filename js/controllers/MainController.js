app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
    { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg' 
  	}, 
  	{ 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('2013', '08', '01'), 
      cover: 'img/program-or-be-programmed.jpg' 
  	},
    { 
      name: 'Cien anios de soledad', 
      price: 13, 
      pubdate: new Date('1967', '06', '05'), 
      cover: 'img/cien-anios-de-soledad.jpg' 
  	},
    { 
      name: 'La divina comedia', 
      price: 10, 
      pubdate: new Date('1472', '04', '11'), 
      cover: 'img/la-divina-comedia.jpg' 
  	}
  ]
}]);
