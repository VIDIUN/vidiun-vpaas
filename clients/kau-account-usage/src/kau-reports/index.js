'use strict';

var appModule = require('./vau-reports.module');
appModule.config(require('./vau-reports.config'));
appModule.run(require('./vau-reports.run'));



appModule.service('vauReportsData',require('./services/vau-reports-data.service'));


appModule.directive('vauReport',require('./directives/vau-report'));

appModule.directive('vauFiltersSection',require('./directives/sections/vau-filters-section'));
appModule.directive('vauBarChartSection',require('./directives/sections/vau-bar-chart-section'));
appModule.directive('vauTableSection',require('./directives/sections/vau-table-section'));
appModule.directive('vauTotalsSection',require('./directives/sections/vau-totals-section'));
appModule.directive('vauDiagnosticSection',require('./directives/sections/vau-diagnostic-section'));
appModule.directive('vauStatusSection',require('./directives/sections/vau-status-section'));

appModule.filter('vauDynamicFilter',require('./filters/vau-dynamic-filter'));

// todo: move to core ui module

var moment = require('moment');

appModule.filter('vDate',function()
{
    return function(value)
    {
        return value ? moment(value,'YYYYMM').format('MMMM, YYYY') : value;
    };
});
