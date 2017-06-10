// Fixtures injected so service available for use within controller
(function() {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();
  }

  angular
    .module('miggidamac')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
