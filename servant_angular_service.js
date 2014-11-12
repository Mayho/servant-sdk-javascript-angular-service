/**
 * 
 * This Angular Service Wraps the Servant Javascript SDK and returns promises
 * It's currently configured to work with v0.0.4 of the Servant Javascript SDK
 * 
 */


angular.module('servantDevelopers').service('ServantAngularService', ['$q', function($q) {

    this.status = function() {
        return Servant.status;
    }

    this.initialize = function(options) {
        Servant.initialize(options);
    }

    this.connect = function() {
        Servant.connect();
    }

    this.getUserAndServants = function() {
        var def = $q.defer();
        Servant.getUserAndServants(function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.instantiate = function(archetype) {
        var def = $q.defer();
        Servant.instantiate(archetype, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.validate = function(archetype, instance) {
        var def = $q.defer();
        Servant.validate(archetype, instance, function(errors, result) {
            if (errors) def.resolve(errors);
            if (result) def.resolve(result);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.saveArchetype = function(servantID, archetype, instance) {
        var def = $q.defer();
        Servant.saveArchetype(servantID, archetype, instance, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.showArchetype = function(servantID, archetype, archetypeID) {
        var def = $q.defer();
        Servant.showArchetype(servantID, archetype, archetypeID, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.queryArchetypes = function(servantID, archetype, criteria) {
        var def = $q.defer();
        Servant.queryArchetypes(servantID, archetype, criteria, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.deleteArchetype = function(servantID, archetype, archetypeID) {
        var def = $q.defer();
        Servant.deleteArchetype(servantID, archetype, archetypeID, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

}]);