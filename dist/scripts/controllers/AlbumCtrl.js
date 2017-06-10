(function() {
  function AlbumCtrl() {
    this.albumData = angular.copy(albumPicasso);
  }

  angular
    .module('miggidamac')
    .controller('AlbumCtrl', AlbumCtrl);
})();
