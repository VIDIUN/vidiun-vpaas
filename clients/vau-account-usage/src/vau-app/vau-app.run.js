'use strict';

module.exports = function ($rootScope,$state,vAppConfig) {

    $rootScope.$state = $state;

    $rootScope.vAppConfig = vAppConfig;
};
