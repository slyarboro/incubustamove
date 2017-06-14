(function() {
  function SongPlayer(Fixtures) {
      var SongPlayer = {};

      /*
      * @desc Retrieves album
      * @type {Object}
      */
      var currentAlbum = Fixtures.getAlbum();

      /*
      * @function getSongIndex
      * @desc Retrieves index of song in album
      * @param {Object} song
      */
      var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
      };

      /*
      * @desc Active song object from song list
      * @type {Object}
      */
      SongPlayer.currentSong = null;

      /*
      * @desc Buzz object audio file
      * @type {Object}
      */
      var currentBuzzObject = null;

      /*
      * @function setSong
      * @desc Stops currently playing song and loads new audio file as currentBuzzObject
      * @param {Object} song
      */
      var setSong = function(song) {
          if (currentBuzzObject) {
            stopSong();
          }

          currentBuzzObject = new buzz.sound(song.audioUrl, {
              formats: ['mp3'],
              preload: true
          });

          SongPlayer.currentSong = song;
      };

      /*
      * @function playSong
      * @desc Plays selected song; icons reflect song play as true
      * @param {Object} song
      */
      var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
      };

      /*
      * @function pauseSong
      * @desc Pauses song; respective album view icons reflect paused state (song play as false)
      * @param {Object} song
      */
      var pauseSong = function(song) {
        currentBuzzObject.pause();
        song.playing = false;
      }

      /*
      * @function stopSong
      * @desc Aborts song play; icons reflect song play nil
      * @param {Object} song
      */
      var stopSong = function(song) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      };

      /*
      * @function play
      * @desc Plays selected song from beginning (or) resumes current song if in paused state
      * @param {Object} song
      */
      SongPlayer.play = function(song) {
          song = song || SongPlayer.currentSong;
          if (SongPlayer.currentSong !== song) {
              setSong(song);
              playSong(song);
          } else if (SongPlayer.currentSong === song) {
              if (currentBuzzObject.isPaused()) {
                playSong(song);
              }
          }
      };

      /*
      * @function pause
      * @desc Pauses song play
      * @param {Object} song
      */
      SongPlayer.pause = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
      };

      /*
      * @function play previous song
      * @desc Skips backward to play song that precedes current song in index
      */
      SongPlayer.previous = function() {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex--;

          if (currentSongIndex < 0) {
              stopSong(song);
          } else {
              var song = currentAlbum.songs[currentSongIndex];
              setSong(song);
              playSong(song);
          }
      };

      /*
      * @function play next/following song
      * @desc Skips forward to play song that follows current song in index
      */
      SongPlayer.next = function() {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;

          if (currentSongIndex > currentAlbum.songs.length - 1) {
              stopSong(song);
          } else {
              var song = currentAlbum.songs[currentSongIndex];
              setSong(song);
              playSong(song);
          }
      };

      return SongPlayer;
    }

  angular
      .module('miggidamac')
      .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
