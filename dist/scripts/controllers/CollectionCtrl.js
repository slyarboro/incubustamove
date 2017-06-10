(function() {
    function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(12);
    }

    angular
        .module('miggidamac')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
