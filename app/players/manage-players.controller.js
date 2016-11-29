(function() {
'use strict';

    angular
        .module('app')
        .controller('ManagePlayersController', ManagePlayersController);

    ManagePlayersController.$inject = ['$state', 'actionQueue', 'players', 'util'];

    function ManagePlayersController($state, actionQueue, players, util) {
        var vm = this;
        vm.partial = util.partialFactory("app/players/partials/"); 

        vm.players = players;

        vm.select = function (party) {
            players.selectParty(party);

            actionQueue.next($state);
        };    

        activate();

        ////////////////

        function activate() { 
            // If there aren't any parties, send them to edit
            if ( !players.parties || !players.parties.length ) {
                $state.go("players.edit");
                return;
            }
        }
    }
})();