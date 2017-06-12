// SongPlayer injected into controller; song play available within Album view
(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
  }

  angular
    .module('miggidamac')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
