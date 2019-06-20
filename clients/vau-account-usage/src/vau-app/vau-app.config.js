'use strict';

module.exports = function ($stateProvider, $urlRouterProvider, $httpProvider, $provide, vAppConfig,vaVMCConfig, vaVidiunAPIFacadeProvider) {


    function getQueryStringByName(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    $urlRouterProvider.otherwise(vAppConfig.routing.defaultUri);

    //add safeApply function for $rootScope - called by $scope.$root.safeApply(fn)
    $provide.decorator('$rootScope', function($delegate) {
            $delegate.safeApply = function(fn) {
                var phase = $delegate.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && typeof fn === 'function') {
                        fn();
                    }
                } else {
                    $delegate.$apply(fn);
                }
            };
            return $delegate;
        }
    );

    var apiUri = vaVMCConfig.vidiunAPIUri || _.get(vAppConfig,'server.apiUri');
    var partnerVS = vaVMCConfig.vs || getQueryStringByName('vs');
    vaVidiunAPIFacadeProvider.setVidiunAPIService(apiUri);
    vaVidiunAPIFacadeProvider.setPartnerVS(partnerVS);


    $stateProvider.state('root', {
        url: '',
        abstract:true,
        template: '<div ui-view></div>'
    });

    $stateProvider.state('root.shell', {
        url: '',
        abstract:true,
templateUrl: 'vau-app/partials/vau-shell.html'
    });

    $stateProvider.state('root.shell.reports', {
        url: '/reports',
        abstract:true,
templateUrl: 'vau-app/partials/vau-reports.html'
    });

    $stateProvider.state('root.shell.reports.report', {
        url: '/{reportId}',
templateUrl: 'vau-app/partials/vau-report.html',
        controller : 'vauReport',
        controllerAs : 'vm'
    });

};
