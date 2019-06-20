'use strict';

var appModule = require('./kau-reports.module');
appModule.config(require('./kau-reports.config'));
appModule.run(require('./kau-reports.run'));



appModule.service('vauReportsData',require('./services/kau-reports-data.service'));


appModule.directive('vauReport',require('./directives/kau-report'));

appModule.directive('vauFiltersSection',require('./directives/sections/kau-filters-section'));
appModule.directive('vauBarChartSection',require('./directives/sections/kau-bar-chart-section'));
appModule.directive('vauTableSection',require('./directives/sections/kau-table-section'));
appModule.directive('vauTotalsSection',require('./directives/sections/kau-totals-section'));
appModule.directive('vauDiagnosticSection',require('./directives/sections/kau-diagnostic-section'));
appModule.directive('vauStatusSection',require('./directives/sections/kau-status-section'));

appModule.filter('vauDynamicFilter',require('./filters/kau-dynamic-filter'));

// todo: move to core ui module

var moment = require('moment');

appModule.filter('vDate',function()
{
    return function(value)
    {
        return value ? moment(value,'YYYYMM').format('MMMM, YYYY') : value;
    };
});
