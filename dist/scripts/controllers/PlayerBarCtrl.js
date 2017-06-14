(function() {
    function PlayerBarCtrl(Fixtures, SongPlayer) {
      this.albumData = Fixtures.getAlbum();
      this.songPlayer = SongPlayer;
    }

    angular
      .module('miggidamac')
      .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
  })();
