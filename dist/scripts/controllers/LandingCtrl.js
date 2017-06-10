(function() {
    function LandingCtrl() {
      this.heroTitle = "Turnip the beet, sweet potato.";

    }

    angular
      .module('miggidamac')
      // controller method parameters: (name, callback function/array)
      .controller('LandingCtrl', LandingCtrl);
})();
