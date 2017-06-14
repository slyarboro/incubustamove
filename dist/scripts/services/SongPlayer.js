(function() {
  function SongPlayer() {
      var SongPlayer = {};

      /*
      * @desc No song play upon page load
      * @type {Object}
      */
      var currentSong = null;

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
              currentBuzzObject.stop();
              currentSong.playing = null;
          }

          currentBuzzObject = new buzz.sound(song.audioUrl, {
              formats: ['mp3'],
              preload: true
          });

          currentSong = song;
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
      * SongPlayer.play (play method)
      * @desc Plays selected song from beginning (or) resumes current song if in paused state
      * @param {Object} song
      */
      SongPlayer.play = function(song) {
          if (currentSong !== song) {
              setSong(song);
              playSong(song);

          } else if (currentSong === song) {
              if (currentBuzzObject.isPaused()) {
                playSong(song);
              }
          }
      };

      /*
      * SongPlayer.pause (pause method)
      * @desc Pauses song play
      * @param {Object} song
      */
      SongPlayer.pause = function(song) {
          currentBuzzObject.pause();
          song.playing = false;
      };

      return SongPlayer;
    }

  angular
      .module('miggidamac')
      .factory('SongPlayer', SongPlayer);
})();
