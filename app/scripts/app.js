// ng providers injected into configuration block, granting application full access to the providers
// $state creates new application state (object/string)
// $location determines how linking paths will be stored
(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
          //  user sees clean URLs sans hashbang
          enabled: true,
          requireBase: false
      });

      $stateProvider
        .state('landing', {
          url: '/',
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
        })

        .state('album', {
          url: '/album',
          controller: 'AlbumCtrl as album',
          templateUrl: '/templates/album.html'
        })

        .state('collection', {
          url: '/collection',
          controller: 'CollectionCtrl as collection',
          templateUrl: '/templates/collection.html'
        });
    }

    angular
      .module('miggidamac', ['ui.router'])
      .config(config);

})();
