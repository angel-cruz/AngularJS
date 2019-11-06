angular.module('app',['components']).controlleer('BeerCounter', function($scope, $locale){
  $scope.beers = [0,1,2,3,4,5,6];
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no-beers',
      one: '{} beers',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'ziadne pivo',
      one: '{} pivo',
      few: '{} piva',
      other: '{} piv'
    };
  }
});
