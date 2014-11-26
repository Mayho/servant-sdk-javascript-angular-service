/**
 * 
 * This Angular Service Wraps the Servant Javascript SDK and returns promises
 * It's currently configured to work with v1.0.6 of the Servant Javascript SDK
 * 
 */

angular.module('servantDevelopers').service('ServantAngularService', ['$q', function($q) {

    this.status = function() {
        return Servant.status;
    }

    // Run the initialize method outside of the Angular Service

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

    this.setServant = function(servant) {
        var def = $q.defer();
        Servant.setServant(servant);
        def.resolve(Servant.servant);
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

    this.saveArchetype = function(archetype, instance) {
        var def = $q.defer();
        Servant.saveArchetype(archetype, instance, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.showArchetype = function(archetype, archetypeID) {
        var def = $q.defer();
        Servant.showArchetype(archetype, archetypeID, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.queryArchetypes = function(archetype, criteria) {
        var def = $q.defer();
        Servant.queryArchetypes(archetype, criteria, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

    this.deleteArchetype = function(archetype, archetypeID) {
        var def = $q.defer();
        Servant.deleteArchetype(archetype, archetypeID, function(response) {
            def.resolve(response);
        }, function(error) {
            def.reject(error);
        });
        return def.promise;
    }

}]);